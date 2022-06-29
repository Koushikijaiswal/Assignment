//Array
// let temparr=new arr("element",9);
// for(let i=0;i<temparr.length;i++){
//     console.log(temparr[i]);
// }
const array1=["koushiiki","jaiswal",1];
array1.push("hello");
array1.pop();
for(let i=0;i<array1.length;i++){
    console.log(array1[i]);
}
console.log(array1.at(-2));
//console.log(n);
// push function emplementation add one element 
function arraypush(array){
    let n=array.length;
    array[n]="zero";
    for(let j=0;j<array.length;j++){
        console.log(array[j]);
    }
}
let array =[1,3,5,7,6];
// for(let i=0;i<array.length;i++){
// console.log(array[i]);}
(arraypush(array));


// implemtation of pop function using function delete one element at the last possition 

function arraypop(temparray){
    let n=temparray.length;
    n--;
     temparray[n]=null;
    for(let i=0;i<temparray.length;i++){
        console.log(temparray[i]);
    }
}
arraypop(array);
array.unshift("kous");
console.log(array); //to print whole array

// implement at() function 

function atarray(array ,index){
    if(index>=0)
    return array[index];
    if(index<0)
    return array[array.length - Math.abs(index)] ;
}

console.log(atarray(array , -1));

let A=[];
console.log(A);
