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
function condition(numer,type) {
    Console.WriteLine (numer.value)
long= numer.value = Convert.ToInt64(Console.ReadLine());
long= sobrante = num.value % 2;
if (sobrante == 0)
{
    Console.WriteLine("El número es par");
}
 else {
     Console.WriteLine("El número es impar");
    }
    
}

