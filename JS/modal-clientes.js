const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const nombre = document.getElementById('txtNombre').value;
    const paterno = document.getElementById('txtPaterno').value;
    const materno = document.getElementById('txtMaterno').value;
    const curp = document.getElementById('txtCurp').value;
    const facebook = document.getElementById('txtFacebook').value;
    const telefono = document.getElementById('txtTelefono').value;
    const RFC = document.getElementById('txtRFC').value;
    const email = document.getElementById('txtEmail').value;
    const icono = document.getElementById('icon');

    if (nombre === '' && paterno === '' && materno === '' && curp === '' && facebook === '' && telefono === '' && RFC === '' && email === '') {
        document.querySelector('.texto-modal').innerHTML = "El formulario se encuentra vacio";
        icono.src = "../IMG/warning.png";
    } else {
        if (nombre === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el o los nombres";
            icono.src = "../IMG/error.png";
        } else if (paterno === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el apellido paterno";
            icono.src = "../IMG/error.png";
        } else if (materno === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el apellido materno";
            icono.src = "../IMG/error.png";
        } else if (curp === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el CURP";
            icono.src = "../IMG/error.png";
        } else if (facebook === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el perfil de facebook";
            icono.src = "../IMG/error.png";
        } else if (telefono === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el número telefónico";
            icono.src = "../IMG/error.png";
        } else if (RFC === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar RFC del cliente";
            icono.src = "../IMG/error.png";
        } else if (email === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar el correo electrónico";
            icono.src = "../IMG/error.png";
        } else {
            document.querySelector('.texto-modal').innerHTML = "Registro guardado correctamente";
            icono.src = "../IMG/correcto.png";
            close.addEventListener('click', function (e) {
                window.location = "../HTML/clientes.html";
            });
        }
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});