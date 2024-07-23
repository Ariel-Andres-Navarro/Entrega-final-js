const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });
  swalWithBootstrapButtons.fire({
    title: "Hola Bienvenido a la Tienda de Vinos",
    text: "Debes ser mayor de 18 años para comprar bebidas alcoholicas",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, soy mayor de 18 años",
    cancelButtonText: "No, soy menor de 18 años",
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        title: "",
        text: "Bienvenido disfruta de tu estadia en la Tienda de Vinos",
        icon: "success"
      });
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      swalWithBootstrapButtons.fire({
        title: "",
        text: " Lo sentimos no puedes comprar bebidas alcoholicas",
        icon: "error"
      });
    }
  });