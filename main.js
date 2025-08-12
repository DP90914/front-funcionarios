'use strict'

import funcionarios from './funcionarios.json' with {type: 'json'}

function criarFuncionarios(imagem){
    const galeria = document.getElementById('funcionarios')
    const container = document.createElement('div')
    const img = document.createElement('img')
    const nome = document.createElement("h1")
    const cargo = document.createElement("p")

    cargo.classList.add("imagem")
    nome.classList.add("imagem")
    container.classList.add("imagem")

    cargo.textContent = imagem.cargo
    nome.textContent = imagem.nome
    img.src = "./img/" + imagem.imagem

    container.appendChild(img)
    container.appendChild(nome)
    container.appendChild(cargo)

    galeria.appendChild(container)
}

function mostrarFuncionarios(){

    const galeria = document.getElementById('galeria')

    funcionarios.forEach(criarFuncionarios)
}

mostrarFuncionarios()