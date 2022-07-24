// var status = false;
// var tempC = 100;
// var tempF = 100;

// //f->c ; c->f
// const faren = (getTempC) => {
//     let tempFtC = (getTempC - 32) * 5/9
//     return tempFtC
// }
// const CelTF = (getTempF) => {
//     let tempCtF = (getTempF * (9/5)) + 32
//     return tempCtF
// }

// console.log("Celsius to Faren "+CelTF(tempC))
// console.log("Faren to Celsius "+faren(tempF))

//oblect json
let user = {
    name :"Natty",
    Age : 20,
}

console.log(user.name)
user['name'] = "Pete"
console.log(user.name)

// OOP
function Student(name, id) {
    this.name = name
    this.id = id
}
let student1 = new Student('Jim', 23);
let student2 = new Student('Hi', 21);
console.log(student1)

//Array
let araraName = ['HI','Pete', 12]
console.log(araraName)
for(let x of araraName){
    console.log(x)
}