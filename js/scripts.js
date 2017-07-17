// scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
	maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
	allNames = femaleNames.concat(maleNames);
	newName = "Dima";
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} 
console.log(allNames);
