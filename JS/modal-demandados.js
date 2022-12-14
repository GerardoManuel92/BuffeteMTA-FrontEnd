const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const nombre = document.getElementById('txtNombre').value;
    const paterno = document.getElementById('txtPaterno').value;
    const materno = document.getElementById('txtMaterno').value;
    const direccion = document.getElementById('txtDireccion').value;
    const tipo = document.getElementById('cmbTipo').selectedIndex;
    const razon = document.getElementById('txtRazon').value;   
    const icono = document.getElementById('icon');

    if (nombre === '' && paterno === '' && materno === '' && direccion === '' && tipo === 0 && razon === '') {
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
        } else if (direccion === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar la dirección";
            icono.src = "../IMG/error.png";
        } else if (tipo === null || tipo === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar el tipo de demandado";
            icono.src = "../IMG/error.png";
        } else if (razon === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar la razón social";
            icono.src = "../IMG/error.png";
        } else {
            document.querySelector('.texto-modal').innerHTML = "Registro guardado correctamente";
            icono.src = "../IMG/correcto.png";
            close.addEventListener('click', function (e) {
                window.location = "../HTML/demandado.html";
            });
        }
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});