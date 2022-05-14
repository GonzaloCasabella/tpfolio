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
function condition(nro,tipo) {
    let n = parseInt(nro.value)
    if (n % 2 == 0) {
        tipo.value = "es par"
    } else {
        tipo.value = "es impar"
    }
}

function mostrar(numeroA, numeroB,Rst) {
  console.log (numeroA,numeroB)
let a = parseInt(numeroA.value)
let b = parseInt(numeroB.value)
let valores = []
    for (let i = a; i <= b; i++) {
        if (i % 3== 0){
            valores.push(i)
        }
        
    }
    Rst.value =  valores
}
function verificar(nprimo,nfin) {
    let np = parseInt(nprimo.value)
    let primos = []
    for (let i = 2; i <= np; i++) {
        let esprimo = true
        for (let f = 2; f < i; f++) {
            if (i % f == 0) {
                esprimo = false
            }
           
            
        }
       
        if (esprimo) {
            primos.push(i)
        }
    }
    nfin.value = primos
}

function informacion(nombre,apellido,ed,ciudad,parrafo) {
    let texto = "Mi nombre es " + nombre.value + " "+ apellido.value +
    ",Tengo " + ed.value + " años " +".Naci en la ciudad de " + ciudad.value + "."
    parrafo.value = texto  
    
}
function separar(v1,s1) {
    let a = parseInt(v1.value)

 function separar(v2,s2) {
        let b = parseInt(v2.value)

    }
}