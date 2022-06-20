function success() {
    Swal.fire(
        'Formulario enviado',
        'Has llenado correctamente todos los datos',
        'success'
    )
}

/* El usuario debe llenar todos los datos obligatorios porque tienen el requiered, por lo que con validar un dato * bastaría*/
function validar() {
    var nombres = document.getElementById("nombres").value;
    var correo = document.getElementById("correo").value;
    if (nombres == "" || correo == "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Completa todos los campos para registrarte',
            footer: '<a href="http://www.utez.edu.mx/" target="_blank" >Ayuda</a>'
          })
    } else {
        success();
    }
  }