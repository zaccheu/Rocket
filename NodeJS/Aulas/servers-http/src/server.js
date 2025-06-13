// const a =5;
// const b =5;

// console.log(a +b)

//CommonJS =>require
// const http = require('http')
//ESModules = >import/export
import http from 'node:http'

//UUID => Universal Unique ID (ID unico universal)

//2 parametros: req:request / res:response

//req: criar um usuário (name,email,senha) puxa todas as informações
//res: devolver uma resposa para quem está chamando o nosso servidor
const database = new Database()

const server = http.createServer(async (req,res)=>{
    const {method, url} = req

    await json(req, res)

   const route = routes.find(route =>{
    return route.method == method 
    &&
    route.path == url 
   })
    if(route){
        return route.handler(req,res)
    }
    return res.writeHead(404).end()
})
//nosso servidor http ousa a porta 3333
server.listen(3333)