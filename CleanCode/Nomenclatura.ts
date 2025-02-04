
//Nomenclatura de variáveis

const users = ['Diego', 'Gustavo', 'Carol']

const filtered = users.filter(u => {
    return u.startsWith('D')
})

//1. evite diminutivos 
// const filtered = users.filter(users => {
//     return users.startsWith('D')
// })

//2.nome da veriavel 
//Clean Code não tem nada aver com o tamanho da varial
//está masi facil pelo nome entender o que ela faz
// const usersStartWithLetterD = users.filter(users => {
//     return users.startsWith('D')
// })

//3.Evite nomes genericos (data, response, list, args, params)
//Nome genericos são nomes que as vezes eles falam sobre estruturas de dados, mas não falam sore o dado em si
function getUsers(){

    const data = getUsersFromDatabase()
    return data
}
function getUsersFromDatabase(){}

//evite utilizar data aqui dentro, chama de users 
// function getUsers(){

//     const users = getUsersFromDatabase()
//     return users
// }