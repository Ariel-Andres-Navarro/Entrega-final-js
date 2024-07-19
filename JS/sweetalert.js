const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Hola Bienvenido a la Tienda de Vinos",
    text: "Confirma si eres mayor de 18 años",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, soy mayor de 18 años",
    cancelButtonText: "No, soy menor de 18 años",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "",
        text: "Puedes comprar en la tienda Bienvenido",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "",
        text: "No puedes comprar en la tienda",
        icon: "error"
      });
    }
  });