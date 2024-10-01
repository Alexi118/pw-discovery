function isPrime(num:number):boolean{
    if(num<=1){
        return false
    }
    
    for(let i=2;i<=num-1;i++){
        if(num%i==0){
            return false
        }
    }

    return true
}

function countPrimes(arr:Array<number>):number{
    let count = 0
    for(let i=0;i<=arr.length-1;i++){
        if(isPrime(arr[i])===true){
            count++
        }
    }
    return count
}

console.log(countPrimes([2, 3, 4, 5, 6, 7]))
console.log(countPrimes([10, 15, 20, 25, 30]))