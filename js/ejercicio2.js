rutaImagenes = '../recursos/imagenes/'

layouts = [
    { nombre: 'Real Estate', imagen: 'real-estate.png' },
    { nombre: 'Library', imagen: 'library.png' },
    { nombre: 'Transportation', imagen: 'transportation.png' },
    { nombre: 'Gas & Oil', imagen: 'gas-oil.png' },
    { nombre: 'Marketing Agency', imagen: 'marketing.png' },
    { nombre: 'Pizza', imagen: 'pizza.png' },
    { nombre: 'Flooring', imagen: 'flooring.png' },
    { nombre: 'Steel Processing', imagen: 'steel.png' },
    { nombre: 'Coming Soon', imagen: 'coming-soon.png', proximo: true }
]

function mostrarPagina2() {

    let divPagina = crearElemento('div')
    divPagina.classList.add('contenedorPagina2')

    let h1 = crearNodoConTexto('h1', 'Beautiful, Hand-crafted Layouts')
    h1.classList.add('tituloPagina2')
    adicionarElementoAContenedor(h1, divPagina)

    let divGrid = crearElemento('div')
    divGrid.classList.add('gridLayouts')
    adicionarElementoAContenedor(divGrid, divPagina)

    layouts.forEach(layout => {
        adicionarElementoAContenedor(crearDivLayout(layout), divGrid)
    })

    adicionarElementoABody(divPagina)
}

function crearDivLayout(layout) {

    let div = crearElemento('div')
    div.classList.add('tarjetaLayout')

    let imagen = crearImagen(rutaImagenes + layout.imagen, layout.nombre)
    imagen.classList.add('imagenLayout')
    adicionarElementoAContenedor(imagen, div)

    let pNombre = crearNodoConTexto('p', layout.nombre)
    pNombre.classList.add('nombreLayout')
    adicionarElementoAContenedor(pNombre, div)

    return div
}
