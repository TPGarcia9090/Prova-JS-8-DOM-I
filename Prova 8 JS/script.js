function converter() {
    const metros = parseFloat(document.getElementById("valorMetro").value);
    const unidade = document.getElementById("unidadeDestino").value;
    const resultadoElemento = document.getElementById("resultado");

    if (isNaN(metros) || metros < 0) {
        resultadoElemento.textContent = "Por favor, insira um valor válido em metros.";
        return;
    }

    const fatores = {
        jarda: 1.094,
        pe: 3.281,
        polegada: 39.37,
        milha: 0.000621
    };

    const convertido = metros * fatores[unidade];
    const unidadeFormatada = unidade.charAt(0).toUpperCase() + unidade.slice(1);

    resultadoElemento.textContent = `${metros} metro(s) equivale a ${convertido.toFixed(3)} ${unidadeFormatada}(s).`;
}