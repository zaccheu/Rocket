// const a =5;
// const b =5;

// console.log(a +b)

//CommonJS =>require
// const http = require('http')
//ESModules = >import/export
import http from 'node:http'
import { json } from 'middlewares/json.js'

//2 parametros: req:request / res:response

//req: criar um usuário (name,email,senha) puxa todas as informações
//res: devolver uma resposa para quem está chamando o nosso servidor
const server = http.createServer(async (req,res)=>{
    const {method, url} = req
    await json(req,res)
    if (method == 'GET' && url == '/users'){
        return res
        .setHeader('Content-type', 'applicaion/json')
        .end(JSON.stringify(users))
    }

    if(method == 'POST' && url == '/users'){
        const {name,email} = req.body
        users.push({
            id:1,
            name,
            email
        })
        return res.writeHead(201).end()
    }
    return res.writeHead(404).end()
})
//nosso servidor http ousa a porta 3333
server.listen(3333)