const NOTAS = prompt("ingrese la nota (escriba ESC para salir)")
let sumatoria = 0
let promedio = 0

for(let nota = 1; nota <= NOTAS; nota++){
    const NOTAS = prompt("ingrese la clasificacion: "+ nota)
    sumatoria = sumatoria + parseFloat(NOTAS)
}

promedio  = sumatoria / NOTAS
alert("el promedio es: "+ promedio.toFixed(2))

while(NOTAS.toUpperCase() != "ESC"){
} 


