import "./Item.css";

import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <div className="container">
      <div className="row d-flex flex-wrap justify-content-center">
        <div className="col-md-4 d-flex">
          <div className="card-body">
            <h3 className="card-title">{item.nombre}</h3>
            <img
              src={item.img}
              alt={item.name}
              className="img-fluid round-start card-img-top"
            />
            <p className="card-text">Color: {item.color}</p>
            <p className="card-text">Precio: ${item.precio}</p>
            <p className="card-text">Stock: {item.stock}</p>
            <Link className="nav-link" to={`/product/${item.id}`}>
              <button className="btn btn-dark">Ver Producto</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
