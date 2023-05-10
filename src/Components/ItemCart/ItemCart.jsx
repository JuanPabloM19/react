import { useCarritoContext } from "../../Context/CartContext";

export const ItemCart = ({ item }) => {
  const { removeItem } = useCarritoContext();
  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center">
        <div className="col-md-4 d-flex">
          <div className="card-body">
            <img
              src={item.img}
              className="img-fluid round-start card-img-top"
              alt={`Imagen de ${item.nombre}`}
            />
          </div>
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">Cantidad: {item.quantity}</p>
              <p className="card-text">Precio Unitario:$ {item.precio}</p>
              <p className="card-text">
                Subtotal: ${item.precio * item.quantity}
              </p>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
  );
};
