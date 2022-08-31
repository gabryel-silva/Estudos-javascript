const idadeComprador = 15;
const estaAcompanhado = true;

if(idadeComprador >= 18){
    console.log("Comprador maior de idade")
}else{
    if(estaAcompanhado){
        console.log("Está acompanhado")
    }else{
        console.log("Comprador menor de idade")
    }
        
}//Se idade do comprador for maior ou igual a 18, mostre "Comprador é maior de idade", 
//ou se estiver acompanhado mostre "Está acompanhado", 
//caso contrario mostre "Comprador menor de idade".

if(idadeComprador >= 18 || estaAcompanhado == true){
    console.log("Comprador maior de idade ou está acompanhado")
}else{
    console.log("Comprador menor de idade")        
}//Outra forma de fazer: || => ou;