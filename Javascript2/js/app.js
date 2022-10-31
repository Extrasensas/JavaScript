/*const purple = document.querySelector('.purple');
const button = document.querySelector('button');
let link = document.querySelector('.purple a')
let text = document.querySelector('.purple p')

button.addEventListener('click', ()=>{
    const color = document.querySelector('input').value;
    purple.style.backgroundColor = color; //atributo pridejimas
})

 purple.addEventListener('click', ()=>{
     purple.style.textTransform = 'uppercase'
     text.textContent = 'Labai gera naujiena'; //Keiciam text node turini
     link.href = "https://www.kitm.lt"

 })

const texts = document.querySelector('h4 a');
for(const text of texts){
    text.textContent=" Melagiena melagiena melagienaaa"
}
*/

/*const task = document.querySelector('input');
const addtask = document.querySelector('button');

addtask.addEventListener('click', ()=>{
    const taskslist = document.querySelector('ul');
    let li = document.createElement('li');
    li.textContent = task.value;
    taskslist.appendChild(li);
})

document.querySelector('.delete').addEventListener('click', ()=>{
    let tasklist = document.querySelector('ul');
    let li = document.querySelector('li:last-child');
    tasklist.removeChild(li)
})
*/




//const links = document.querySelectorAll('a');
//for(const link of links){
 //  link.href = "https://www.kitm.lt"


/*
function user(name,email,role) {
    this.name = name;
    this.email = email;
    this.role = role;
}

user.prototype.syHI = function (){
    console.log(`Hi, I am ${this.name}. My email is ${this.email}. My user role ${this.role}`)};

user.prototype.showRole = function (){
    console.log(`My user role is ${this.role}.`)};

const userone = new user('Vardenis', 'Pavardenis', 'Admin'); //Object instance
userone.syHI();
userone.showRole()

const usertwo = new user('Petras', 'Petraitis', 'student');
usertwo.syHI();
usertwo.showRole()
*/


/*

class User{
    constructor(name,email,role) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
        syHI(){
            console.log(`Hi, I am ${this.name}. My email is ${this.email}. My user role ${this.role}`)}
        showRole(){
        console.log(`My user role is ${this.role}.`)};
    }

const userone = new User('Vardenis', 'Pavardenis@gmail.com', 'Admin');
userone.syHI();
userone.showRole()

const usertwo = new User('Tomas', 'Tusofcik@gmail.com', 'student');
usertwo.syHI();
usertwo.showRole()
*/


/*
console.log('-------------------------------------------------------------');

console.log(userone);
console.log(usertwo);

console.log('-------------------------------------------------------------');
*/

/*
class game {
    constructor(problem, text, priority, data) {
        this.problem = problem;
        this.text = text;
        this.priority = priority;
        this.data = data
    }

    getproblem() {
        console.log(`Problema: ${this.problem}`)
    };

    settext() {
        console.log(`Aprasymas: ${this.text}`)
    };

    setpriority() {
        console.log(`Prioritetas: ${this.priority}`)
    };

    getdata() {
        console.log(`Data: ${this.data}`)
    }
}
const todaydate = new Date();
const fulldate = `${todaydate.getFullYear()}-${todaydate.getMonth()}-${todaydate.getDate()}`

console.log('-------------------------------------------------------------');

const game1 = new game("weak", "need boost", "low", fulldate);
game1.getproblem()
game1.setpriority()
game1.settext()
game1.getdata()
console.log(" ")

console.log('-------------------------------------------------------------');

const game2 = new game("soft", "need updates", "high", fulldate);
game2.getproblem()
game2.settext()
game2.setpriority()
game2.getdata()
console.log(" ")

console.log('-------------------------------------------------------------');

const game3 = new game("Bugs", "Need to find", "Middle", fulldate);
game3.getproblem()
game3.settext()
game3.setpriority()
game3.getdata()
console.log(" ")

console.log('-------------------------------------------------------------');
*/








