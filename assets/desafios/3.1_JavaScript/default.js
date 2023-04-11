subtitulo = document.querySelector("h2")
subtitulo.innerHTML = "A ver si logramos viajar por el mundo ahora"

let direccionInput = prompt('Ingresa tu dirección')
let departamentoInput = prompt('Ingresa el número de tu departamento')
let comunaInput = prompt('Ingresa tu comuna')

direccion = document.querySelector(".direccion")
departamento = document.querySelector(".departamento")
comuna = document.querySelector(".comuna")

direccion.innerHTML = direccionInput;
departamento.innerHTML = departamentoInput;
comuna.innerHTML = comunaInput;


let radiusInput = prompt('¿qué tan redondo quieres la imagen?');
imagen = document.querySelector('img');
imagen.style.borderRadius = radiusInput;