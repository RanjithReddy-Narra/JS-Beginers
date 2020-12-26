const readline = require('readline');
const inp = readline.createInterface({
  input: process.stdin
});
const userInput = [];
inp.on("line", (data) => {
 userInput.push(data);
});
inp.on("close", () => {

//start-here

console.log(userInput)

/*Input same as output

var str = userInput[0];

console.log(str)
*/
//Individual outputs

/*
console.log(userInput)
console.log(userInput[1])
*/

// how to create a varaiable

/*
var A = userInput[0]
console.log(A)
*/

// Adding Numbers
/*
var A = userInput[0]
A = 12 + +A
console.log(A)

or

// ParseInt - is a function which used to convert String to Integer

var A = parseInt(userInput[0])
A = 10 + A
console.log(A)

*/

// Addition of multiple numbers

/*

var A = userInput[0]
var B = userInput[1]
var C = userInput[2]
D = +A + +B + +C
console.log(D)

*/


/*

var A = userInput[0].split(" ");

var B = +A[0] + +A[1]

console.log(B)

==> Input values are  :  10 12

*/


////  Looping ////

/*
for (i=0 ; i <=10 ; i= i++) ==>  i=0 ==>Intialisation, i<=10 ==> condition , i++ ==> increment
{
	console.log(Hi)
}

///Addition bu using loop

console.log(userInput);
var sum = 0;
for(i=0;i<userInput.length;i++)
{
    var dummy = userInput[i].split(" ");
    console.log(dummy);
    for(j=0;j<dummy.length;j++)
    {
        sum = sum + parseInt(dummy[j]);
    }
    console.log(sum);
}
console.log(sum);

///Integers separated by line space

var numbers = userInput[0];
var numbers1 = userInput[1];
var numbers2 = userInput[2];

var check = numbers + numbers1 + numbers2;
check = check[0] + ' ' + check[1] + ' ' + check[2] ;

console.log(check)

Input = 
2
4
5
output =
2 4 5

/////Number is positive or not

num=int(input(""))
if(num>0):
    print("Positive")
elif(num<0):
    print("Negative")
else:
    print("Zero")

/////Printing decimals///

    var Num = userInput[0];
    console.log(Num.split(' ').join('\n'));

    input : 2.3 4.5 5.6
    output:2.3
    		4.5
    		5.6
  /////

  //////Factorial of a number /////


  var number  = userInput[0];

// checking if number is negative
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}

// if number is 0
else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    var fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}


////Given number is Even or Odd 

var num = userInput[0];

if (num % 2 == 0 )
{
  console.log("Even");
}
else 
{
console.log("Odd");
}

//// No of days as output when input is given as month number //

var A = parseInt(userInput[0]);

if ( A == 1){
    console.log(31)}
        else if ( A == 2){
    consol.log(28)}
    else if ( A == 3){
    console.log(31)}
    else if (A == 4){
    console.log(30)}
        else if (A == 5){
    console.log(30)}
        else if (A == 6){
    console.log(30)}
        else if (A == 7){
    console.log(30)}
        else if (A == 8){
    console.log(30)}
        else if (A == 9){
    console.log(30)}
        else if (A == 10){
    console.log(30)}
        else if (A == 11){
    console.log(30)}
        else if (A == 12){
    console.log(30)}
    else
    {
    console.log("Check the input number")
    }

///////Print Number's from N to 1 in reverse order when integer N is given ///////

var N = userInput[0];

for ( i=N ; i>=1 ; i--){
    console.log(i)
}

///////Print the integer A, N times in a separate line//////



var N = userInput[0];
var M = N.split(" ")

var A = parseInt(M[0])
var B = parseInt(M[1])

console.log(A)
console.log(B)

 for ( i=1 ; i<=B ; i++){
     console.log(A)
 }

/////Existing of number N in range of L and R/////


var N = userInput[0]
console.log(N)
var A = userInput[1]
console.log(A)
var L = A[0]
var R = A[2]
console.log(L)
console.log(R)

if (N>L && N<R){
    console.log("yes")
}
else{
    console.log("no")
}


////Check Weather inputs can form a scalene triangel or not ////



var N = userInput[0]
   
var Sides = N.split(' ')
   
   
var A = Sides[0]
var B = Sides[1]
var C = Sides[2]

if ( A!== B && A!==C && B!==C){
    console.log("yes")
}
else{
    console.log("no")
}



//// Sum of intgers is even or odd ///

var N = userInput[0];
   
var Sides = N.split(' ');
   
   
var A = Sides[0];
var B = Sides[1];

var C = +A + +B ;

if (C % 2 == 0){
    console.log("even")
}
else{
    console.log("odd")
}


////// Firs three multiples of N ///

var N = userInput[0];
var B = []
for( i=1 ; i<=3 ; i++){
    B += i * +N + ' '
}
console.log(B.trim())



//////write a program to print the table of 9 till N in the format as follows//////


var N = userInput[0];
var B = []
for( i=1 ; i<=N ; i++){
    B += i * 9 + ' '
}
console.log(B.trim())

/////// A^B///////


var N = userInput[0].split(" ");
var A = N[0];
var B = N[1];
var C = Math.pow(A,B);
console.log(C);


/////Print 'yes' if their product is a perfect square else print 'no'./////

var N = userInput[0].split(" ");
var A = N[0];
var B = N[1];
var C = +B * +A

if (Math.sqrt(C) % 1 === 0){
    console.log("yes")
}
else
{
    console.log("no")
}


/////A,B,C print 'yes' if they can form the sides of a right angled triangle,otherwise 'no'./////

var N = userInput[0].split(" ");
var A = N[0];
var B = N[1];
var C = N[2];

var D = Math.pow(A,2) + Math.pow(B,2)

var E = Math.pow(C,2)

if (D==E){
    console.log("yes")
}
else
{
    console.log("no")
}


//////

});