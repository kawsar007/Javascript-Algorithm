// Give a sequence of integer to an array, determine whether it is possible to obtain a strictly increasing sequence by removing not more than one element from the array.

// Example: 1) For sequence = [1,3,2,1] the output should be almostincreasingSequence(sequence) = false;

// Example: 2) For sequence = [1,2,3], the output should be almostincreasingSequence(sequence) = true;

function sequence(arr){
   for(let i = 1; i < arr.length; i++){
       if(arr[i] < arr[i-1]){
           return false;
       }
   }
   return true;
}

console.log(sequence([1,2,3,]));