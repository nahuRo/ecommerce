const products = [
    {
        'id': 1,
        'name': 'Galaxy A22',
        'marca': 'Samsung',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/173072-1200-auto?width=1200&height=auto&aspect=true',
        'price': 44900,
        'description': `Mejora la velocidad y el rendimiento con procesador Octa-core y 4GB de memoria RAM.
                        Cuatro cámaras = Un resultado increíble. Hasta 48 MP de nitidez y OIS.
                        Batería potente y duradera de 5.000 mAh. Mantenete Conectado.`

    },
    {
        'id': 2,
        'name': 'Galaxy M12',
        'marca': 'Samsung',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/169269-1200-auto?width=1200&height=auto&aspect=true',
        'price': 40900,
        'description': `Disfrutá de tu contenido en la pantalla Infinity-V de 6.5".
                        Cámara cuádruple de hasta 48 MP. Capturá momentos como un profesional.
                        Batería potente y durable por más horas.`

    },
    {
        'id': 3,
        'name': 'Galaxy A32',
        'marca': 'Samsung',
        'img':'https://samsungar.vtexassets.com/arquivos/ids/168737-800-auto?width=800&height=auto&aspect=true',
        'price': 50900,
        'description': `Diseño minimalista y acabado brillante
                        Pantalla expansiva Infinity-U de 6,4"
                        Sistema de múltiples cámaras. Cámara principal de 64MP
                        Batería de dos días de duración
                        128GB de almacenamiento interno expansible
                        Hasta 1TB con tarjeta microSD`
    }
]


export const getProd = () => { // export nombrado
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    })
}