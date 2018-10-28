
function isPrime(num) {

    let i;
    for (i = 2; i < 100; i++) {
        if (num % i === 0) {
            break;
        }
    }
    if (i === num) {
        return true;
    }
    else {
        return false;
    }
}
    for(let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
            console.log(i)
        }
    }










