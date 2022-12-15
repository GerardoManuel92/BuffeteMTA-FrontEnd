const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const direccion = document.getElementById('txtDireccion').value;
    const tipo = document.getElementById('cmbTipo').selectedIndex;
    const icono = document.getElementById('icon');

    if (direccion === '' && tipo === 0) {
        document.querySelector('.texto-modal').innerHTML = "El formulario se encuentra vacío";
        icono.src = "../IMG/warning.png";
    } else {
        if (direccion === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar una dirección";
            icono.src = "../IMG/error.png";
        } else if (tipo === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes elegir un tipo de demandado";
            icono.src = "../IMG/error.png";
        } else {
            document.querySelector('.texto-modal').innerHTML = "Registro modificado correctamente";
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