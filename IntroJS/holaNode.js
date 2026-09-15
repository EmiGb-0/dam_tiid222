
console.log("Hola mundo")

let edad1 = 10
let edad2 = 18

console.log(`Edad promedio: ${(edad1 + edad2) / 2} `);

/*    
    Medir tiempo de un proceso
*/

console.time("miProceso");
for (let i = 0; i < 1000000000; i++) { }
console.timeEnd("miProceso");
