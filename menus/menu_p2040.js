const obstrucaoGaveta = require("./solucao_p2040")
const resolucaoProblema = require("./solucao_p2040")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
const listaManutP2040 = [resolucaoProblema,obstrucaoGaveta,'CÓDIGO DE ERRO 0100']
//MANUTENÇÃO P2040
const manutP2040 = function mP2040() {
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|      MANUTENÇÃO DA P2040      |')
        console.log('=================================')
        console.log('|[1] MANCHA NA VERTICAL         |')
        console.log('|-------------------------------|')
        console.log('|[2] OBSTRUÇÃO NA GAVETA        |')
        console.log('|-------------------------------|')
        console.log('|[3] ERRO 0100                  |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao>0 && opcao<3) {
            listaManutP2040[opcao-1]()
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

module.exports = manutP2040