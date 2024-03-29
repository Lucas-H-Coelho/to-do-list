const elementoLista = document.querySelector("ol");
const elementoInput = document.querySelector("input");
const elementoBotao = document.querySelector("button");

const tarefas = [];

function mostrarTarefas() {
  elementoLista.innerHTML = "";

  for (tarefa of tarefas) {
    const elementoTarefa = document.createElement("li");
    const textoTarefa = document.createTextNode(tarefa);

    const elementoLink = document.createElement("a");
    const pos = tarefas.indexOf(tarefa);

    const linkText = document.createTextNode("x");
    elementoLink.appendChild(linkText);

    elementoLink.setAttribute("href", "#");
    elementoLink.setAttribute("onclick", `deletaTarefa(${pos})`);

    elementoTarefa.appendChild(textoTarefa);
    elementoLista.appendChild(elementoTarefa);
    elementoTarefa.appendChild(elementoLink);
  }
}

mostrarTarefas();

function addTarefas() {
  const textoTarefa = elementoInput.value;
  tarefas.push(textoTarefa);
  elementoInput.value = "";

  mostrarTarefas();
}

elementoBotao.setAttribute("onclick", "addTarefas()");

function deletaTarefa(pos) {
  tarefas.splice(pos, 1);
  mostrarTarefas();
}
