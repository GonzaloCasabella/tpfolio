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
function multiplicar (p,n,Cingeso){
    Cingreso.value = parseInt(p.text) * parseInt(n.value)
}
