//Rota para criação do usuario (nome, email, password)
//Controller (nome, email, senha)
//Repositorio (nome, email, senha)

//data = nome, email, password
function crateUserRoute(body){
//validações

crateUserController(body)
}

function crateUserController(data){
    userRepository.create(data)
}
const userRepository ={
    create(data){
        //cria o usúario (nome, email,password)
    }
}

//uma função ela receber dados, exatamente da mesma forma com que esses dados precisam ser repassados para uma proxima função 

//vai começar a ser reparados 