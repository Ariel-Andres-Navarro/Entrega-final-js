//creo modal
// verCarrito.addEventListener("click", () => {
    const pintarCarrito = () => {
        modalContainer.innerHTML = "";                  //para limpiar carrito
        modalContainer.style.display = "flex";    //para visualizar el carrito
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>`;
    
        modalContainer.append(modalHeader);
    
        const modalbutton = document.createElement("h1");
        modalbutton.innerText = "x";
        modalbutton.className = "modal-header-button";
    
        modalbutton.addEventListener("click", () => {
            modalContainer.style.display = "none";   //cierra carrito
        })
    
        modalHeader.append(modalbutton);
        
      //agrege if
        if (carrito.length > 0){

        carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
           <img src="${product.img}">
           <h3> ${product.nombre} </h3>
           <p> ${product.precio} $ </p>
           <span class="restar"> - </span>
           <p> Cantidad: ${product.cantidad} </p>
           <span class="sumar"> + </span>
           <p>Total: ${product.cantidad * product.precio} </p>
           <span class="delete-product"> X </span>
            `;
    
           modalContainer.append(carritoContent);
    
           let restar = carritoContent.querySelector(".restar");
           //boton restar producto
           restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
            product.cantidad-- ;
            }
            saveLocal();
            pintarCarrito();
           });
    
           let sumar = carritoContent.querySelector(".sumar");
           sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            pintarCarrito();
           });
    
           let eliminar = carritoContent.querySelector(".delete-product");
    
           eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
           });
           
        });
         //Evento para ver el carrito
         const verCarrito = document.getElementById("verCarrito");
         verCarrito.addEventListener("click", () => {
            pintarCarrito();
         });
        //Botón para vaciar el carrito
        const botonVaciar = document.createElement("button");
        botonVaciar.className = "mi-boton";
        botonVaciar.innerText = "Vaciar Carrito";
        botonVaciar.addEventListener("click", () => {
            carrito = []; //vaciar carrito poner contador en cero
            pintarCarrito();
            carritoCounter();
            eliminarProducto()
        });
        modalContainer.append(botonVaciar);

        const total =carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0); //calculo del total
           //cambie  div por button en createElement
        const totalBuying = document.createElement("div");
        totalBuying.className = "total-content";
        totalBuying.innerHTML = `
        <div class="total-price"> Total a pagar: ${total} $</div>
        <button class="btn-primary" id="checkout-btn">Finalizar Compra</button>
        <div id="button-checkout"></div>
        `;

        modalContainer.append(totalBuying);
        //agrego el else
        }else {
          const modalText = document.createElement("h2");
          modalText.className = "modal-body";
          modalText.innerText = "Tu carrito esta vacio";
          modalContainer.append(modalText);
        }

        };
        //


        verCarrito.addEventListener("click", pintarCarrito);


    
        const eliminarProducto = (id) => {
            const foundId = carrito.find((element) => element.id === id);
    
            carrito = carrito.filter((carritoId) => {
                return carritoId !== foundId;
            });
    
            carritoCounter();
            saveLocal();
            pintarCarrito();
    
        };
          
        //contador de productos del carrito
        const carritoCounter = () => {
            cantidadCarrito.style.display = "block";
    
            const carritoLength = carrito.length;
    
            localStorage.setItem("carritoLength", JSON.stringify(carritoLength));
                                    //carrito.length
            cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));
        };
    
        carritoCounter();



  
        
