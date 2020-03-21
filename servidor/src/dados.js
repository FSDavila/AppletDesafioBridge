function ehPrimo(n) {
    var start = 2
    while (start <= Math.sqrt(n)) {
        if (n % start++ < 1) return false;
    }
    return n > 1;
}

function detectaDivisores2(number) {
    var start = 2
    var divisores = []
    while (start <= Math.sqrt(number)) {
        if (number % start++ < 1) {
            divisores.push(start)
        }
    }
    return divisores;
}

function detectaDivisores(n) {
    var divisores = []
    for (var i = n; i > 0; i--) {
        if (n % i === 0) {
            divisores.push(i)
        }
    }
    return divisores;

}

function obtemDados(n) {
    var divisores = detectaDivisores(n)
    var ePrimo = ehPrimo(n)
    return [divisores, ePrimo]
}

export default obtemDados