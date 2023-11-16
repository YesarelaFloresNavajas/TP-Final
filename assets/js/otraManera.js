//botón para modo nocturno
//const btnSwitch = document.getElementById('swicth-dm');
//const body = document.getElementById('body-id');

//btnSwitch.addEventListener('click', () => {
    //cuando pongo toggle le pongo una clase si no la tiene 
    //o le saco una clase si ya la tiene
    //body.classList.toggle('.dark');
    //btnSwitch.classList.toggle('.active');
//})

const modoNoche = () => {
    const cuerpo = document.querySelector('body');
    const btnSwitch = document.getElementById('swicth-dm');
    cuerpo.classList.toggle('dark');
    btnSwitch.classList.toggle('active')

}


var x = document.getElementById('switch-dm');
x.addEventListener('click', modoNoche);




//validación del formulario

const formulario =document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/, 
    apellido: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
    //acepta de todo meno los carácteres especiales
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.+-]+\.[a-zA-Z0-9_.+-]+$/,
    comentarios: /^[0-9a-zA-Z\s]+$/
}

const campos = {
    nombre: false,
    apellido: false,
    correo: false,
    comentarios: false   
}

// switch para selecconal el input donde esté haciendo foco el usuario
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, "nombre");
            break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, "apellido");
            break;
        case "correo":
            validarCampo(expresiones.correo, e.target, "correo");
            break;
        case "comentarios":
            validarCampo(expresiones.comentarios, e.target, "comentarios")
    }
}


//validar inputs
const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById('grupo_${campo}').classList.remove('formulario_grupo-incorrecto');
        document.getElementById('grupo_${campo}').classList.add('formulario_grupo-correcto');
        document.getElementById('#grupo_${campo} i').classList.remove('fa-times-circle');
        document.getElementById('#grupo_${campo} i').classList.add('fa-check-circle');
        document.getElementById('#grupo_${campo}.formulario_input-error').classList.remove('formulario_input-error-activo');

        campos[campo] = true;
    } else {
        document.getElementById('grupo_${campo}').classList.add('formulario_grupo-incorrecto');
        document.getElementById('grupo_${campo}').classList.remove('formulario_grupo-correcto');
        document.getElementById('#grupo_${campo} i').classList.add('fa-times-circle');
        document.getElementById('#grupo_${campo} i').classList.remove('fa-check-circle');
        document.getElementById('#grupo_${campo}.formulario_input-error').classList.add('formulario_input-error-activo');

        campos[campo] = false;
    }
}

//capturamos cada vez que el usuario presiona una tecla
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});


//validamos todo el formulario
formulario.addEventListener('submit', e => {
    e.preventDefault();


    if(campos.nombre && campos.apellido && campos.correo && campos.comentarios) {
        document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');

        setTimeout(() => {
            document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
            document.getElementById('formulario_grupo-terminos').style.display = "none";
        }, 3000);

        document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario_grupo-correcto');
        });

        setTimeout(() => {
            location.reset();
        }, 5000);
    } else {
        document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
    }
});