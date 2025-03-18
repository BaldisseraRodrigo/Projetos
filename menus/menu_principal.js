//PRINTER HELPER
const submenu = require("./submenus")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
const listaPrincipal = [submenu[0],submenu[1],'Calculadora de Vida Útil','Calculadora de Combustível','Check-lists','Toners/Cartuchos','Equipamentos']

//MENU PRINCIPAL
const menuPrincipal = function mP() {
    console.clear()
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[1] MANUTENÇÕES E CONFIGURAÇÕES|')
    console.log('|[2] FIRMWARES                  |')
    console.log('|[3] CALCULADORA DE VIDA ÚTIL   |')
    console.log('|[4] CALCULADORA DE COMBUSTÍVEL |')
    console.log('|[5] CHECK-LISTS                |')
    console.log('|[6] TONERS & CARTUCHOS         |')
    console.log('|[7] EQUIPAMENTOS               |')
    console.log('=================================')
    console.log('|[S] SAIR                       |')
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