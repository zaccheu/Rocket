// const a =5;
// const b =5;

// console.log(a +b)

//CommonJS =>require
// const http = require('http')
//ESModules = >import/export
import http from 'node:http'

//2 parametros: req:request / res:response

//req: criar um usuário (name,email,senha) puxa todas as informações
//res: devolver uma resposa para quem está chamando o nosso servidor
const server = http.createServer((req,res)=>{
    return res.end('teste')
})
//nosso servidor http ousa a porta 3333
server.listen(3333)