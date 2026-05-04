import { useEffect, useState } from "react";
import API from "../services/api";

const NearbyList = ({ coords, service }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (coords && service) {
      API.get(
        `/nearby?lat=${coords.lat}&lng=${coords.lng}&service=${service}`
      )
        .then((res) => {
          console.log("DATA:", res.data);
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [coords, service]);

  return (
    <div>
      <h2>Nearby Providers</h2>

      {!service && <p>Select a service first</p>}

      {service && data.length === 0 && <p>No providers found</p>}

      {service &&
        data.length > 0 &&
        data.map((item) => (
         <div
  key={item.id}
  style={{
    border: "1px solid #e0e0e0",
    padding: "15px",
    margin: "15px 0",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    background: "#fff",
  }}
>
            <h3>{item.name}</h3>
            <p>{item.service}</p>

            <p style={{ color: "gray", fontSize: "14px" }}>
  📍 {(item.distance / 1000).toFixed(2)} km away
</p>
          </div>
        ))}
    </div>
  );
};

export default NearbyList;