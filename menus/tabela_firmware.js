const prompt = require("prompt-sync")()
let opcao = null

const tabelaFirmware = function tF(a) {
    while (opcao!='S') {
        console.log('-----------------------------------------------------------------')
        console.log('|     MODELO     |     VERSÃO     |         STATUS PAGE         |')
        console.log('-----------------------------------------------------------------')
        console.log(`| ${a.modelo} | ${a.firmware[0]}          | ${a.firmware[1]} |`)
        console.log('-----------------------------------------------------------------')
        console.log('====================================================================================================================')
        console.log('|[S] Sair             [V] Voltar|')
        console.log('=================================')
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

module.exports = tabelaFirmware