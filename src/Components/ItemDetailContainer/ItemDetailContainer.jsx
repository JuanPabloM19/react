import { useEffect, useState } from "react"

import {ItemDetail} from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

export const ItemDetailConatiner = () =>{
    const [item, setItem] = useState([])
    const {id} = useParams()
    useEffect(() => {
        fetch('../productos.json')
        .then(response => response.json())
        .then (productos => {
            const prod = productos.find(prod => prod.id === (id))
            setItem(prod)
        })
    }, [id])
    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}