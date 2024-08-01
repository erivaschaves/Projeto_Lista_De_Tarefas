//Variáveis ​​definidas com const não podem ser redeclaradas.

//Variáveis ​​definidas com const não podem ser reatribuídas.

//Variáveis ​​definidas com const tem escopo de bloco.

//Função seta =>

const cloneDeModeloDeTarefa = () =>{
    //criando modelo de tarefa.
    const modeloDeTarefa = window.document.querySelector ('.modelos .listaDeItens')
    //clonando modelo de tarefa com função clone node.
    const cloneDeModeloDeTarefa = modeloDeTarefa.cloneNode(true)
    //retornando modelo de tarefa.
    return cloneDeModeloDeTarefa
}
//inserindo conteudo
const inserirConteudo = (tarefa, valor)=>{
    const textoDaTarefa = tarefa.querySelector('.textoDaLista')
    textoDaTarefa.textContent = valor

}
//exibir tarefa
const colocarTarefaNatela = () => {
    const input = window.document.querySelector('todoInputDeBusca')
    //removendo espaços nas extremidades com a função trim()
    const valor = input.value.trim()
    //caso o valor não seja vazio
    if (valor!== ''){
        const tarefa = cloneDeModeloDeTarefa()
        inserirConteudo(tarefa, valor)
        window.document.querySelector('todaLista').appendChild(tarefa)
        input.value = '';
        adicionarTarefaFeita()
    }

}