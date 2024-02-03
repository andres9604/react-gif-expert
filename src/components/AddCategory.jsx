import React, { useState } from "react";
import PropTypes from "prop-types";

//componente especializado para el input

//el componente recibe una funcion llamada onNewCategory, que ees la que se encargara de almacenar la nueva categoria
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  //expresion de funcion cuando cambia el input
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  //expresion de funcion, cuando se envia el formulario
  const handleSubmitForm = (e) => {
    console.log("ejecucion formulario ...");

    //cancelamos el envio del formulario
    e.preventDefault();

    const cleanInputValue = inputValue.trim();

    //si el valor ingresado es menos de 1 caracter, no continua con el proceso
    if (cleanInputValue.length <= 1) return;

    //* PRIMERA OPCION al hook del padre GifExpert llamado setCategories, le pasamos el valor ingresado y enviado en el formulario

    //se maneja el hook como un callback, para asi poder acceder a los valores que ya traia y agregarle el nuevo valor
    //setCategories((categories) => [inputValue, ...categories]);

    //* SEGUNDA OPCION: le paso el valor a la funcion del componente padre, y es desde el padre donde se agrega la nueva categoria
    onNewCategory(cleanInputValue);

    //limpiamos el input
    setInputValue("");
  };

  //no es necesario usar un fragmento <> ya que el form es el elemento padre y encapsula todos los inputs
  return (
    <form onSubmit={handleSubmitForm} aria-label="form">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar gifs"
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};
