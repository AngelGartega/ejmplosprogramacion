//a)
console.log("1234");

let str = "1234";
for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    
}

//b)
let str2 = "1234";

console.log(str2);
for (let i = 0; i < str2.length; i++) {
    console.log(str2[i]);
    
}

//c)
let v = "x";
for (let i = 0; i < 4; i++) {
    console.log(v);
}
console.log (v.repeat(4));

let fila = parseInt(prompt("filas: "));
let columna = parseInt(prompt ("columna: "));

console.log(v.repeat(fila));
for (let i = 0; i < columna; i++) {
    console.log(v);
    console.log('');    
}
for (let i = 0; i < 4; i++) {
    console.log("    xxxx     \n".repeat(4));
    
}
//d)
for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        console.log(i, " * ",j, " = ", i*j);
        
    }    
}