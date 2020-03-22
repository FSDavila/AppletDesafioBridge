function ehPrimo(n) {
    var start = 2
    while (start <= Math.sqrt(n)) {
        if (n % start++ < 1) return false;
    }
    return n > 1;
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