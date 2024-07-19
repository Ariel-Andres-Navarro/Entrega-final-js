const shopContent = document.getElementById("shopContent");  /*linkear html */

const verCarrito = document.getElementById("verCarrito");  /*para linkear el carrito al html*/ 

const modalContainer = document.getElementById("modal-container");  /*linkear modal */


const cantidadCarrito = document.getElementById("cantidadCarrito");


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



