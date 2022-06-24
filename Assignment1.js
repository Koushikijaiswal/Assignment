//1.print table
function table(N){

    for(let p=1; p<=10;p++){
    //console.log(N + "x" +p + "=" + (N*p));
    console.log(`${N} x ${p} = ${N*p}`);
}
}
table(4);


//2.square of a number

function square(N){
    for(let i=0 ; i<=N;i++){
        console.log(`square of  ${i} = ${i*i}`);
    }
}
square(10);

//3. equal no of sweet divides

function sweet(N){
    let y="yes", n="No";
    while(N>0){
    if(N%2 ==0){
        console.log(N +" "+"sweet then equal number of division possible");
        return  y;
    }
    console.log(N +" "+"sweet then equal number of division not possible");
    return n;
}
console.log("There is no any sweets");
return n;
}
console.log(sweet(8));
console.log(sweet(7));
console.log(sweet(10));
console.log(sweet(1));
console.log(sweet(0));


//4.thre line given triangle is possible or not

function checkIfTriangle(a, b, c)
{
if ( b + c <= a || a + c <= b || a + b <= c )
return false;
else
return true;
}
console.log((checkIfTriangle(7,6,5)?"triagle is possible" :"Triagle is not possible"));

//5.calculate x to the power y

console.log(Math.pow(9,2));

//6. calculate the binomial coefficient of n and k
//let N,K;
// function binomial(N ,K){
//     let n1=N;
//     let k1=K;
//     let nk = N-K;
//     let B = num(n1)/(kth(k1)*numkth(nk));
//     return B;
// }

// function num(n1){
//     let mul1=1;
//     for(let i=n1;i<=1;i--){
//        mul1 =mul1*i;  
//     }
//      return mul1;  
    
// }

// function kth(k1){
//     let mul2=1;
//     for(let i=k1;i<=1;i--){
//        mul2 =mul2*i;  
//     }
//      return mul2;  
    
// }

// function numkth(nk){
//     let mul3=1;
//     for(let i=nk;i<=1;i--){
//        mul3 =mul3*i;  
//     }
//      return mul3;  
    
// }
// console.log(binomial(6,3));
// //console.log(binomial(6,3)+" "+"the binomial coefficent of "+" "+N+" "+"and "+" "+K);

function binomialCoefficient(num , k)
{
if (k > num)
return 0;
if (k == 0 || k == num)
return 1;
return binomialCoefficient(num - 1, k - 1)
+ binomialCoefficient (num - 1, k);
}
let  num = 6, k = 3;
console.log("Value of C("+num +", "+k+") is"+" "+binomialCoefficient(num, k));

//7.facorial of a number num
function factorial(n) {
    if (n == 0) return 1;
    return n * factorial(n - 1);
    }
    let num1 = 10;
    console.log("Factorial of " + num1 + " is " +
    factorial(num1));

//8.


function TrailingZeros(n)
{
if(n < 0)
return -1;
let count = 0;
for (let i = 5; Math.floor(n / i) >= 1; i *= 5)
count += Math.floor(n / i);
return count;
}
let n = 5;
console.log("Count of trailing  is " + TrailingZeros(n));