function crearElemento(tag) {
    let nodo = document.createElement(tag)
    nodo.classList.add('colorLetra')
    return nodo
}

function crearNodoConTexto(tag, texto) {
    let nodo = crearElemento(tag)
    nodo.textContent = texto
    return nodo
}

function adicionarElementoABody(elemento) {
    document.body.appendChild(elemento)
}

function adicionarElementoAContenedor(elemento, contenedor) {
    contenedor.appendChild(elemento)
}

function crearImagen(src, alt) {
    let nodo = crearElemento('img')
    nodo.src = src
    nodo.alt = alt
    return nodo
}

function crearEnlace(href, texto) {
    let nodo = crearNodoConTexto('a', texto)
    nodo.href = href
    return nodo
}

function crearFragmento(fragmento) {
    let nodo

    if (fragmento.tipo === 'enlace') {
        nodo = crearEnlace(fragmento.href, fragmento.texto)
        nodo.target = '_blank'
    } else if (fragmento.tipo === 'negrita') {
        nodo = crearNodoConTexto('strong', fragmento.texto)
    } else if (fragmento.tipo === 'cursiva') {
        nodo = crearNodoConTexto('em', fragmento.texto)
    } else if (fragmento.tipo === 'negritaCursiva') {
        nodo = crearElemento('strong')
        adicionarElementoAContenedor(crearNodoConTexto('em', fragmento.texto), nodo)
    }

    return nodo
}

function crearParrafoConFragmentos(fragmentos) {
    let p = crearElemento('p')

    fragmentos.forEach(fragmento => {
        if (typeof fragmento === 'string') {
            p.appendChild(document.createTextNode(fragmento))
        } else {
            adicionarElementoAContenedor(crearFragmento(fragmento), p)
        }
    })

    return p
}
