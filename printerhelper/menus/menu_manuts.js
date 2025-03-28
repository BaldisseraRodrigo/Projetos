const manutP2040 = require("./menu_p2040")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
const listaManutKyocera = [manutP2040,'P3050','P3155']
//1-MANUTENÇÕES & CONFIGURAÇÕES KYOCERA
const manutKyocera = function mK() {
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|MANUTS. E CONFIGURAÇÕES KYOCERA|')
        console.log('=================================')
        console.log('|             ECOSYS            |')
        console.log('|-------------------------------|')
        console.log('|[1] P2040                      |')
        console.log('|-------------------------------|')
        console.log('|[S] Sair             [V] Voltar|')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao>0 && opcao<4) {
            listaManutKyocera[opcao-1]()
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

module.exports = manutKyocera