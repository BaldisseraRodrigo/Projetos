//PRINTER HELPER
const manutConfig = require("./submenus")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
const listaPrincipal = [manutConfig,'Firmwares','Calculadora de Vida Útil','Calculadora de Combustível','Check-lists','Toners/Cartuchos','Equipamentos']

//MENU PRINCIPAL
const menuPrincipal = function mP() {
    console.clear()
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[1] Manutenções e Configurações|')
    console.log('|[2] Firmwares                  |')
    console.log('|[3] Calculadora de Vida Útil   |')
    console.log('|[4] Calculadora de Combustível |')
    console.log('|[5] Check-lists                |')
    console.log('|[6] Toners & Cartuchos         |')
    console.log('|[7] Equipamentos               |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
}

while(opcao!='S') {
    menuPrincipal()
    opcao = prompt('Digite a opção: ')
    if (opcao>=1 && opcao<=9) {
        listaPrincipal[opcao-1]()
    } else if (opcao=='S') {
        console.log('Saindo...')
    } else {
        console.log('ERRO! Opção invalida!')
    }
}