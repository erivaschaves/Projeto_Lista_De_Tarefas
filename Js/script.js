//Variáveis ​​definidas com constnão podem ser redeclaradas

//Variáveis ​​definidas com constnão podem ser reatribuídas

//Variáveis ​​definidas com constescopo de bloco

const cloneDeModeloDeTarefa = () =>{
    const modeloDeTarefa = window.document.querySelector ('.moledo .listaDeItens')
    const cloneDeModeloDeTarefa = modelo.cloneNode(true)
    return cloneDeModeloDeTarefa
}