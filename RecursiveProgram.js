//prine prime bet 3 to 100 using function

// let isprime=(number)=>{
//     for(let i=2;i<=number;i++){
//         if(number%i===0) {
//             return false;
//            braek ;
//         }
//     }
//     return number;
// }
// for(let i=3; i<=100 ;i++){
//     if(isprime(i)){
//         console.log(isprime(i));
// }
//     } // why it does not show any thing ???????


// prime number print using recursion
 function isprime1(n){
        let flag =true;
        if(n===1){
            return false;
        }
        for(let i=2; i<=n-1;i++){
            if(n%i ===0){
                return false;
            }
           
        } 
        return flag;
     }
 function primelist(minnum, maxnum){
    if(isprime1(minnum)===true){
        console.log(minnum);
    }
    minnum ++;
    if(minnum<=maxnum){
        primelist(minnum,maxnum);
    }
  }
primelist(7,97);
    
// right angle triangle pattern print using recursion

function rightTriangle(i,maxlength){
    console.log("*".repeat(i))
    i++;
    if(i<=maxlength){
        rightTriangle(i,maxlength);
    }
}
rightTriangle(1,5);

// reverse triangle

function reverserightTriangle(minlength){
    console.log("*".repeat(minlength))
    minlength--;
    if(minlength>=1){
        reverserightTriangle(minlength );
    }
}
reverserightTriangle(5);  

// single digit sum 

function singledigitsum(number){
    if(number<10) return number;
    let lastdigit=number %10;
    let remaindigit=Math.floor(number/10);
    return singledigitsum(lastdigit+singledigitsum(remaindigit));
}
console.log(singledigitsum(682358));

//factorial of a number using recursion

function fact(num){
    
    if(num==0){
        return 1;
    }
     return num*fact(num-1);
}
console.log(fact(4));
console.log(fact(0));

//another way find factorial of number using recursion

function factorial(num){
    
    if(num>0)
     return num*fact(num-1);
    else
      return num;
}
console.log(factorial(5));
console.log(factorial(-9));

//sum of the natural number 

function sum(num){
    
    if(num>0)
     return num+sum(num-1);
    else
      return num;
}
console.log(sum(12))