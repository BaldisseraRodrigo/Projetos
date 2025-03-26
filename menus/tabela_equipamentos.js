const ecosys = require("./kyocera")
const ricoh = require("./ricoh")
const lexmark = require("./lexmark")
const prompt = require("prompt-sync")()
let opcao = null

const tabKyocera = function tK() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('-----------------------------------------------------------------------------------------')
        console.log('|                                     K Y O C E R A                                     |')
        console.log('-----------------------------------------------------------------------------------------')
        console.log('|   MODELO   |   PPM   |   PAPEL   |   CAPACIDADE   |   CORES   |   TONER   |   PREÇO   |')
        console.log('-----------------------------------------------------------------------------------------')
        console.log(`|${ecosys[0].modelo.padEnd(16,' ')}|${ecosys[0].ppm.padEnd(16,' ')}|${ecosys[0].papel.padEnd(29,' ')}|${ecosys[0].capacidade.padEnd(29,' ')}|${ecosys[0].cores.padEnd(29,' ')}|${ecosys[0].toner.modelo.padEnd(29,' ')}|${ecosys[0].valores.preco.padEnd(29,' ')}|`)
        console.log('-----------------------------------------------------------------')

        console.log('-----------------------------------------------------------------')

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

const tabOutras = function tO() {
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

let tabelasEquipamentos = [tabKyocera,tabOutras]
module.exports = tabelasEquipamentos