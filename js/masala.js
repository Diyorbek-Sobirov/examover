



   var n = 1000;
   for(var i = 2; i <= n; i++) {
       var sum = 0;
       for(var a = 1; a < i; a++) {
           if (i % a ==0){
               sum+=a;
           }
       }
       if (sum==i){
           console.log(i)
       }
   };




   function InsertionSort(arr)
{
let len = arr.length, value, i, j;
for(i = 1; i < len; i++)
{
value = arr[i];
j = i - 1;
while (j >= 0 && arr[j] > value)
{
arr[j+1] = arr[j];
j--;
}
arr[j+1] = value;
}
return arr;
}
var myArray = [5,8,-3,2,7,0,6];
InsertionSort(myArray);
console.log (myArray[myArray.length-1])
console.log (myArray[myArray.length-2])
console.log (myArray[myArray.length-3])
// console.log(myArray);