import { getProductByCategory, getProducts } from "../../hooks/asyncMock"
import { useEffect, useState } from "react"

import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const asyncFunc = categoryId ? getProductByCategory : getProducts
        
        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.error(error)
            })
    },[categoryId])

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList> products = {products}</ItemList>
        </div>
    )
}
export default ItemListContainer