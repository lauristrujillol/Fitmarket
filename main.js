//TIENDA DE COMIDA SALUDABLE

/*Inicialmente creo los productos que van a incluir nombre, precio y stock.*/
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const yogurtGriego = new Producto("Yogurt Griego", 2500, 25);
const aceiteDeOliva = new Producto("Aceite de oliva Extravirgen", 25000, 10);
const lecheDeAlmendras = new Producto("Leche Silk", 17000, 18);
const panVegano = new Producto("Pan de Quinoa", 15000, 8);
const mantequillaDeMani = new Producto("Mantequilla de Mani", 32000, 12);
const Humus = new Producto("Humus", 12000, 13);
const SalchichasDePavo = new Producto("Salchichas de Pavo", 22000, 5);
const Batata = new Producto("Batata", 13000, 12);


const arrayProductos = [yogurtGriego, aceiteDeOliva, lecheDeAlmendras, panVegano, mantequillaDeMani, Humus, SalchichasDePavo, Batata];

console.log("Productos en Stock");
console.log(arrayProductos);

/** Utilizo el método ForEach para buscar solo los precios */

console.log("Método ForEach");

arrayProductos.forEach(producto => console.log(producto.precio));

/** Filtro los productos que tengan un valor igual o menor a 20.000 CO */

const arrayFiltroPrecio = arrayProductos.filter(producto=> producto.precio <= 20000);

console.log("Los productos que tienen un valor igual o menor a 20.000 son: ");
console.log(arrayFiltroPrecio);

/////////////////////

function menu() {
    alert("Bienvenido a la tienda saludable Fit Market");
    let opcion = parseInt(prompt("Ingrese una opción: \n1) Agregar un producto nuevo \n2) Borrar un producto \n3) Modificar un producto existente  \n4) Consultar un producto  \n5) Salir"));
    return opcion;
}



//Función para agregar un nuevo producto:
function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del producto: ");
    let precio = parseInt(prompt("Ingresa el valor unitario del producto: "));
    let stock = parseInt(prompt("Ingresa el stock del producto: "));
    const producto = new Producto(nombre, precio, stock);
    arrayProductos.push(producto);
    console.log(arrayProductos);
}

//Función eliminar producto
function eliminarProducto() {
    let nombre = prompt("Ingresa el nombre del producto: ");
    let producto = arrayProductos.find(producto => producto.nombre === nombre);
    let indice = arrayProductos.indexOf(producto);
    arrayProductos.splice(indice, 1);
    console.log(arrayProductos);

}

//Función modificar producto
function modificarProductos () {
    let nombre = prompt("Ingresa el nombre del producto: ");
    let producto = arrayProductos.find(producto => producto.nombre === nombre);
    let indice = arrayProductos.indexOf(producto);
    let precio = parseInt(prompt("Ingresa el valor unitario del producto: "));
    let stock = parseInt(prompt("Ingresa el stock del producto: "));
    const productoModificado = new Producto (nombre, precio, stock);
    arrayProductos.splice(indice, 1, productoModificado);
    console.log(arrayProductos);
}



//Función para consultar un producto
function consultarProducto() {
    let nombre = prompt("Ingresa el nombre del producto: ");
    let producto = arrayProductos.find(producto => producto.nombre === nombre);
    console.log(producto);
}


//Función para salir del programa
function salir() {
    alert("Gracias por visitar Fit Market, vuelve pronto.")
}

//Ejecución del programa:
let opcion = menu();
switch (opcion) {
    case 1:
        agregarProducto();
        break;
    case 2:
        eliminarProducto();
        break;
    case 3:
        modificarProductos();
        break;
    case 4:
        consultarProducto();
        break;
    case 5:
        salir();
        break;
    default:
        alert("Opción incorrecta");

}



//Suma de todos los productos
console.log("Suma de todos productos")
let totalPrecio = arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log(totalPrecio);

/////////////////////////////////

//Productos con el IVA del 19%
console.log("Productos con IVA - Método Map: ")
const arrayProductosConIva = arrayProductos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: (producto.precio *1.19).toFixed(2)
    }
})

console.log(arrayProductosConIva);



