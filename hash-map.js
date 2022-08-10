const myMap = new Map();

myMap.set("Nathan", "555-0182");
myMap.set("Jane", "315-0322");

console.log ("TESTING HASH-MAP");

for (let [key, value] of myMap) {
  console.log (`${key} = ${value}`);
}


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log (map1.get('a'));

map1.set('a', 97);

console.log(map1.get('a'));

console.log(map1.size);

map1.delete('b');

console.log (map1.size);

for (let [key, value] of map1) {
  console.log (`${key} = ${value}`);
}


const wrongMap = new Map();

wrongMap['bla'] = 'blaa';
wrongMap['bla2'] = 'blaaa2';

console.log (wrongMap);

console.log(wrongMap.has('bla'));
wrongMap.delete('bla');
console.log (wrongMap);

// correct use of hash map

const contacts = new Map();

contacts.set('Jessie', {phone: "213-555-1234", address: "123 N 1st Ave"});
console.log (contacts.has('Jessie'));
console.log (contacts.get('Hilary'));

contacts.set('Hilary', {phone: "617-555-4321", address: "321 S 2nd St"});
console.log (contacts.get('Jessie'));
console.log (contacts.delete('Raymond'));
console.log (contacts.delete('Jessie'));
console.log (contacts.size);


// Using Map Object

console.log ('USING MAP OBJECT');

const myMap2 = new Map();

const keyString = 'a string';
const keyObj = {};
const keyFunc = function() {};

myMap2.set(keyString, "value associated with 'a string'");
myMap2.set(keyObj, 'value associated with keyObj');
myMap2.set(keyFunc, 'value associated with keyFunc');


console.log ('My map 2 size: ', myMap.size);

console.log(myMap2.get(keyString));
console.log(myMap2.get(keyObj));
console.log(myMap2.get(keyFunc));

console.log(myMap2.get('a string'));
console.log(myMap.get({}));
console.log(myMap.get(function() {} ));
