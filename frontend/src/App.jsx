import { useState } from "react";
import Location from "./components/Location";
import ServiceSelector from "./components/ServiceSelector";
import NearbyList from "./components/NearbyList";

function App() {
  const [coords, setCoords] = useState(null);
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

      <Location setCoords={setCoords} />
      <ServiceSelector setService={setService} />
      <NearbyList coords={coords} service={service} />
    </div>
  );
}

export default App;