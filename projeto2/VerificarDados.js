const redColor = '#d37d8e';

function NomeOk() {
    let inputNome = document.getElementById("idNomeProduto");
    let nome = inputNome.value;

    if(nome.trim().length < 2 || nome.trim().length > 100){
        inputNome.style.backgroundColor = redColor;
        return false;
    }

    inputNome.style.backgroundColor = "white";
    return true;
}

function MarcaOk() {
    let inputMarca = document.getElementById('idMarcaProduto');
    let marca = inputMarca.value;

    if(marca.trim().length < 2 || marca.trim().length > 20)
    {
        inputMarca.style.backgroundColor = redColor;
        return false;
    }

    inputMarca.style.backgroundColor = "white";
    return true;
}

function QuantidadeOk() {
    let inputQuantidade = document.getElementById('idQuantidadeProduto');
    let quantidade = inputQuantidade.value;

    if(isNaN(quantidade) || quantidade.trim().length == 0 || quantidade < 0 || quantidade > 100){
        inputQuantidade.style.backgroundColor = redColor;
        return false;
    }

    inputQuantidade.style.backgroundColor = "white";
    return true;
}

function PrecoOk() {
    let inputPreco = document.getElementById('idPrecoProduto');
    let preco = inputPreco.value;

    if(isNaN(preco) || preco.trim().length == 0 || preco < 0){
        inputPreco.style.backgroundColor = redColor;
        return false;
    }

    inputPreco.style.backgroundColor = "white";
    return true;
}

function VerificarDados() {
    let resultados = [NomeOk(), MarcaOk(), QuantidadeOk(), PrecoOk()];

    return (resultados[0] && resultados[1] && resultados[2] && resultados[3]);
}