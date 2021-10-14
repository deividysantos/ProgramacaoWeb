var produtos = [];

const linhaTabela = 
`<tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
</tr>
`;

function PopularTabela() {
    var body = "";

    produtos.forEach( (item) => {
        body += 
        `
           <tr>
               <td>${item.Nome}</td>
               <td>${item.Marca}</td>
               <td>${item.Quantidade}</td>
               <td>R$${item.Preco}</t>
           </tr>
       `;
    });

    let linhasBrancas = 3 - produtos.length;

    if(linhasBrancas > 0){ 
        for (let index = 0; index < linhasBrancas; index++) {
            body += linhaTabela;
        }
    }

    let tabela = document.getElementById('corpoTabela');
    tabela.innerHTML = body;
}

function AcrescentarItemEmProdutos() {
    produtos.push(
        {
            Nome: document.getElementById('idNomeProduto').value,
            Marca: document.getElementById('idMarcaProduto').value, 
            Quantidade: document.getElementById('idQuantidadeProduto').value,
            Preco: document.getElementById('idPrecoProduto').value
        }
    );
}

function ApagarDadosDoForm() {
    let nome = document.getElementById('idNomeProduto');
    nome.value = "";

    let marca = document.getElementById('idMarcaProduto'); 
    marca.value = "";

    let quantidade = document.getElementById('idQuantidadeProduto');
    quantidade.value = "";

    let preco = document.getElementById('idPrecoProduto');
    preco.value = "";
}

function VerificarInput() {
    event.preventDefault();

    if (VerificarDados()) {

        AcrescentarItemEmProdutos();

        PopularTabela();
        
        ApagarDadosDoForm();

        return;
    };

    alert('Cadastro não enviado!');
}