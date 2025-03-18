const prompt = require("prompt-sync")()
let opcao = null

const solucaoErro = function rE(a) {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('.----------------------------------------------------------------------------.')
        console.log('|                            P R O B L E M A                                 |')
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[0]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log('|                               C A U S A                                    |')
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[1]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log(`|                              S O L U Ç Ã O                                 |`)
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[2]}`)
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

module.exports = solucaoErro