//object.assign()

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget);
// expected output: Object { a: 1, b: 4, c: 5 }

//object.create()

const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
  };
  console.log(person);
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // inherited properties can be overwritten
  
  me.printIntroduction();
  // expected output: "My name is Matthew. Am I human? true"
  

//Object.defineproperties()

  const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value:"kou",   // how it is working why it will not print "kou" ?????
    value:41, 
    writable: true
  },
  property2: {}
});
console.log(object1.property1);// expected output: 41
console.log(object1.property2); //undefine


 /*The static method Object.defineProperty() defines a new
 property directly on an object, or modifies an existing property on an object, and returns the object. */

  const ob = {};

Object.defineProperty(ob, 'property1', {
  value: 42,
  writable: false
});

ob.property1 = 77;
// throws an error in strict mode

console.log(ob.property1);
// expected output: 42

  
//another example
const obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value:'hello',  //why this 'hello' will not print ???????
   value : 'Hello',
   kou : 45, // it will print undefine beacuse we are not writting value: ??????
    writable: false
  }
  // etc. etc.
});
console.log(obj.property1);
console.log(obj.property2);

// Case 1: Evaluation result is the same as using ===

let window;
Object.is(25, 25);                // true
Object.is('foo', 'foo');          // true
Object.is('foo', 'bar');          // false
Object.is(null, null);            // true
Object.is(undefined, undefined);  // true
Object.is(window, window);        // true
Object.is([], []);                // false
const foo = { a: 1 };
const bar = { a: 1 };
Object.is(foo, foo);              // true
Object.is(foo, bar);              // false

// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(+0, -0);                // false
Object.is(-0, -0);                // true
Object.is(0n, -0n);               // true

// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true


//The Object.fromEntries() method transforms a list of key-value pairs into an object.
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj1= Object.fromEntries(entries);
  
  console.log(obj1);
  // expected output: Object { foo: "bar", baz: 42 }
  

  /*The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable
   properties except for those which use Symbol) found directly in a given object.*/
  const object= {
    a: 1,
    b: 2,
    c: 3
  };
  
  console.log(Object.getOwnPropertyNames(object));
  // expected output: Array ["a", "b", "c"]
  

  //Object.entries()

  const obje = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(obje)) {
  //  console.log(`${key}: ${value}`);
  }
  console.log(obje);
  // expected output:
  // "a: somestring"
  // "b: 42"


