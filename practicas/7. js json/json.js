
const json = {
    candena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twiter: "@erick8311",
        email: "ericking8311@gmail.com"
    },
    nulo: null
}

console.log(json);

console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));
console.log(JSON.parse("19"));
// console.log(JSON.parse("Hola mundo"));
console.log(JSON.parse("null"));
// console.log(JSON.parse("undefined"));

console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false));
console.log(JSON.stringify(19));
// console.log(JSON.parse("Hola mundo"));
console.log(JSON.stringify(null));
// console.log(JSON.parse("undefined"));

console.log(JSON.stringify(json));
console.log(JSON.parse('{"candena": "Jon","numero": 35,"booleano": true,"arreglo": ["correr", "programar", "cocinar"],"objeto": {"twiter": "@erick8311","email": "ericking8311@gmail.com"},"nulo": null}'));

