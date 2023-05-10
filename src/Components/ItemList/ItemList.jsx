import { Item } from "../Item/Item"
import { ItemCart } from "../ItemCart/ItemCart"

export const ItemList = ({ productos }) => {
        return (
            <div className="row gap-5 column-gap-3 m-4">
                {productos.map(producto => <Item key={producto.id} item={producto} />)}
            </div>
        )
}