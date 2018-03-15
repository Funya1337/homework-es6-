'use strict';

//javascript classes
class User {

constructor(name) {
	this.name = name;
}
sayHi() {
		console.log(this.name);			  
	}
}

var humans = ['boris', 'vasya', 'alex'];

let user = new User("vasya");
user.sayHi(); // Вася

// this was't work in opera 12 or ee
let x = 'wor';
let y = 'king';
let z = x + y;
console.log(z);

//loop and for don't work :(

for (let value of humans) {
	console.log(value);
}

var inc = x => x+1;

console.log( inc(1)  );
