import {addDoc, collection, deleteDoc, doc, getDoc, getDocs, getFirestore, updateDoc} from "firebase/firestore"

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDyazFmMSUftfo-dASFcL3LB9m4DbCz-9Q",
  authDomain: "eccomerce-4f3a9.firebaseapp.com",
  projectId: "eccomerce-4f3a9",
  storageBucket: "eccomerce-4f3a9.appspot.com",
  messagingSenderId: "249283923022",
  appId: "1:249283923022:web:6ee94c6cc9d208fae5c71f",
  measurementId: "G-289SV1KXRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)

export const createProducts = async () =>{
  const promise = await fetch('./json/productos.json')
  const productos = await promise.json()
  productos.forEach(async (prod) =>{
    await addDoc(collection(db, "productos"), {
      nombre: prod.nombre,
      precio: prod.precio,
      categoria: prod.categoria,
      img: prod.img,
      color: prod.color,
      descripcion: prod.descripcion,
      stock: prod.stock
    })
  })
}

export const getProducts = async () => {
  const prods = await getDocs(collection(db, "productos"))
  const items = prods.docs.map(prod => {
      return { ...prod.data(), id: prod.id }
  })
  return items
}

export const getProduct = async (id) => {
  const prod = await getDoc(doc(db, "productos", id))
  const item = { ...prod.data(), id: prod.id }
  return item
}
export const updateProduct = async (id, info) => {
  await updateDoc(doc(db, "productos", id), info)
}

export const deleteProduct = async (id) => {
  await deleteDoc(doc(db, "productos", id))
}

export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
  const ordenCompra = await addDoc(collection(db, "ordenCompra"), {
      cliente: cliente,
      items: carrito,
      precioTotal: precioTotal,
      fecha: fecha
  })
  return ordenCompra
}

export const getOrdenCompra = async (id) => {
  const ordenCompra = await getDoc(doc(db, "ordenCompra", id))
  const item = { ...ordenCompra.data(), id: ordenCompra.id }
  return item
}

export const deleteOrdenCompra = async (id) => {
  await deleteDoc(doc(db, "ordenCompra", id))
}