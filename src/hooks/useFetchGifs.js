import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  //se crea el hook de images
  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  //funcion que consultara las imagenes y las asignara al stateSetImages
  const getImages = async () => {
    //obtiene las imagenes de la API
    const imagesList = await getGifs(category);

    //asigna las imagenes al hook setImages (para que las pinte en el componente)
    setImages(imagesList);
    setIsLoading(false);
  };

  //para ejecutar funciones dentro de un componente, se utiliza el hook useEffect
  useEffect(() => {
    //llamo la funcion que me ejecuta la consulta en la api
    getImages();
  }, []);

  return {
    images,
    isLoading,
  };
};
