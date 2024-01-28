import React, { useState } from "react";

//importamos los componentes desde el index
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  //es ideal que los hooks tengan un valor inicial
  const [categories, setCategories] = useState(["One Punch"]);

  //funcion que añadira la nueva categoria al hook de categories
  const handleAddCategory = (newCategorie) => {
    console.log(newCategorie);
    //! para insertar en arreglos en react, no se utiliza push, ya que react pretende no mutar las variables, se utiliza es su variable modificadora, en este caso setCategories

    //antes de insertar la nueva categoria, validamos que no exista ya en el arreglo
    if (categories.includes(newCategorie)) return;

    //agrego la nueva categoria, que se ingreso en el componente hijo, se se paso
    setCategories([newCategorie, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Componente input para agregar la categoria */}
      <AddCategory
        //* primera forma de hacerlo
        //setCategories={setCategories}

        //* segunda forma
        //le creo una prop llamada onNewCategory, y le paso la funcion como parametro al componente hijo
        onNewCategory={handleAddCategory}
      />

      {/* Listado de GIF */}
      {categories.map((category) => (
        //llamo el componente que pintara la categoria
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
