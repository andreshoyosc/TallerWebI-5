rutaImagenes = '../recursos/imagenes/'

textoIntroduccion = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. A modi possimus accusantium voluptatem ea ducimus ut. Laudantium totam quod perspiciatis repellat quasi maiores molestias fugit laborum, corrupti saepe, assumenda doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit expedita laudantium vero, porro atque nam aliquid ad? Numquam repellendus omnis blanditiis quis odit aut eaque quia modi minima vero!'
]

servicios = [
    {
        titulo: 'Opción 1',
        icono: 'icono-analisis.svg',
        parrafos: [
            ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, voluptatibus. Corrupti perferendis aliquid ipsum, dolorum optio, deserunt cumque tempore impedit nostrum expedita repellat explicabo sed et blanditiis fugit hic excepturi.']
        ]
    },
    {
        titulo: 'Opción 2',
        icono: 'icono-soporte.svg',
        parrafos: [
            [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quia vel repudiandae doloribus, commodi obcaecati accusamus doloremque tempora dicta consequuntur quidem officia reprehenderit amet iste temporibus ullam, odio sapiente inventore?'
            ]
        ]
    },
    {
        titulo: 'Opción 3',
        icono: 'icono-seguridad.svg',
        parrafos: [
            [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto earum, enim dolorum provident harum recusandae temporibus maxime distinctio quos et corrupti consectetur error cupiditate ea iste! Quis officia mollitia enim?'
            ]
        ],
        boton: 'Learn More'
    },
    {
        titulo: 'Opción 4',
        icono: 'icono-social.svg',
        parrafos: [
            [
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odit expedita laudantium vero, porro atque nam aliquid ad? Numquam repellendus omnis blanditiis quis odit aut eaque quia modi minima vero!'
            ]
        ],
        boton: 'Details'
    }
]

function mostrarPagina3() {

    let divPagina = crearElemento('div')
    divPagina.classList.add('contenedorPagina3')

    let h1 = crearNodoConTexto('h1', 'What We Do')
    h1.classList.add('tituloPagina3')
    adicionarElementoAContenedor(h1, divPagina)

    let pIntroduccion = crearParrafoConFragmentos(textoIntroduccion)
    pIntroduccion.classList.add('introduccionPagina3')
    adicionarElementoAContenedor(pIntroduccion, divPagina)

    let divGrid = crearElemento('div')
    divGrid.classList.add('gridServicios')
    adicionarElementoAContenedor(divGrid, divPagina)

    servicios.forEach(servicio => {
        adicionarElementoAContenedor(crearDivServicio(servicio), divGrid)
    })

    adicionarElementoABody(divPagina)
}

function crearDivServicio(servicio) {

    let div = crearElemento('div')
    div.classList.add('servicio')

    let icono = crearImagen(rutaImagenes + servicio.icono, servicio.titulo)
    icono.classList.add('iconoServicio')
    adicionarElementoAContenedor(icono, div)

    let divTexto = crearElemento('div')
    divTexto.classList.add('textoServicio')
    adicionarElementoAContenedor(divTexto, div)

    let h2 = crearNodoConTexto('h2', servicio.titulo)
    h2.classList.add('tituloServicio')
    adicionarElementoAContenedor(h2, divTexto)

    servicio.parrafos.forEach(fragmentos => {
        adicionarElementoAContenedor(crearParrafoConFragmentos(fragmentos), divTexto)
    })

    if (servicio.boton) {
        let boton = crearEnlace('#', servicio.boton)
        boton.classList.add('botonServicio')
        adicionarElementoAContenedor(boton, divTexto)
    }

    return div
}
