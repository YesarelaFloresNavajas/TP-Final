//modo nocturno

const modoNoche = () => {
    const cuerpo = document.querySelector('body');
    const btnSwitch = document.getElementById('swicth-dm');
    cuerpo.classList.toggle('dark');
    btnSwitch.classList.toggle('active')

}


var x = document.getElementById('switch-dm');
x.addEventListener('click', modoNoche);




let nombre = document.getElementById('nombre');
let errorNombre = document.getElementById('errorNombre');
let apellido = document.getElementById('lastname');
let errorApellido = document.getElementById('errorApellido');
let email = document.getElementById('email');
let errorEmail = document.getElementById('errorCorreo');
let comentarios = document.getElementById('comments');
let errorComentarios = document.getElementById('errorComentarios');
//let errorCampos = document.getElementById('errorCampos');

//función para quitar el estilo de error a los elementos del formulario
const quitarClError = () => {
  let elemento = document.querySelectorAll(".form-control");
  for (let i = 0; i < elemento.length; i++) {
      elemento[i].classList.remove('is-invalid');
  }
  let elementoinv = document.querySelectorAll(".invalid-feedback");
  for (let i = 0; i < elementoinv.length; i++) {
      elementoinv[i].classList.remove('own');
  }
}


//Validar el formulario
const validarFormulario = () => {
  
//ejecuto la función para que quite los estilos de error en los campos que lo tienen
  quitarClError();


  const nombreVálido = nombre => {
    return /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(nombre);
}

if (!nombreVálido(nombre.value)) {
    nombre.classList.add('is-invalid');
    errorNombre.classList.add('own');
    //la clase pone un div enn display:block, ya que tiene la class="invalid-feedback "
    nombre.focus()
    return;
}

const apellidoVálido = apellido => {
    return /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(apellido);
}

if (!apellidoVálido(apellido.value)) {
    apellido.classList.add('is-invalid');
    errorApellido.classList.add('own');
    apellido.focus();
    return;
}

const emailVálido = email => {
  return /^[^\s@]+@[^\s@)]+\.[^\s@]+$/.test(email); //expresión regular
}
if (!emailVálido(email.value)) {
    email.classList.add('is-invalid');
    errorEmail.classList.add('own');
    email.focus();
    return;
}

const comentariosVálidos = comentarios => {
    return /^[0-9a-zA-Z\s]+$/.test(comentarios);
}

if (!comentariosVálidos(comentarios.value)) {
    comentarios.classList.add('is-invalid');
    errorComentarios.classList.add('own');
    comentarios.focus();
    return;
}

setTimeout(() => {
    location.reload();
}, 3000);

  //inserto el valor total en el html 
  // document.getElementById('totPag').innerHtml = totalAPagar;
  return document.getElementById('botnEnviar').innerHTML = '<p style= "font-size: 13px !important; color: aqua; text-align: center" >El formulario se envió correctamente.</p>';
}

var x = document.getElementById('btnEnviar');
x.addEventListener('click', validarFormulario);



