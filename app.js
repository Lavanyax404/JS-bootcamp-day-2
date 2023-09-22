//Assignment 1
function sign (number){
    if (number>0){
        console.log(number, "is a positive number")
    }
    else if (number==0){
        console.log(number, "is Zero")
    }
    else{
        console.log(number, "is a negative number")
    }
}

sign(0)
sign(-8)
sign(18)

//Assignment 2
let fact = 1

function fac(n){
    for(let i=1;i<=n;i++){
        fact=fact*i
    }
    console.log(fact)
}

fac(4)

//Assignment 3
function greater(num1,num2){
    num1>num2?console.log(num1,"is greater"):console.log(num2,"is greater")
}

greater(18,3)

//Assignmet 4
function palindrome(word){
    let flag=0
    let len = word.length;
    for (let i=0; i<len/2; i++) {
        if (word[i] !== word[len - 1 - i]) {
            flag+=1 
        }
    }
    if(flag==0){
        console.log(word,'is a palindrome')
    }
    else{
        console.log(word,'is not a palindrome')
    }
     
}
palindrome("madam")
palindrome("monkey")

//Assignment 5
function prime(num){
    let flag=0
    for(let i=2;i<=num/2;i++){
        if (num%i==0){
            flag+=1
        }
    }
    if(flag==0){
        console.log(num,'is a prime number')
    }
    else{
        console.log(num,'is not a prime number')
    }
}

prime(10)
prime(5)

//Assignemnt 6
function calc(num1,num2,oper){
    if(oper=='+'){
        let res=num1+num2
        console.log(res,'is the sum')
    }
    if(oper=='-'){
        let res=num1-num2
        console.log(res,'is the difference')
    }
    if(oper=='*'){
        let res=num1*num2
        console.log(res,'is the product')
    }
    if(oper=='/'){
        let res=num1/num2
        console.log(res,'is the quotient')
    }
}

calc(2,5,'+')
calc(10,5,'-')
calc(2,5,'*')
calc(18,2,'/')

//Assignment 7
function countVowels(str) {
    let count = 0
    let vowels = 'aeiouAEIOU'

    for (let char of str) {
        if (vowels.includes(char)) {
            count++
        }
    }

    return count;
}

console.log(countVowels("Nayanthara"));

//Assignment 8
function perfect(num) {
    let sum = 0
    
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i
        }
    }
    return sum === num
}

console.log(perfect(7)) 

//Assignment 9
function fibonacci(n) {
    if (n <= 0) return;
    let a = 0, b = 1;
    console.log(a); 
    while (b <= n) {
        console.log(b);
        let temp = a + b;
        a = b;
        b = temp;
    }
}
fibonacci(10); 

//Assignment 10
function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

table(5);
