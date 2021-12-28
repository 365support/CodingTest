function isPrime(num) {
    let sqrt = parseInt(Math.sqrt(num));
    
    if ( num === 1 ){
      return false;
    }
    
    if (num === 2){
      return true;
    }
    
    if (num % 2 === 0){
      return false;
    }
    
    for (let i = 3; i <= sqrt; i += 2) {  
        if (num % i === 0) {
         return false;
        }
      }
      return true;
    }