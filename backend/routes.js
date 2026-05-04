const express = require("express");
const router = express.Router();
const pool = require("./db");

router.get("/nearby", async (req, res) => {
  const { lng, lat, service } = req.query;

  // ✅ validation
  if (!lng || !lat) {
    return res.status(400).json({ error: "lng and lat required" });
  }

  try {
    const result = await pool.query(
      `
      SELECT id, name, service,
      ST_AsText(location) as location,
      ST_Distance(
        location::geography,
        ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography
      ) AS distance
      FROM providers
      WHERE 
        ST_DWithin(
          location::geography,
          ST_SetSRID(ST_MakePoint($1, $2), 4326)::geography,
          50000   -- 🔥 50km radius
        )
        AND ($3::text IS NULL OR LOWER(service) = LOWER($3))
      ORDER BY distance ASC
      `,
      [lng, lat, service || null]
    );

    res.json(result.rows);
  } catch (err) {
    console.error("ERROR:", err.message);
    res.status(500).send(err.message);
  }
});

module.exports = router;