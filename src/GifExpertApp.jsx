import { React, useState } from "react";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one puta madre"]);

  const onAddCategory = () => {
    console.log("funcion");
    setCategories(["Valorant", ...categories]);
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <button onClick={onAddCategory}>Agregar</button>

      <ol>
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};
