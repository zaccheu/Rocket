// Streams -> 

//tudo que eu estou recendo como entrada, eu estou encaminhando para uma saida 
// process.stdin //stream de elitura
//   .pipe(process.stdout)  //stream de escrita

import {Readable, Writable, Transform} from 'node:stream'

class OneToHundreadStream extends Readable{
  index = 1

  _read(){
    const i = this.index++

  setTimeout(()=>{
    if (i >100){
      this.push(null)
    }else{
      const buf = Buffer.from(String(i))
      this.push(buf)
    } 
  },1000)
  }
}

class InverseNuberStream extends Transform{
  _transform(chunk,encoding,callback){
    const transformed = Number(chunk.toString()) * -1

    callback(null, Buffer.from(String(transformed)))//primeiro parametro de call back : ERRO
  }
}

class MultipjyByTenStream extends Writable{
  _write(chunk,encoding,callback){
    console.log(Number(chunk.toString()) * 10)
    callback();
  }
}


new OneToHundreadStream()
.pipe( new InverseNuberStream())
.pipe(new MultipjyByTenStream())
// .pipe(process.stdout)
