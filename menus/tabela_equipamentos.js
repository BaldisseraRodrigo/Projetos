const ecosys = require("./kyocera")
const ricoh = require("./ricoh")
const lexmark = require("./lexmark")
const mx722 = require("./lexmark")
const prompt = require("prompt-sync")()
let opcao = null

const tabKyocera = function tK() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('----------------------------------------------------------------------------------------------------------')
        console.log('|                                                K Y O C E R A                                           |')
        console.log('----------------------------------------------------------------------------------------------------------')
        console.log('|       MODELO       |    PPM    |   PAPEL  |     CAPACIDADE     |     CORES     |   TONER   |   PREÇO   |')
        console.log('----------------------------------------------------------------------------------------------------------')
        console.log(`|${ecosys[0].modelo.padEnd(20,' ')}|${ecosys[0].ppm.padEnd(11,' ')}|${ecosys[0].papel.padEnd(10,' ')}|${ecosys[0].capacidade.padEnd(20,' ')}|${ecosys[0].cores.padEnd(15,' ')}|${ecosys[0].toner.modelo.padEnd(11,' ')}|R$${ecosys[0].valores.preco.toFixed(2).toString().padEnd(9,' ')}|`)
        console.log('----------------------------------------------------------------------------------------------------------')
        console.log(`|${ecosys[1].modelo.padEnd(20,' ')}|${ecosys[1].ppm.padEnd(11,' ')}|${ecosys[1].papel.padEnd(10,' ')}|${ecosys[1].capacidade.padEnd(20,' ')}|${ecosys[1].cores.padEnd(15,' ')}|${ecosys[1].toner.modelo.padEnd(11,' ')}|R$${ecosys[1].valores.preco.toFixed(2).toString().padEnd(9,' ')}|`)
        console.log('----------------------------------------------------------------------------------------------------------')
        console.log(`|${ecosys[2].modelo.padEnd(20,' ')}|${ecosys[2].ppm.padEnd(11,' ')}|${ecosys[2].papel.padEnd(10,' ')}|${ecosys[2].capacidade.padEnd(20,' ')}|${ecosys[2].cores.padEnd(15,' ')}|${ecosys[2].toner.modelo.padEnd(11,' ')}|R$${ecosys[2].valores.preco.toFixed(2).toString().padEnd(9,' ')}|`)
        console.log('==========================================================================================================')
        console.log('|[S] Sair                                                                                      [V] Voltar|')
        console.log('==========================================================================================================')
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
        console.log('----------------------------------------------------------------------------------------------------------------------')
        console.log('|     MARCA     |     MODELO     |    PPM    |   PAPEL  |     CAPACIDADE     |     CORES     |   TONER   |   PREÇO   |')
        console.log('----------------------------------------------------------------------------------------------------------------------')
        console.log(`|${mx722.marca.padEnd(15,' ')}|${mx722.modelo.padEnd(16,' ')}|${mx722.ppm.padEnd(11,' ')}|${mx722.papel.padEnd(10,' ')}|${mx722.capacidade.padEnd(20,' ')}|${mx722.cores.padEnd(15,' ')}|${mx722.toner.modelo.padEnd(11,' ')}|R$${mx722.valores.preco.toFixed(2).toString().padEnd(9,' ')}|`)
        console.log('----------------------------------------------------------------------------------------------------------------------')
        console.log(`|${ricoh[0].marca.padEnd(15,' ')}|${ricoh[0].modelo.padEnd(16,' ')}|${ricoh[0].ppm.padEnd(11,' ')}|${ricoh[0].papel.padEnd(10,' ')}|${ricoh[0].capacidade.padEnd(20,' ')}|${ricoh[0].cores.padEnd(15,' ')}|${ricoh[0].toner.modelo.padEnd(11,' ')}|R$${ricoh[0].valores.preco.toFixed(2).toString().padEnd(9,' ')}|`)
        console.log('----------------------------------------------------------------------------------------------------------------------')
        console.log(`|${ricoh[1].marca.padEnd(15,' ')}|${ricoh[1].modelo.padEnd(16,' ')}|${ricoh[1].ppm.padEnd(11,' ')}|${ricoh[1].papel.padEnd(10,' ')}|${ricoh[1].capacidade.padEnd(20,' ')}|${ricoh[1].cores.padEnd(15,' ')}|${ricoh[1].toner.modelo.padEnd(11,' ')}|R$${ricoh[1].valores.preco.toFixed(2).toString().padEnd(9,' ')}|`)
        console.log('======================================================================================================================')
        console.log('|[S] Sair                                                                                                  [V] Voltar|')
        console.log('======================================================================================================================')
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