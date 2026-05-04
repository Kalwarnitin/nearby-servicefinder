import { useEffect } from "react";

const Location = ({ setCoords }) => {
  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("Location fetched:", pos.coords);

        setCoords({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.log("Location error:", err);
      }
    );
  }, [setCoords]); // ✅ FIX

  return <p>📍 Getting location...</p>;
};

export default Location;