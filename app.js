const livros = require("./database")

const readline = require("readline-sync")
const entradaInicial = readline.question("Deseja buscar um livro?S/N")

if(entradaInicial.toLocaleUpperCase() == "S"){
    console.log("Essas são as categorias disponíveis")
    console.log("Produtividade","/Historia brasileira", "/Descobertas da America", "/Tecnologia")

    const entradaCategoria = readline.question("Qual categoria voce escolhe:")
    const retorno = livros.filter(livros => livros.categoria === entradaCategoria)
    console.table(retorno)
} else{
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas)
    console.log("Essas são todos os livros disponíveis:")
    console.table(livrosOrdenados)
}
