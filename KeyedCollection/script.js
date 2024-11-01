//TODO: 1. Map
// A Map is a collection of key-value pairs, where any value (object or primitive) can be used as a key. It's similar to an object but with key differences like allowing keys of any type and preserving the insertion order.

//? Key Features of Map:
// Key types: Keys can be any value (objects, functions, primitives).
// Order: Items are iterated in insertion order.
// Size: Can retrieve the size of the map using map.size.
//? Methods:
// set(key, value): Adds or updates an entry with a key-value pair.
// get(key): Retrieves the value associated with the given key.
// has(key): Checks if a key exists in the map.
// delete(key): Removes the key-value pair by key.
// clear(): Removes all key-value pairs.
// Iteration: Can be iterated using for..of, or methods like map.keys(), map.values(), and map.entries().

const map = new Map();
map.set("name", "John");
map.set(42, "The Answer");
console.log(map.get("name")); // "John"
console.log(map.get(42)); // "The Answer"
console.log(map.size); // 2

//TODO: 2. Set
// A Set is a collection of unique values (no duplicates allowed). Unlike Map, Set does not associate keys with values; it only stores values, but these values are treated like keys for uniqueness.

//? Key Features of Set:
// Unique values: A value can only appear once in a set.
// Order: Values are iterated in insertion order.
// Size: Can retrieve the size of the set using set.size.
//? Methods:
// add(value): Adds a value to the set.
// has(value): Checks if a value exists in the set.
// delete(value): Removes a value from the set.
// clear(): Removes all values from the set.
// Iteration: Can be iterated using for..of, or methods like set.keys(), set.values(), and set.entries().

const set = new Set();
set.add(1);
set.add(2);
set.add(1);  // Duplicate, won't be added
console.log(set.has(1));  // true
console.log(set.size);    // 2



//          Features                   Map                                    Set
//    |--------------------|--------------------------------------|----------------------------------------|
//    |  Key/Value         |   Stores key-value pairs             |   Stores only values (treated as keys) |
//    |--------------------|--------------------------------------|----------------------------------------|
//    |  Duplicate Entries |   Keys must be unique                |   Values must be unique                |
//    |--------------------|--------------------------------------|----------------------------------------|
//    |  Value Types       |   Keys and values can be of any type |   Values can be of any type            |  
//    |--------------------|--------------------------------------|----------------------------------------|
//    |  Methods           |   set(), get(), has(), delete()      |   add(), has(), delete()               |
//    |--------------------|--------------------------------------|----------------------------------------|
