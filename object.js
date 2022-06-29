const car ={
    color :'black',speed:'120kmph',brand:'audi',start:function(){
        console.log('car started');
    },stop: function(){
        console.log('car stopped');
    },
}
const newcar=car;
newcar.brand='bmw';
console.log(car.brand);

//https://github.com/Koushikijaiswal/Assignment/blob/main/arrayfuncion.js

//minimun and maximun number

let Array =[23,43,21,4,511];
function minNumber(Array){
    //for(let i=0;i<Array.length ;i++){
       let minvalue = Array[0];
       for(let i=0;i<Array.length;i++){
        if(Array[i]<minvalue)
        {
            minvalue=Array[i];
        }
    } 
       return minvalue;
 }
 
 function maxNumber(Array){
    //for(let i=0;i<Array.length ;i++){
       let maxvalue = Array[0];
       for(let i=0;i<Array.length;i++){
        if(maxvalue <Array[i])
        {
            maxvalue=Array[i];
        }
    }
        return maxvalue;
       
 }
 console.log("The maximum value is"+" "+maxNumber(Array)+" "+"the minimum value is"+" "+minNumber(Array));  