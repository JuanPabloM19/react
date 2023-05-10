import { useEffect, useState } from "react"

import { ItemDetail } from "../ItemDetail/ItemDetail"
import { getProduct } from "../../Firebase/Firebase"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(prod => setItem(prod))

    }, [id])

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}