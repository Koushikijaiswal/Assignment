//2-D array
let twoDarray = [
    ["koushiki" ,90, "akuv"],
    ["akash", 80,"sant"],
    ["aniket",89,"dav"],

]

for(let i=0 ; i<twoDarray.length ;i++){
    for (let j=0;j<twoDarray[i].length;j++){
        console.log(twoDarray[i][j]);
    }
    console.log("\n");
}

// write a program in js to print every element of matrix and each element multiply by 5

function matrix(twoDarr ,n){
    
    for(let i=0 ;i<twoDarr.length ;i++){
        for(let j=0; j<twoDarr[i].length;j++){
             console.log((twoDarr[i][j])*n);
        }
        console.log("\n");
    }
}

let twoDarr =[
    [3,4,5],
    [4,5,6],
    [6,7,8],
];
matrix(twoDarr ,5);