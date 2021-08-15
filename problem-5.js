// Sum all the prime numbers up to and including the provided number;

// Example: 1) sumAllPrime(10) should return 17;
//          2) sumAllPrime(977) should return 73156;

function sumAllPrime(num){
    let totalPrime = 0;
    for (let i = 2; i < num; i++){
       for (let j = 2; j < num; j++){
           if(i === j){
               totalPrime += i
           }
           if(i % j === 0){
            break;
        }
       }
       
    }
    return totalPrime;
}
sumAllPrime(10);
//console.log(sumAllPrime(10));
