/*
*Js is cool
*/
"use strict"
let students = [
{
	'code': 1234,
	firstname:'Tadas',
	lastname:'Tadauskas',
	score: 10,
},
{
	'code': 1235,
	firstname:'Rokas',
	lastname:'Tadauskas',
	score: 8,
},
{
	'code': 1236,
	firstname:'Mantas',
	lastname:'Tadauskas',
	score: 9,
},
{
	'code': 1237,
	firstname:'Lukas',
	lastname:'Tadauskas',
	score: 7,
},
{
	'code': 1238,
	firstname:'Andrius',
	lastname:'Tadauskas',
	score: 6
},
]
for(let student of students){
	for(let key in student){
		console.log(key+": "+student[key])
	}
	console.log('-------------------')
}





console.log("*********************")

"use strict"

let items = ['printer', 'Computer', 'Phone', function(){alert("hello");}];

items[3] = "Tablet"; // perrašom 3 kategorijos reikšmę.

items.push("SMART TV"); //prideda kategoriją gale.

items.pop() // išima kategoriją.

items.unshift('other') // prideda pirma kategoriją.

//items.shift()  // pašalina pirmą. */

console.log("*********************")

let users = "Tomas,Ieva,Tadas,Monika";

users = users.split(",");

for(let user of users){
	console.log(user);
}

/*for(let i=0; i < users.length; i++){
	console.log(users[i])
}*/

//users = users.split(',');

//console.log(users)

//users = users.join(":");

console.log(users);


console.log("*********************")



"use strict"

var vardas = 'Edvardas'

console.log(vardas.length);
console.log(vardas[3]);
console.log(vardas.indexOf("das"));
console.log(vardas.slice(0,1))
console.log(vardas.slice(0,2))
console.log(vardas.slice(0,3))
console.log(vardas.slice(0,4))
console.log(vardas.slice(0,5))
console.log(vardas.slice(0,6))
console.log(vardas.slice(0,7))
console.log(vardas.toUpperCase());


console.log("*********************")


"use strict"

let count = 12;
let price = 100.20;
 price += 20;
 let name = "Edvardas";
 let lastname = 'Bakus';
 console.log(name + " " + lastname);

 let title = "Movie: \"Spiderman\"";
 console.log(title);

console.log("Suma: "+count*price);
console.log(price++);
console.log(price); 


const counting = 2*2;
alert("labas"); //Tai yra alertas


/*"use strict"
let title = "The Title";
let age = 89;
let online = false;
let items = ['Ieva', false, 12];

let user= {
	name: "Edvardas",
	email: "edvardas.bakus@stud.kitm.lt",
	role: 'admin'
};

let users = [
{
	name: "Jonas",
	email: "jonas.bakus@stud.kitm.lt",
	role: 'admin'
},
{
	name: "Andrius",
	email: "andrius.bakus@stud.kitm.lt",
	role: 'admin'
}
];

var name = "Edvardas";
name = "Tomas";
let lastName = "ssss";
console.log(name);
console.log(lastName);

console.log(typeof (title));
console.log(typeof (age));
console.log(typeof (online));
console.log(typeof (items));
console.log(items);
console.log(items[2]);
console.log(user.name);
console.log(users);
age = String(age);
console.log(typeof(age))
title = number(title);
console.log(title)
online = Boolean(1);
console.log(online); */
