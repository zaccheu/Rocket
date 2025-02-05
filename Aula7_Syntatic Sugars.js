const numberInString = "12373"

//vai converter para numero
const number = +numberInString 

//outro formato (converter somente para inteiro)
const number2 = parseInt(numberInString)

//proprio contrutor da classe
const number3 = Number(numberInString)

//converte para boolean
//se o number for ture ele converte, se não, vai ser false
const isNumberNotNull = !!number

//outra alternativa
const isNumberNotNull2 = Boolean(number) 
const numberAsString = String(number)