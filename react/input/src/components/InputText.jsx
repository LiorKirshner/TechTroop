import { useState } from "react";

const InputTest = () => {
  const [text, setText] = useState("");
  const [box, setBox] = useState(false);

  const updateText = (event) => {
    setText(event.target.value);
  };

  const updateBox = (event) => {
    setBox(event.target.checked);
  };

  return (
    <>
      <div>
        <input type="text" value={text} onChange={updateText} />
      </div>
      <div>
        <input type="checkbox" checked={box} onChange={updateBox} />
      </div>
    </>
  );
};

export default InputTest;
