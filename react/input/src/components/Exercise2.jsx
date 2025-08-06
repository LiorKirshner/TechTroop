import { useState } from "react";

const Exercise2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  const handleFruitChange = (e) => {
    const selectedFruit = e.target.value;
    setFruit(selectedFruit);

    // Console log after setting the fruit, using the current name from state
    if (name && selectedFruit) {
      console.log(`${name} selected ${selectedFruit}`);
    }
  };

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select id="select-input" onChange={handleFruitChange} value={fruit}>
        <option value="">Select a fruit</option>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
        <option value="grape">Grape</option>
        <option value="strawberry">Strawberry</option>
      </select>
    </div>
  );
};
export default Exercise2;
