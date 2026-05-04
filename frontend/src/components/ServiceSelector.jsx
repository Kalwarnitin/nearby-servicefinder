const ServiceSelector = ({ setService }) => {
  const handleChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setService(""); // nothing selected
    } else {
      setService(value.toLowerCase());
    }
  };

  return (
    <div>
      <h3>Select Service</h3>

      <select onChange={handleChange}>
        <option value="">--Select--</option>
        <option value="plumber">Plumber</option>
        <option value="electrician">Electrician</option>
      </select>
    </div>
  );
};

export default ServiceSelector;