//exo 01

const exo01 = (arr,k)=>{

for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      
      if (arr[i] + arr[j] == k && arr[i] !== arr[j]) {
        return true;
      }
    }
    
    
    
}

return false;


}
console.log("Ex01 : with tow loop O(n²)");
console.log(exo01([10, 15, 3, 7], 10));
console.log(exo01([1, 8, 10, 21], 8));
//*************************************************** */ 



//exo 03 and 05

const exo03and05 = (arr,k)=>{

for (let i = 0; i < arr.length; i++) {
    
      if (arr[i] + arr[i+1] == k && arr[i] !== arr[i+1]) {
        console.log(arr[i], arr[i+1]);
        return true;
        
        
      }
      
}
return false;

}
console.log("=========================");
console.log("Ex03 : with one loop O(n)");
console.log(exo03and05([10, 15, 3, 7], 25));
console.log(exo03and05([1, 8, 10, 21], 31));
console.log(exo03and05([14,12,  3, 6, 3, 2, 6, 7, 4, 16, 1],17));

//**************************************** */

 