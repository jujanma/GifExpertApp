import { React, useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("onePunch");

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Buscar GIF"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
