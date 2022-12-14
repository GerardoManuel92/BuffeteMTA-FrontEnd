const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const date_regex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/g;
    const lugar = document.getElementById('cmbLugar').selectedIndex;
    const asunto = document.getElementById('cmbAsunto').selectedIndex;
    const resolucion = document.getElementById('txtResolucion').value;
    const hora = document.getElementById('txtHora').value;
    const fecha = document.getElementById('txtFecha').value;
    const icono = document.getElementById('icon');

    if (asunto === 0 && lugar === 0 && resolucion === '' && hora === '' && fecha === '') {
        document.querySelector('.texto-modal').innerHTML = "El formulario se encuentra vacio";
        icono.src = "../IMG/warning.png";
    } else {
        if (lugar === null || lugar === 0) {
            document.querySelector('.texto-modal').innerHTML = "Opción no válida. Debes elegir a un asesor";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (fecha === null || fecha === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar una fecha";
            icono.src = "../IMG/error.png";
        } else if (hora === null || hora === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar la hora";
            icono.src = "../IMG/error.png";
        } else if (asunto === null || asunto === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar un asunto";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (resolucion === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar un tema";
            icono.src = "../IMG/error.png";
        } else {
            if (date_regex.test(fecha)) {
                document.querySelector('.texto-modal').innerHTML = "Registro guardado correctamente";
                icono.src = "../IMG/correcto.png";
                close.addEventListener('click', function (e) {
                    window.location = "../HTML/audiencia.html";
                });
            }
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