const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: 'https://http2.mlstatic.com/D_NQ_NP_874720-MLA46088620270_052021-O.jpg',
        stock: 25,
        descripcion: 'El iPhone 12 Pro Max tiene una pantalla Super Retina XDR más grande, de 6.7 pulgadas. Con el nuevo Ceramic Shield, es cuatro veces más resistente a las caídas. Y te permite tomar fotos increíbles con poca luz gracias al mejor sistema de cámaras Pro de un iPhone y al rango de zoom óptico de 5x. También puedes grabar, editar y reproducir video en Dolby Vision con calidad cinematográfica, tomar retratos con modo Noche y disfrutar experiencias de realidad aumentada de última generación con el escáner LiDAR. El iPhone 12 Pro Max viene con el potente chip A14 Bionic y es compatible con los nuevos accesorios MagSafe, que se adhieren magnéticamente a tu iPhone y brindan una carga inalámbrica más rápida. Una infinidad de posibilidades que no dejarán de sorprenderte.'
    },
    {
        id: '2',
        name: 'PC Gamer',
        price: 4000,
        category: 'pc gamer',
        img: 'https://http2.mlstatic.com/D_NQ_NP_716427-MLA51607119507_092022-O.jpg',
        stock: 14,
        descripcion: 'Pc Armada Infernal. Lo maximo de lo maximo al momento. Procesador:- AMD Ryzen 9 5950X 16-Core 3.4 GHz Socket AM4 105W 100-100000059WOF Desktop Processor. Refrigeracion:- Watercooling Thermaltake X120 AM4. Motherboard:- MOTHER GIGABYTE (1151) X570 AORUS ELITE WIFI. Memoria:- 32GB DDR4 3000mhz / 4 modulos de 8gb o 2 de 16gb. (Gigabyte, Corsair, GSKILL, o similar). Almacenamiento:- Unidad m.2 SSD 500gb (Intel, Samsung , Corsair o Gigabyte) - Disco de 2Tb 7200RPM modelo BLACK (Según stock). Placa de video:- Nvidia RTX 3090 (Según stock primeras marcas ASUS, GIGABYTE o MSI). Fuente:- Fuente 700w 80plus gold. Gabinete:- Gabinete Corsair Carbide SPEC Delta RGB BLACK Fans x3'
    },
    {
        id: '3',
        name: 'Silla Gamer',
        price: 250,
        category: 'silla',
        img: 'https://www.qloud.ar/SITES/ryr/fotos/20794-1.jpg',
        stock: 4,
        descripcion: 'Silla Gamer Wesdar. Soporta 100kg. Altura regulable. Inclinacion de 170o. Apoyabrazos regulables en altura y pivotantes. Estrella reforzada'
    },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productCategory))
        },500)
    })
}