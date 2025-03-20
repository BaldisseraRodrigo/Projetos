const ecosys = require("./kyocera")
const ricoh = require("./ricoh")
const lexmark = require("./lexmark")
const prompt = require("prompt-sync")()
let opcao = null

const tabFirmKyocera = function tFk() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('-----------------------------------------------------------------')
        console.log('|                        K Y O C E R A                          |')
        console.log('-----------------------------------------------------------------')
        console.log('|     MODELO     |     VERSÃO     |         STATUS PAGE         |')
        console.log('-----------------------------------------------------------------')
        console.log(`|${ecosys[0].modelo.padEnd(16,' ')}|${ecosys[0].firmware[0].padEnd(16,' ')}|${ecosys[0].firmware[1].padEnd(29,' ')}|`)
        console.log('-----------------------------------------------------------------')
        console.log(`|${ecosys[1].modelo.padEnd(16,' ')}|${ecosys[1].firmware[0].padEnd(16,' ')}|${ecosys[2].firmware[1].padEnd(29,' ')}|`)
        console.log('-----------------------------------------------------------------')
        console.log(`|${ecosys[2].modelo.padEnd(16,' ')}|${ecosys[2].firmware[0].padEnd(16,' ')}|${ecosys[2].firmware[1].padEnd(29,' ')}|`)
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

const tabFirmOutras = function tFo() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('-----------------------------------------------------------------')
        console.log('|     MARCA     |     MODELO     |      VERSÃO DO FIRMWARE      |')
        console.log('-----------------------------------------------------------------')
        console.log(`|${ricoh[0].marca.padEnd(15,' ')}|${ricoh[0].modelo.padEnd(16,' ')}|${ricoh[0].firmware.padEnd(30,' ')}|`)
        console.log('-----------------------------------------------------------------')
        console.log(`|${ricoh[1].marca.padEnd(15,' ')}|${ricoh[1].modelo.padEnd(16,' ')}|${ricoh[1].firmware.padEnd(30,' ')}|`)
        console.log('-----------------------------------------------------------------')
        console.log(`|${lexmark.marca.padEnd(15,' ')}|${lexmark.modelo.padEnd(16,' ')}|${lexmark.firmware.padEnd(30,' ')}|`)
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

let tabelasFirmware = [tabFirmKyocera,tabFirmOutras]
module.exports = tabelasFirmware