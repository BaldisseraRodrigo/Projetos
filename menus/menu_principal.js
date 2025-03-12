//PRINTER HELPER
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
const menu = ['Manutenção de Hardware','Ajustes/Modo Manutenção','Código de Erro', 'Firmwares',
    'Calculadora de Vida Útil','Calculadora de Combustível','Check-lists','Toners/Cartuchos','Equipamentos']

//MENU PRINCIPAL
function menuPrincipal() {
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[1] Manutenção de Hardware     |')
    console.log('|[2] Configurações & Ajustes    |')
    console.log('|[3] Códigos de Erro            |')
    console.log('|[4] Firmwares                  |')
    console.log('|[5] Calculadora de Vida Útil   |')
    console.log('|[6] Calculadora de Combustível |')
    console.log('|[7] Check-lists                |')
    console.log('|[8] Toners & Cartuchos         |')
    console.log('|[9] Equipamentos               |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
    while(opcao!='S') {
        opcao = prompt('Digite a opção: ')
        if (opcao>=1 && opcao<=9) {
            console.log(menu[opcao-1])
            opcao = 'S'
        } else if (opcao=='S') {
            console.log('Saindo...')
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

menuPrincipal()

