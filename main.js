const elementoLista = document.querySelector('ul');
const elementoInput = document.querySelector('input');
const elementoBotao = document.querySelector('button');

const tarefas = [
    
]

function mostrarTarefas() {

    elementoLista.innerHTML = ''

    for (tarefa of tarefas) {
        const elementoTarefa = document.createElement('li')
        const textoTarefa = document.createTextNode(tarefa)

        elementoTarefa.appendChild(textoTarefa)
        elementoLista.appendChild(elementoTarefa)
    }
}

mostrarTarefas()

function addTarefas() {

    const textoTarefa = elementoInput.value
    tarefas.push(textoTarefa)
    elementoInput.value =''

    mostrarTarefas()
}

elementoBotao.setAttribute('onclick', 'addTarefas()')