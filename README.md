# Ecommerce - DiTech
Agustín Rodriguez 🤓
# Como es Empezar? 👇
## 1 - Clonar repositorio
Para empezar deberas clonar el repositorio, para el cual necesitaras el link del mismo
```sh
git clone  (mi repo)
```

## 2 - Instalacion de Dependecias
Luego deberas acceder al repositorio que acabas de descargar, desde una terminal como git y en la carpeta donde se encuentra “package.json” ingresar el siguiente comando
```sh
npm install (comando para instalar las dependencias necesarias para poder ejecutar el sig comando)
npm start (comando para lanzar la app)
```

## Tecnologias utilizadas
👉 HTML
👉 CSS
👉 JavaScript
👉 React Js

## Librerias
👉  React-Icons
👉  React-router-dom
👉  Firebase

## Estructura de Documentos en Firebase

- Cada producto tiene las siguientes características: 

|    Campo      |   Tipo        |   Valor                       |
| ------------- | ------------- | ----------------------------- |
|  description  |   String      |   Descripción del Producto    |
|   marca       |   String      |   Marca del Producto          |
|   price       |   Number      |   Precio del Producto         |
|   stock       |   Number      |   Stock del Producto          |
|   img         |   String      |   Img del Producto            |
|   name        |   String      |   Nombre del Producto         |
|   Top         |   Number      |   Top de ventas del Producto  |
|   features    |   Array       |   Caracteristicas del Producto|
|   opinions    |   Number      |   Opiniones del Producto      |

## Proceso de compra

El inicio de la web app es la ruta '/' donde encontrarás una serie de cards/tarjetas con todos los productos, también podrás ver que en la barra de navegacion se encuentran los nombres de las distintas marcas de telefonos que vendemos. Podemos acceder a los teléfonos que son por ejemplo, solamente 'Samsung' clickeando en el boton correspodiente al nombre de la marca.

Cada card tiene un boton 'ver más', si hacemos click en el boton, vamos a acceder al detalle de cada producto en el cual se podran ver las características, nombre, precio y descripción entre otras cosas.

Cabe recalcar que en un principio no podremos ver el widget del carrito ya que por medio de una función hicimos que si no hay productos comprados no se muestre el widget pero si lo hay que este si se muestre.

Una vez hayamos leído las características del producto y nos interese comprarlo, procedemos a elegir la cantidad y agregamos dicho producto al carrito con el boton 'agregar al carrito'. Ahora si podremos ver el widget del carrito y acceder a él para ver los productos que hemos agregamos agregado, como el precio total de la compra y un formulario para llenar con los datos del cliente. Podemos observar que no contamos con un boton para generar el pedido en el carrito, esto es porque primero debemos completar el formulario y una vez que carguemos los datos va a aparecer un boton que diga 'Generar Pedido' para generar la orden de compra.

## Gif del Proyecto