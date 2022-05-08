function numeromayor(numero1,numero2,numero3,resultado){
    console.log(numero1.value,numero2.value,numero3.value)
    let mayor = 0
    let valores = [numero1.value,numero2.value,numero3.value]
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > mayor){
            mayor = valores[i]
        }
        
    }
    resultado.value = mayor
}
function sumar (sum1,sum2,sumR){
    sumR.value = parseInt(sum1.value) + parseInt(sum2.value)
}
function Repetir (p,n,Cingreso){
    let text = ""
    for (let i = 0; i < parseInt(n.value); i++) {
        text = text + p.value + " "
    }
    Cingreso.value = text
}
function contar(pl,c) {
    c.value = pl.value.length
}
function convertir(celsius,fahrenheit) {
    let c = parseFloat(celsius.value)
    let f = parseFloat(fahrenheit.value)
    if (f==0) {
        fahrenheit.value = (c*(9/5))+32
        celsius.value = 0
    } else {
        celsius.value = (f-32)*(5/9)
        fahrenheit.value = 0
    }
    
}
function mostrar(numeroA, numeroB,Rst) {
  console.log (numeroA,numeroB)
let x = 0
let valores = [numeroA.value,numeroB.value,Rst.value]
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] % 3){
            x = valores[i]
        }
        
    }
    Rst.value =  x
}
function ingresar(nprimo,nfin) {
    let np = parseFloat(nprimo.value)
    let nf = parseFloat(nfin.value)
} 