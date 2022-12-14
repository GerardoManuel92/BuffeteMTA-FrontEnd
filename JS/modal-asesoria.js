const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const date_regex = /\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])*/g;
    const asesor = document.getElementById('cmbAsesor').selectedIndex;
    const asesorado = document.getElementById('cmbAsesorado').selectedIndex;
    const asunto = document.getElementById('cmbAsunto').selectedIndex;
    const tema = document.getElementById('txtTema').value;
    const hora = document.getElementById('txtHora').value;
    const fecha = document.getElementById('txtFecha').value;
    const icono = document.getElementById('icon');
  
    if (asesor === '' && asesorado === '' && asunto === '' && tema === '' && hora === '' && fecha === '') {
        document.querySelector('.texto-modal').innerHTML = "El formulario se encuentra vacio";
        icono.src = "../IMG/warning.png";
    } else {
        if (asesor === null || asesor === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes elegir a un asesor";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (asesorado === null || asesorado === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes elegir a un asesorado";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (asunto === null || asunto === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar un asunto";
            icono.src = "../IMG/error.png";
            return 0;
        } else if (tema === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar un tema";
            icono.src = "../IMG/error.png";
        } else if (fecha === null || fecha === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar una fecha";
            icono.src = "../IMG/error.png";
        } else if (hora === null || hora === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar la hora";
            icono.src = "../IMG/error.png";
        } else {
            if (date_regex.test(fecha)) {
                document.querySelector('.texto-modal').innerHTML = "Registro guardado correctamente";
                icono.src = "../IMG/correcto.png";
                close.addEventListener('click', function (e) {
                    window.location = "../HTML/asesoria.html";
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