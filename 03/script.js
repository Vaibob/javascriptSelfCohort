//in this session we will learn all about Datatypes and Operators
/*DATATYPES --> Numbers, Strings, Booleans, NULL, Undefined, Objects*/
//OPERATORS --> +, -, *, / 

// DATATYPES
//Numbers
let num0=3;
let num1=3.14;
console.log(num0+num1)

//Strings
const firstName ="Vaibhav"  //you can use double quotes 
const lastName ='Shelar'    //you can also use single quotes to assign a string
console.log(firstName + lastName)   //you can use the '+' operator to concatenate both Strings as well 

//Booleans --> They exist as 1|0 {in binary where 1 being True and 0 being False}
let isLoggedIn=true
console.log(isLoggedIn)

//NULL
let lastLoginDate=null //it allocates some space in the memory to set a reference to this variable
console.log(lastLoginDate) //say we have a feature that returns us last login date so as of now we do not know the value for it but we know for sure that such a date will exist so we store it as null 

//undefined
let dayYouWillDie=undefined //it is just like null but doesn't use any space for reference as the exitence of this variable is 'undefined'
console.log(dayYouWillDie) // say we have a function that does not return any value then it will be stored as undefined

//Object --> They have a key-value pair.
//JavaScript objects and Python dictionaries share many similarities and can be thought of as analogous data structures.
const person={
    initialName:'Vaibhav',
    surName:'Shelar',
    age:'22',

}
console.log(person)
console.log(person.initialName)
console.log(person.surName)
console.log(person.age)

/*
Booleans are internally numbers say we add a number to a boolean which is true then it will consider that 'true' as the number 1 and add it.
true --> 1
false --> 0

Strings say we have a string-->*/
let s='1'
console.log(s+'1') //--> this is a string with numeric value + another string with numeric value then the output will be ...
console.log(typeof(s+'1'))//--> string
//output: a concatenated string (here '11')
console.log(s+11) //--> this is a string with numeric value + another number then the output will be ...
console.log(typeof(s+11))//-->string
//output: a concatenated string (here '111')
console.log(s*11)//--> this is a string with numeric value * another number then the output will be ...
console.log(typeof(s*11)) //-->number
//outout: a numeric value which is the multiplication of the number in the string form and the second number (here 11 as a numeric value )
/*
string + string = concatenated string.
string + number = concatenated number as string.
string * number = multiplied numeric values as number.
*/

//TYPE OF OPERATOR: it tells you the type of a variable {typeof}

console.log(typeof true)