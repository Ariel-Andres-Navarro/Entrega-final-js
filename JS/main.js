const shopContent = document.getElementById("shopContent");  /*linkear html */

const verCarrito = document.getElementById("verCarrito");  /*para linkear el carrito al html*/ 

const modalContainer = document.getElementById("modal-container");  /*linkear modal */
//
const showAlert = document.getElementById("showAlert");

const cantidadCarrito = document.getElementById("cantidadCarrito");

// const productos = [
//     {
//         id: 1,
//         nombre: "Yacochuya Malbec",
//         precio: 51000,
//         img: 
//         "https://www.espaciovino.com.ar/media/default/0001/54/thumb_53455_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 2,
//         nombre: "Sapo de otro Pozo blend ",
//         precio: 15200,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/59/thumb_58716_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 3,
//         nombre: "Alegoría Malbec",
//         precio: 13600,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/61/thumb_60441_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 4,
//         nombre: "Angelica Zapata Malbec",
//         precio: 25130,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52803_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 5,
//         nombre: "DV Catena Cabernet Malbec",
//         precio: 9380,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/53/thumb_52791_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 6,
//         nombre: "Familia Gascón Red blend",
//         precio: 3805,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/70/thumb_69197_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 7,
//         nombre: "Frida Malbec",
//         precio: 3760,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/67/thumb_66114_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 8,
//         nombre: "Gauchesco clásico Cabernet Sauvignon",
//         precio: 3515,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/70/thumb_69001_default_small.jpeg",
//         cantidad: 1,
//     },
//     {
//         id: 9,
//         nombre: "Rutini Cabernet Malbec",
//         precio: 10800,
//         img:
//         "https://www.espaciovino.com.ar/media/default/0001/62/thumb_61998_default_small.jpeg",
//         cantidad: 1,
//     }
// ];  

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//
const getProducts = async () => {
    const response  = await fetch("./db/data.JSON");
    const data = await response.json();

    //create-element 
data.forEach((product) => {  
    let content = document.createElement("div");
    content.className = "card";     //agrego clases para darle estilos
    content.innerHTML = `            
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p class="price">${product.precio} $</p>
    `;

    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";
    comprar.className ="comprar";

    content.append(comprar);
 
    //aplico funcionalidad
   comprar.addEventListener("click", () => {
   //agrego contador de cantidades
   const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);

   if (repeat) {
    carrito.map((prod) => {
       if(prod.id === product.id) {
        prod.cantidad++;
       }
    });
   } else {
    carrito.push({
        id: product.id,
        img: product.img,
        nombre: product.nombre,
        precio: product.precio,     /*selecciona productos al carrito*/ 
        cantidad: product.cantidad,
     });
    }
    console.log(carrito);
    // console.log(carrito.length);
    carritoCounter();//Contador de productos del carrito
    saveLocal();  //local storage
   });
});
};

getProducts();


//set item
const saveLocal = () => {

localStorage.setItem("carrito", JSON.stringify(carrito));

};
//get item

//JSON.parse(localStorage.getItem("carrito"));


