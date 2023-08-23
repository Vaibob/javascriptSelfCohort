//in this session we will learn all about variables and how we can define them --> VARIABLES |var(very flexible,global) |let(like var but local) |const(static and local)
// there are ways to define a variable in Javascript so we will first start with the keyword 'var'
//In languages where we have to set a datatype before initializing a variable they are all strongly typed but JS is loosely typed so we can initialize a variable without a datatype
//firstName --> assigning a variable in such a format is known as cammel casing and is a preferred way to assign variable names
//FirstName --> this is a preferred way of assigning classes their names {NOTE:These are all conventions}
// var--> {Scope of 'var' is Global}
//We can define a variable and log it 
var age=22;
console.log(age)
//We can define multiple variables and perform any operations while logging it 
var num1 = 10;
var num2 = 20;

console.log(num1+num2)
console.log(num1-num2)
console.log(num1*num2)
console.log(num1/num2)

//lets see the scope of var

if (true){
    var scopeParameter=69
    console.log("I am logging the Scope parameter from within the 'if' block using 'var' and it is "+scopeParameter)
}
console.log("I am logging the Scope parameter from the exterior of the'if' block using 'var' and it is "+scopeParameter) 
//this shows that the scope of var is global as both of the logs would give same output

//let --> this way of assigning is just like 'var' just that the scope of this isn't global
if (true){
    let scopeParameterLET=69
    console.log("I am logging the Scope parameter from within the 'if' block using 'let' and it is "+scopeParameterLET)
}
//console.log("I am logging the Scope parameter from the exterior of the'if' block and it is "+scopeParameterLET) //undefined {uncomment to run this block from line 29-->33 to see the scope of 'let'}

//const --> The scope of const is local : THE VALUE OF CONST OF ONCE ASSIGNED CANNOT BE CHANGED {You can get a static variable like behaviour from 'const'}

const motivationQuotient="high"
console.log(motivationQuotient)