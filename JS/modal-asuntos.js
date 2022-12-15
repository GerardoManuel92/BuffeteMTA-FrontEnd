const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const date_regex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/g;
    const cliente = document.getElementById('cmbCliente').selectedIndex;
    const demandado = document.getElementById('cmbDemandado').selectedIndex;
    const abogado = document.getElementById('cmbAbogado').selectedIndex;
    const estado = document.getElementById('cmbEstado').selectedIndex;
    const asunto = document.getElementById('cmbAsunto').selectedIndex;
    const fechaI = document.getElementById('txtFechaInicio').value;
    const fechaT = document.getElementById('txtFechaFinal').value;
    const icono = document.getElementById('icon');

    if (asunto === 0 && cliente === 0 && demandado === 0 && abogado === 0 && estado === 0 && fechaI === '' && fechaT === '') {
        document.querySelector('.texto-modal').innerHTML = "El formulario se encuentra vacio";
        icono.src = "../IMG/warning.png";
    } else {
        if (cliente === null || cliente === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar a un cliente";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (demandado === null || demandado === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar a un demandado";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (abogado === null || abogado === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar a un abogado";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (estado === null || estado === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar un estado";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (asunto === null || asunto === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar un asunto";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (fechaI === null || fechaI === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar una fecha de inicio";
            icono.src = "../IMG/error.png";
        } else if (fechaT === null || fechaT === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar una fecha de término";
            icono.src = "../IMG/error.png";
        } else if(Date.parse(fechaT) < Date.parse(fechaI)){
            document.querySelector('.texto-modal').innerHTML = "La fecha de término no debe ser menor a la fecha de inicio";
            icono.src = "../IMG/error.png";
        } 
        else {
            if (date_regex.test(fechaI) || date_regex.test(fechaT)) {
                document.querySelector('.texto-modal').innerHTML = "Registro guardado correctamente";
                icono.src = "../IMG/correcto.png";
                close.addEventListener('click', function (e) {
                    window.location = "../HTML/asuntos.html";
                });            }
            else {
                document.querySelector('.texto-modal').innerHTML = "Formato de fecha incorrecta";
                icono.src = "../IMG/error.png";
            }
        }
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});