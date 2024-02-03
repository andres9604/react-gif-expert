//se improta propTypes para validacion de tipado de las propiedades del componete
import PropTypes from "prop-types";

export const GifGridItem = ({ image }) => {
  return (
    <div className="card">
      <img src={image.url} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

//proptypes del componente
GifGridItem.propTypes = {
  image: PropTypes.object.isRequired,
};
