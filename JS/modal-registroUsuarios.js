const open = document.getElementById('open');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');

    const nombre = document.getElementById('txtNombre').value;
    const paterno = document.getElementById('txtPaterno').value;
    const materno = document.getElementById('txtMaterno').value;
    const email = document.getElementById('txtEmail').value;
    const passw1 = document.getElementById('txtPassword1').value;
    const passw2 = document.getElementById('txtPassword2').value;
    const rol = document.getElementById('cmbRolUsuario').selectedIndex;
    const icono = document.getElementById('icon');

    if (nombre === '' && paterno === '' && materno === '' && email === '' && passw1 === '' && passw2 === '') {
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
        } else if (email === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar un Email";
            icono.src = "../IMG/error.png";
        } else if (passw1 === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes ingresar tu password";
            icono.src = "../IMG/error.png";
        } else if (passw2 === '') {
            document.querySelector('.texto-modal').innerHTML = "Debes confirmar tu password";
            icono.src = "../IMG/error.png";
        }
        else if (rol === null || rol === 0) {
            document.querySelector('.texto-modal').innerHTML = "Debes seleccionar un rol de usuario";
            icono.src = "../IMG/error.png";
            return 0;
        }
        else {
            if (passw2 !== passw1) {
                document.querySelector('.texto-modal').innerHTML = "Los password no coinciden";
                icono.src = "../IMG/error.png";
            } else {
                document.querySelector('.texto-modal').innerHTML = "Registro guardado correctamente";
                icono.src = "../IMG/correcto.png";

                close.addEventListener('click', function(e){
                    window.location="../HTML/registro.html";
                    document.querySelector('.formulario').reset();
                });                
            }
        }
    }
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});