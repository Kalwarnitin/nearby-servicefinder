import { useState } from "react";
import ServiceSelector from "./components/ServiceSelector";
import NearbyList from "./components/NearbyList";

function App() {
  const [coords] = useState({
    lat: 28.6139,
    lng: 77.2090,
  });

  const [service, setService] = useState("");

  console.log(coords);

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px",
          color: "#333",
        }}
      >
        🚀 Nearby Service Finder
      </h1>

      <ServiceSelector setService={setService} />
      <NearbyList coords={coords} service={service} />
    </div>
  );
}

export default App;
