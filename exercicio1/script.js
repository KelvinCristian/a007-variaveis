/*A)*/ let nome /*E)*/= ""
/*B)*/let idade /*E)*/
/*C)*/console.log(typeof nome)
      console.log(typeof idade)

/*D)no nome aparece string pois e um texto  e na idade aparece undefined pois esta vazio */

 /*E)*/ nome = prompt("qual e seu nome?")
 /*E)*/ idade = prompt("qual a sua idade")
 
 console.log( nome,idade)
 /*F)*/ console.log( typeof nome)
 /*F)*/ console.log( typeof idade)
/*F) antes era nome = string e idade = undefined 
agora os dois estao como strings*/
/*G)*/ console.log("olá", nome, "voce tem", idade, "anos.")
