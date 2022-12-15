const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');   
    
    const razon = document.getElementById('txtRazon').value;
    const icono = document.getElementById('icon');

    if (razon === '') {
        document.querySelector('.texto-modal').innerHTML = "Debes ingresar un campo social";
        icono.src = "../IMG/warning.png";
    } else {       
        document.querySelector('.texto-modal').innerHTML = "Registro modificado correctamente";
        icono.src = "../IMG/correcto.png";
        close.addEventListener('click', function (e) {
            window.location = "../HTML/demandado.html";
        });            
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});