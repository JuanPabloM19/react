import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useCarritoContext } from "../../Context/CartContext";
import { useState } from "react";

export const ItemDetail = ({ item }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const {addItem} = useCarritoContext()

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    
    addItem(item,quantity)
  }

  return (
    <div className="container">
    <div className="row d-flex flex-wrap justify-content-center">
      <div className="card-body">
        <h3 className="card-title">{item.nombre}</h3>
        <img src={item.img} alt={item.name} className="img-fluid card-img-top" />
        <div>
          <p className="card-text">Color: {item.color}</p>
          <p className="card-text">Precio: ${item.precio}</p>
          <p className="card-text">Descripcion: {item.descripcion}</p>
          <p className="card-text">Stock: {item.stock}</p>
          <div className="col-12">
            {quantityAdded > 0 ? (
                <Link to='/cart' className='btn btn-dark'>Terminar Compra</Link>
            ) : ( <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={handleOnAdd} />)
            }
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};