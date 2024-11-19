document.getElementById('calculateBtn').addEventListener('click', () => {
    const input = document.getElementById('numbers').value;
    const numbers = input.split(',').map(Number); 

    let forResult = countNumbersUsingFor(numbers);
    let forEachResult = countNumbersUsingForEach(numbers);
    let mapResult = countNumbersUsingMap(numbers);

    document.getElementById('forLoopResult').innerText = `For Loop: Primes: ${forResult.prime}, Composites: ${forResult.composite}, Neither: ${forResult.neither}`;
    document.getElementById('forEachResult').innerText = `ForEach: Primes: ${forEachResult.prime}, Composites: ${forEachResult.composite}, Neither: ${forEachResult.neither}`;
    document.getElementById('mapResult').innerText = `Map: Primes: ${mapResult.prime}, Composites: ${mapResult.composite}, Neither: ${mapResult.neither}`;
});

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function countNumbersUsingFor(numbers) {
    let prime = 0, composite = 0, neither = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) prime++;
        else if (numbers[i] > 1) composite++;
        else neither++;
    }
    return { prime, composite, neither };
}

function countNumbersUsingForEach(numbers) {
    let prime = 0, composite = 0, neither = 0;
    numbers.forEach(num => {
        if (isPrime(num)) prime++;
        else if (num > 1) composite++;
        else neither++;
    });
    return { prime, composite, neither };
}

function countNumbersUsingMap(numbers) {
    let result = { prime: 0, composite: 0, neither: 0 };
    numbers.map(num => {
        if (isPrime(num)) result.prime++;
        else if (num > 1) result.composite++;
        else result.neither++;
    });
    return result;
}
