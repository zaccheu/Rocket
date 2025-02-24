//Simples
//SetTimeout,setInterval

setTimeout(() => {},1000)

// Quero que o código execute depois de 20 dias: 
// Timeout = escrito em milesegundos  (1000 aquivale a 1s)
// 1000 x 60 = 1 min
// 60000 x 60 = 1 hora
// 3600000  x 24 = 1 dia
// 86400000  x 30 = 2592000000 (30 dias)

//executar depois de 30 dias:
setTimeout(() => {},2592000000)

//esse 2592000000 não faz nexo nenhum ,isso seriao  numero mágico
//podemos reescrever usnado as operações

setTimeout(() => {}, 1000 * 60 * 60 * 24 * 30 )


//mais simples: 

const thirtyDays = 1000 * 60 * 60 * 24 * 30

setTimeout(() => {}, thirtyDays )


//Avençado

//o numero está em um formato expecifico (preço em centavos, e o desconto em percentual )
function calculateDiscount(priceInCents, discountAmountInPercentage){
    //retorna desconto 
}