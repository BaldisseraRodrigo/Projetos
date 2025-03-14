//PRINTER HELPER
const menuHardware = require("./submenus")
const prompt = require("prompt-sync")()
console.clear()
let opcaoP = null
const menuP = [menuHardware,'Firmwares','Calculadora de Vida Útil','Calculadora de Combustível','Check-lists','Toners/Cartuchos','Equipamentos']

//MENU PRINCIPAL
const mnPr = function mP() {
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

while(opcaoP!='S') {
    console.clear()
    mnPr()
    opcaoP = prompt('Digite a opção: ')
    if (opcaoP>=1 && opcaoP<=9) {
        menuP[opcaoP-1]()
    } else if (opcaoP=='S') {
        console.log('Saindo...')
    } else {
        console.log('ERRO! Opção invalida!')
    }
}