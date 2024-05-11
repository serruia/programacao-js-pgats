const ferramentas = [
    {nome: "UFT", preco: 100, fabricante: "OpenText"},
    {nome: "TestComplete", preco: 200, fabricante: "Smartbear"},
    {nome: "TOSCA", preco: 300, fabricante: "Tricents"},
]

const comprar = ["UFT", "TOSCA"]

const calcularTotal = (ferramentas, comprar) => {
    if (ferramentas.length == 0 || comprar.length == 0){
        throw new Error("Ambas as listas precisam ter ao menos um item.");
    }
    const quantidadeDeFerramentas = ferramentas.length;
    const quantidadeParaComprar = comprar.length;
    let valor = 0;
    let ferramentasParaComprar = [];
    let encontrouFerramenta = false;
    for (let indice = 0; indice < quantidadeDeFerramentas; indice++){
        for (let indice2 = 0; indice2 < quantidadeParaComprar; indice2++){
            if (ferramentas[indice].nome == comprar[indice2]){
            ferramentasParaComprar.push(comprar[indice2]);
            valor += ferramentas[indice].preco;
            encontrouFerramenta = true;
            } 
        }
    }
    if (encontrouFerramenta == false){
        throw new Error ("Nenhuma ferramenta desejada encontrada.");
    }
    return `O valor a pagar pelas ferramentas (${ferramentasParaComprar.join(', ')}) é R$ ${valor.toFixed(2)}`;
}

const resultado = console.log(calcularTotal(ferramentas, comprar));


module.exports = {
    calcularTotal
}