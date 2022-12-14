const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');    
    
    const nombre = document.getElementById('txtNombre').value;
    const paterno = document.getElementById('txtPaterno').value;
    const materno = document.getElementById('txtMaterno').value;
    const rfc = document.getElementById('txtRFC').value;
    const cedula = document.getElementById('txtCedula').value;
    const grado = document.getElementById('cmbGrado').selectedIndex;
    const icono = document.getElementById('icon');

    if(nombre === '' && paterno === '' && materno === '' && rfc === '' && cedula === ''){
        document.querySelector('.texto-modal').innerHTML="El formulario se encuentra vacio";
        icono.src="../IMG/warning.png";
    }else{
        if(nombre === '' ){
            document.querySelector('.texto-modal').innerHTML="Debes ingresar el o los nombre";
            icono.src="../IMG/warning.png";
        }else if(paterno === '' ){
            document.querySelector('.texto-modal').innerHTML="Debes ingresar el apellido paterno";
            icono.src="../IMG/warning.png";
        }else if(materno === '' ){
            document.querySelector('.texto-modal').innerHTML="Debes ingresar el apellido materno";
            icono.src="../IMG/warning.png";
        }else if(rfc === '' ){
            document.querySelector('.texto-modal').innerHTML="Debes ingresar un RFC";
            icono.src="../IMG/warning.png";
        }else if(cedula === '' ){
            document.querySelector('.texto-modal').innerHTML="Debes ingresar un número de cedula";
            icono.src="../IMG/warning.png";
        }else if( grado === null || grado === 0 ) {
            document.querySelector('.texto-modal').innerHTML="Opción no válida. Debes seleccionar un grado";
            icono.src="../IMG/error.png";
            return 0;					
        }
        else{
            document.querySelector('.texto-modal').innerHTML="Registro guardado correctamente";
            icono.src="../IMG/correcto.png"; 
            document.querySelector('.formulario').reset();         
        }
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');        
});