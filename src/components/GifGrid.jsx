import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

//Componente GifGird
export const GifGrid = ({ category }) => {
  //! NO ES BUENA PRACTICA DEFINIR LAS FUNCIONES QUE HACEN REQUEST DENTRO DEL COMPONENTE, PORQUE EN CADA RENDER DEL COMPONENTE SE REALIZARA EL REQUEST

  // ! NUNCA SE DEBE PONER EL LLAMADO DE UNA FUNCION DENTRO DE UN COMPONENTE
  //getGifs(category);

  /**********************************************/
  //PRIMERA OPCION PARA  EL COMPONENTE

  // //se crea el hook de images
  // const [images, setImages] = useState([]);

  // //* como el getGifs es una promesa, y debo esperar a que finalice, debo llamarla dentro de otra funcion, porque el await no es permitido dentro del hook useEffect

  // //funcion que consultara las imagenes y las asignara al stateSetImages
  // const getImages = async () => {
  //   //obtiene las imagenes de la API
  //   const imagesList = await getGifs(category);

  //   //asigna las imagenes al hook setImages (para que las pinte en el componente)
  //   setImages(imagesList);
  // };

  // //para ejecutar funciones dentro de un componente, se utiliza el hook useEffect
  // useEffect(() => {
  //   //llamo la funcion que me ejecuta la consulta en la api
  //   getImages();
  // }, []);

  /**********************************************/
  //SE PASA TODO LO DE ARRIBA A UN CUSTOM HOOK LLAMADO useFetchGifs
  const { images, isLoading } = useFetchGifs(category);
  //console.log(images, isLoading);

  return (
    <>
      <h3>{category}</h3>

      {/* AND Logico */}
      {isLoading && <h2>Cargando ...</h2>}

      <div className="card-grid">
        {/* recorro el listado de las imagenes obtenidas de la api */}
        {images.map((image) => (
          <GifGridItem key={image.id} image={image} />

          // {...image} -> de esta forma enviara todas las properties de image al componente gifgriditem, y alla se recibira las props que hacen parte de image, id, title y url
        ))}
      </div>
    </>
  );
};
