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

// Using NaN as Map keys

console.log ('USING NaN AS MAP KEYS');

const myMap3 = new Map();

myMap3.set(NaN, 'not a number');

console.log(myMap3.get(NaN));

const otherNaN = Number('foo');
console.log (myMap3.get(otherNaN));


// Iterating Map with for.. of

const myMap4 = new Map();

myMap4.set(0, 'zero');
myMap4.set(1, 'one');

for (const [key, value] of myMap4) {
  console.log(`${key} = ${value}`);
}

for (const key of myMap4.keys()) {
  console.log('key:', key);
}

for (const value of myMap4.values()) {
  console.log('value:', value);
}

for (const [key, value] of myMap4.entries()) {
  console.log (`${key} = ${value}`);
}

myMap4.forEach((value, key) => {
  console.log (`${key} = ${value}`);
});


// Relation with Array Objects

const kvArray = [['key1', 'value1'], ['key', 'value2']];
const myMap5 = new Map(kvArray);

console.log (myMap5.get('key1'));
console.log (Array.from(myMap5));
console.log ([...myMap5]);
console.log(Array.from(myMap5.keys()));

//Cloning and merging Maps

console.log ('MERGING MAPS');

const original = new Map([[1, 'one'],]);
const clone = new Map (original);

console.log(clone.get(1));
console.log(original === clone);

const first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

const second = new Map([
  [1,'uno'],
  [2, 'dos'],
]);

const merged = new Map([...first, ...second]);

console.log (merged.get(1));
console.log (merged.get(2));
console.log (merged.get(3));

const newMerged = new Map([...first, ...second, [1, 'eins']]);

console.log(newMerged.get(1));
console.log(newMerged.get(2));
console.log(newMerged.get(3));
