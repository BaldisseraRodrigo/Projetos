const ecosys = require("./kyocera")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

function calcUtil(a) {
    let precoPagina = 0.5
    let paginas = parseInt(prompt('Quantidade de páginas: '))
    let qtdRevelador = parseInt(prompt('Unidades Reveladora substituídas: '))
    let qtdCilindro = parseInt(prompt('Unidades de Cilindro substituídas: '))
    let qtdFusao = parseInt(prompt('Unidades de Fusão substituídas: '))

    let custoRevelador = a.valores.revelador * qtdRevelador
    let custoCilindro = a.valores.cilindro * qtdCilindro
    let custoFusao = a.valores.fusao * qtdFusao
    let lucroPagina = paginas * precoPagina

    let custoTotal = lucroPagina - custoRevelador - custoCilindro - custoFusao - a.valores.preco
    a.valores.vidaUtil = 100 - (paginas / a.valores.vidaUtil * 100)

    console.log(`O equipamento gerou um lucro de R$${custoTotal.toLocaleString('pt-BR')}.`)
    console.log(`A vida útil do equipamento é de ${a.valores.vidaUtil.toFixed(0)}%.`)
    console.log('')
}

const menuCalculadora = function mC() {
    console.log('')
    console.log('=================================')
    console.log('|   CALCULADORA DE VIDA ÚTIL    |')
    console.log('=================================')
    console.log('|[1] P2040dw                    |')
    console.log('|[2] M2040idn                   |')
    console.log('|[3] M3040idn                   |')
    console.log('=================================')
    console.log('|[V] Voltar                     |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
    while(opcao!='S') {
        opcao = prompt('Digite a opção: ')
        if (opcao>0 && opcao<4) {
            calcUtil(ecosys[opcao-1])
        } else if (opcao=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcao=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

module.exports = menuCalculadora



