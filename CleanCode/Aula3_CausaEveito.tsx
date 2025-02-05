//React

function Button(){
    //estrategia para definir se esse btn está desabilitado ou não 
    const is ButtonDisabled = true 
    return (
        <button disabled={isNuttonDisabled}>
        <span></span>
        Enviar
        </button>
    )
}

//se em algum momento eu quiser utilizar essa infromação do button desabilitado, se eu qusier utilizar em algum outro lugar 
//se eu quiser mostrar carregando

//um if dentro do react 
function Button(){
    //estrategia para definir se esse btn está desabilitado ou não 
    const is ButtonDisabled = true 
    return (
        <button disabled={isNuttonDisabled}>
        <span></span>
        {isButtonDisabled ? 'Carregando' : 'Enviar'}
        </button>
    )
}