function add(a,b) {
    return a+b;
}

function addition(...res) { //using rest operator
    let total=0;
    for (const e of res) {
        total+=e;
    }
    return total
}

function isPrime(num) {
    if (num===0) {
        alert("O is n ot Prime number");
    }
    num=+num;
    for (let i = 2; i < num/2; i++) {
      
        if (num%i===0) {
            return false;
        }
        
        return true;
        
    }
    
}


function power(num,n){
    return num**n
}

const arr = [12, 23, 45, 7, 68];

arr.forEach(e => console.log(e));