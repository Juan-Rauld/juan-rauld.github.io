subtitulo = document.querySelector("h2")
subtitulo.innerHTML = "A ver si logramos viajar por el mundo ahora"

direccionInput = prompt('Ingresa tu dirección')
departamentoInput = prompt('Ingresa el número de tu departamento')
comunaInput = prompt('Ingresa tu comuna')

direccion = document.querySelector(".direccion")
departamento = document.querySelector(".departamento")
comuna = document.querySelector(".comuna")

direccion.innerHTML = direccionInput;
departamento.innerHTML = departamentoInput;
comuna.innerHTML = comunaInput;