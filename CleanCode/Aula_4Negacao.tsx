//1 ponto
const isUserOlderThan18Years = true;
const isUserLivesOnBrazil = true;

if (!isUserOlderThan18Years && !isUserLivesOnBrazil){

}

//tentar tranquever o nosso código para uma maneira que a variavel ela possa ser lida do contrario é melhor 
const isUserYoungerThan18Years = true;
const doesUserLivesOnBrazil = true;

if (!isUserYoungerThan18Years
    && !doesUserLivesOnBrazil){

}

//sempre que possivel, escreve condicionais sem negação 

//2 ponto 
//Early return vc Else.

function isUserOlderThan18Years(){
    //recebo um user aqui dentro
    if(!user){
        retur {error:true}

    }else{
        return UserActivation.age > 18
    }
}

//Early return 
function isUserOlderThan18Years(){
    //recebo um user aqui dentro
    if(!user){
        retur {error:true}

    }
        return UserActivation.age > 18
    
}