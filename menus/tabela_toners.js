const ecosys = require("./kyocera")
const ricoh = require("./ricoh")
const mx722 = require("./lexmark")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

const tabTonerKyocera = function tTk() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('-----------------------------------------------------------------')
        console.log('|                        K Y O C E R A                          |')
        console.log('-----------------------------------------------------------------')
        console.log('|     TONER     |     EQUIPAMENTO     |       CAPACIDADE        |')
        console.log('-----------------------------------------------------------------')
        console.log(`|${ecosys[0].toner.modelo.padEnd(15,' ')}|${ecosys[0].modelo.padEnd(21,' ')}|${ecosys[0].toner.capacidade.padEnd(25,' ')}|`)
        console.log('-----------------------------------------------------------------')
        console.log(`|${ecosys[1].toner.modelo.padEnd(15,' ')}|${ecosys[1].modelo.padEnd(21,' ')}|${ecosys[2].toner.capacidade.padEnd(25,' ')}|`)
        console.log('-----------------------------------------------------------------')
        console.log(`|${ecosys[2].toner.modelo.padEnd(15,' ')}|${ecosys[2].modelo.padEnd(21,' ')}|${ecosys[2].toner.capacidade.padEnd(25,' ')}|`)
        console.log('=================================================================')
        console.log('|[S] Sair                                             [V] Voltar|')
        console.log('=================================================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcao=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

const tabTonerOutros = function tTo() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('-----------------------------------------------------------')
        console.log('|     TONER     |     MARCA     |        CAPACIDADE       |')
        console.log('-----------------------------------------------------------')
        console.log(`|${ricoh[0].toner.modelo.padEnd(15,' ')}|${ricoh[0].marca.padEnd(15,' ')}|${ricoh[0].toner.capacidade.padEnd(25,' ')}|`)
        console.log('-----------------------------------------------------------')
        console.log(`|${mx722.toner.modelo.padEnd(15,' ')}|${mx722.marca.padEnd(15,' ')}|${mx722.toner.capacidade.padEnd(25,' ')}|`)
        console.log('===========================================================')
        console.log('|[S] Sair                                       [V] Voltar|')
        console.log('===========================================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcao=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

const tabelasToners = [tabTonerKyocera,tabTonerOutros]
module.exports = tabelasToners