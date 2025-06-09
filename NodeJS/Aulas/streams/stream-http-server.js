import http from 'node:http'
import { Transform } from 'node:stream'

class InverseNuberStream extends Transform{
  _transform(chunk,encoding,callback){
    const transformed = Number(chunk.toString()) * -1
    console.log(transformed)
    callback(null, Buffer.from(String(transformed)))
  }
}

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async(req,res) => {
  const buffers = []

  //async/ await
  for await(const chunk of req){
    buffers.push(chunk)
  }

  const fullbody = Buffer.concat(buffers).toString()

  console.log(fullbody)

  return res.end(fullbody)

//   return req
//   .pipe(new InverseNuberStream())
//   .pipe(res)
})

server.listen(3334)