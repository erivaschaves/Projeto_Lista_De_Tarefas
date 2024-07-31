//Variáveis ​​definidas com const não podem ser redeclaradas.

//Variáveis ​​definidas com const não podem ser reatribuídas.

//Variáveis ​​definidas com const tem escopo de bloco.

const cloneDeModeloDeTarefa = () =>{
    const modeloDeTarefa = window.document.querySelector ('.moledo .listaDeItens')
    const cloneDeModeloDeTarefa = modelo.cloneNode(true)
    return cloneDeModeloDeTarefa
}