// const a =5;
// const b =5;

// console.log(a +b)

//CommonJS =>require
// const http = require('http')
//ESModules = >import/export
import http from 'node:http'
import {randomUUID} from 'node:crypto'
import { json } from './middlewares/json.js'
import { Database } from './database.js'

//UUID => Universal Unique ID (ID unico universal)

//2 parametros: req:request / res:response

//req: criar um usuário (name,email,senha) puxa todas as informações
//res: devolver uma resposa para quem está chamando o nosso servidor
const database = new Database()

const server = http.createServer(async (req,res)=>{
    const {method, url} = req

    await json(req, res)

    if (method == 'GET' && url == '/users'){
        const users = database.select('users')

        return res.end(JSON.stringify(users))
    }

    if(method == 'POST' && url == '/users'){
        const {name, email} = req.body
        //escreve no banco de dados
        // users.push({
        //     id:1,
        //     name,
        //     email
        // })
        const user = {
            id:randomUUID(),
            name,
            email
        } 
        database.insert('users', user)
        return res.writeHead(201).end()
    }
    return res.writeHead(404).end()
})
//nosso servidor http ousa a porta 3333
server.listen(3333)