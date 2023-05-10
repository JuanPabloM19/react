import { useEffect, useState } from "react"

import {ItemList} from "../ItemList/ItemList"
import { getProducts } from "../../Firebase/Firebase"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {category} = useParams()

  useEffect(() => {
    getProducts(category)
    .then((res)=> setProductos(res))
    .catch((error)=> console.log(error))
  }, [category])
  return (
    <div>
      {<ItemList plantilla='Item' productos={productos} />}
    </div>
  )
}