opciones = [
    { texto: 'Ejemplo CSS # 2', enlace: 'html/ejercicio2.html' },
    { texto: 'Ejercicio CSS # 3', enlace: 'html/ejercicio3.html' }
]

function mostrarMenu() {

    let divMenu = crearElemento('div')
    divMenu.classList.add('tarjetaMenu')

    let h1 = crearNodoConTexto('h1', 'Taller #5')
    h1.classList.add('tituloMenu')
    adicionarElementoAContenedor(h1, divMenu)

    let divOpciones = crearElemento('div')
    divOpciones.classList.add('opcionesMenu')
    adicionarElementoAContenedor(divOpciones, divMenu)

    opciones.forEach(opcion => {
        let enlace = crearEnlace(opcion.enlace, opcion.texto)
        enlace.classList.add('opcionMenu')
        adicionarElementoAContenedor(enlace, divOpciones)
    })

    adicionarElementoABody(divMenu)
}