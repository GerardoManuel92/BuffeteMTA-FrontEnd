const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {    
    modal_container.classList.add('show');
    

    const usuario = document.getElementById('txtUsuario').value;
    const contraseña = document.getElementById('txtPassword').value;
    const rol = document.getElementById('cmbRolUsuario').selectedIndex;
    const icono = document.getElementById('icon');    

    if (usuario === '' && contraseña === '') {
        document.querySelector('.texto-modal').innerHTML = "El formulario se encuentra vacio";
        icono.src = "../IMG/warning.png";
    }
    else if (usuario === '') {
        document.querySelector('.texto-modal').innerHTML = "Debes ingresar un id o nombre de usuario";
        icono.src = "../IMG/error.png";
    } else if (contraseña === '') {
        document.querySelector('.texto-modal').innerHTML = "Debes ingresar tu password";
        icono.src = "../IMG/error.png";
    } else if (rol === null || rol === 0) {
        document.querySelector('.texto-modal').innerHTML = "Debes seleccionar tu rol de usuario";
        icono.src = "../IMG/error.png";
        return 0;
    }
    else {
        document.querySelector('.texto-modal').innerHTML = "Autentificación correcta";
        icono.src = "../IMG/correcto.png";

        close.addEventListener('click', function(e){
            window.location="../HTML/menu.html";
        });
               
    }

});

close.addEventListener('click', () => {    
    modal_container.classList.remove('show');      
});