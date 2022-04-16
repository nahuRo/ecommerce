const products = [
    {
        'id': '1',
        'name': 'Samsung Galaxy A22',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/173072-1200-auto?width=1200&height=auto&aspect=true',
        'price': 44900,
        'marca': 'Samsung',
        'description': `Mejora la velocidad y el rendimiento con procesador Octa-core y 4GB de memoria RAM.
                        Cuatro cámaras = Un resultado increíble. Hasta 48 MP de nitidez y OIS.
                        Batería potente y duradera de 5.000 mAh. Mantenete Conectado.`

    },
    {
        'id': '2',
        'name': 'Samsung Galaxy M12',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/169269-1200-auto?width=1200&height=auto&aspect=true',
        'price': 40900,
        'marca': 'Samsung',
        'description': `Disfrutá de tu contenido en la pantalla Infinity-V de 6.5".
                        Cámara cuádruple de hasta 48 MP. Capturá momentos como un profesional.
                        Batería potente y durable por más horas.`

    },
    {
        'id': '3',
        'name': 'Samsung Galaxy A32',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/168737-800-auto?width=800&height=auto&aspect=true',
        'price': 50900,
        'marca': 'Samsung',
        'description': `Diseño minimalista y acabado brillante
                        Pantalla expansiva Infinity-U de 6,4"
                        Sistema de múltiples cámaras. Cámara principal de 64MP
                        Batería de dos días de duración
                        128GB de almacenamiento interno expansible
                        Hasta 1TB con tarjeta microSD`
    },
    {
        'id': '5',
        'name': 'Xiaomi Redmi Note 11S',
        'img':'https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fsmartphones%2Fxiaomi-redmi-note-11s-5g.png&w=256&q=75',
        'price': 50900,
        'marca': 'Xiaomi',
        'description': `Diseño minimalista y acabado brillante
                        Pantalla expansiva Infinity-U de 6,4"
                        Sistema de múltiples cámaras. Cámara principal de 64MP
                        Batería de dos días de duración
                        128GB de almacenamiento interno expansible
                        Hasta 1TB con tarjeta microSD`
    },
    {
        'id': '7',
        'name': 'Samsung Galaxy A22',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/173072-1200-auto?width=1200&height=auto&aspect=true',
        'price': 44900,
        'marca': 'Samsung',
        'description': `Mejora la velocidad y el rendimiento con procesador Octa-core y 4GB de memoria RAM.
                        Cuatro cámaras = Un resultado increíble. Hasta 48 MP de nitidez y OIS.
                        Batería potente y duradera de 5.000 mAh. Mantenete Conectado.`

    },
    {
        'id': '8',
        'name': 'Samsung Galaxy M12',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/169269-1200-auto?width=1200&height=auto&aspect=true',
        'price': 40900,
        'marca': 'Samsung',
        'description': `Disfrutá de tu contenido en la pantalla Infinity-V de 6.5".
                        Cámara cuádruple de hasta 48 MP. Capturá momentos como un profesional.
                        Batería potente y durable por más horas.`

    },
    {
        'id': '9',
        'name': 'Samsung Galaxy A32',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/168737-800-auto?width=800&height=auto&aspect=true',
        'price': 50900,
        'marca': 'Samsung',
        'description': `Diseño minimalista y acabado brillante
                        Pantalla expansiva Infinity-U de 6,4"
                        Sistema de múltiples cámaras. Cámara principal de 64MP
                        Batería de dos días de duración
                        128GB de almacenamiento interno expansible
                        Hasta 1TB con tarjeta microSD`
    },
    {
        'id': '10',
        'name': 'Xiaomi Redmi Note 11S',
        'img':'https://comprasmartphone.com/_next/image?url=https%3A%2F%2Fstorage.comprasmartphone.com%2Fsmartphones%2Fxiaomi-redmi-note-11s-5g.png&w=256&q=75',
        'price': 50900,
        'marca': 'Xiaomi',
        'description': `Diseño minimalista y acabado brillante
                        Pantalla expansiva Infinity-U de 6,4"
                        Sistema de múltiples cámaras. Cámara principal de 64MP
                        Batería de dos días de duración
                        128GB de almacenamiento interno expansible
                        Hasta 1TB con tarjeta microSD`
    }
]

const categories = [
    {   id:'Samsung'    },
    {   id:'Xiaomi'     }
]

export const getCategories = () => { // export nombrado
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(categories)
        }, 0);
    })
}

export const getProd = (productMarc) => { // export nombrado
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productMarc ? products.filter(e => e.marca === productMarc) : products)
        }, 0);
    })
}

export const getProdById = (id) => { // export nombrado
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products.find(e => e.id === id))
        }, 0);
    })
}