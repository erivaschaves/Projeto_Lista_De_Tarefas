//Variáveis ​​definidas com const não podem ser redeclaradas.

//Variáveis ​​definidas com const não podem ser reatribuídas.

//Variáveis ​​definidas com const tem escopo de bloco.

//Função seta =>

const cloneDeModeloDeTarefa = () =>{
    //criando modelo de tarefa.
    const modeloDeTarefa = window.document.querySelector ('.modelos .itensDaLista')
    //clonando modelo de tarefa com função clone node.
    const cloneDeModelo = modeloDeTarefa.cloneNode(true)
    //retornando modelo de tarefa.
    return cloneDeModelo
}
//inserindo conteudo
const inserirConteudo = (tarefa, value)=>{
    const textoDaTarefa = tarefa.querySelector('.textoDaLista')
    textoDaTarefa.textContent = value
}
//exibir tarefa
const colocarTarefaNatela = () => {
    const input = window.document.querySelector('.todoInputDeBusca')
    //removendo espaços nas extremidades com a função trim()
    const value = input.value.trim()
    //caso o valor não seja vazio
    if (value!== ''){
        const tarefa = cloneDeModeloDeTarefa()
        inserirConteudo(tarefa, value)
        // criando um novo item e adicionando ao final com appendChild
        window.document.querySelector('.todaLista').appendChild(tarefa)
        input.value = ''
        adicionarTarefaFeita()
    }
}
// Configurando tarefa concluída
const tarefaFeita = (item) => {
    const input = item.querySelector('.input')
    const text = item.querySelector('.textoDaLista')
    input.addEventListener('change', (event) => {
        // inserindo linha em tarefa concluída com operador ternário
        text.style.textDecoration = event.target.checked ? 'line-through' : 'none'})  
}
// Adicionando tarefa feita
const adicionarTarefaFeita = () => {
    window.document.querySelectorAll('.itensDaLista').forEach(item =>tarefaFeita(item))
}

window.document.querySelector('.todoInputDeBusca').addEventListener('keyup', (event) => {
    if (event.code === 'Enter') colocarTarefaNatela()
})

window.document.querySelector('.todoIconeDeBusca').addEventListener ('click', colocarTarefaNatela)


/*function teste () {
    window.document.querySelector('.demo').innerHTML = "Olá Mundo";
}

var elemento = window.document.querySelector('.todoIconeDeBusca');
elemento.addEventListener('click',teste);*/













