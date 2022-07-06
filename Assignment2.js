// read first row i will be constant and j is incrasing +1
// read right side j is const i will be incrase by +1
// read below element i  const j will be decrease -1
// j is const i-1
// i is const j+1


function spiralOrder(matrix)
{
    let ans = [];
   
        if (matrix.length == 0)
            return ans;
   
        let R = matrix.length, C = matrix[0].length;
        let seen = new Array(R);
        for(let i=0;i<R;i++)
        {
            seen[i]=new Array(C);
            for(let j=0;j<C;j++)
            {
                seen[i][j]=false;
            }
        }
          
        let dr = [ 0, 1, 0, -1 ];
        let dc = [ 1, 0, -1, 0 ];
        let r = 0, c = 0, di = 0;
   
        // Iterate from 0 to R * C - 1
        for (let i = 0; i < R * C; i++) {
            ans.push(matrix[r]);
            seen[r] = true;
            let cr = r + dr[di];
            let cc = c + dc[di];
   
            if (0 <= cr && cr < R && 0 <= cc && cc < C
                && !seen[cr][cc]) {
                r = cr;
                c = cc;
            }
            else {
                di = (di + 1) % 4;
                r += dr[di];
                c += dc[di];
            }
        }
        return ans;
}
  
// Driver Code
let a=[[ 11, 82, 3, 14 ],[ 55, 86, 97, 8 ],
[ 19, 10, 11, 12 ],[ 13, 141, 1, 6 ]];
console.log(spiralOrder(a));
                        
  
  