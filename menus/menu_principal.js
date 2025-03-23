//PRINTER HELPER
const submenu = require("./submenus")
const menuCalcVidaUtil = require("./calc_util")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
const listaPrincipal = [submenu[0],submenu[1],submenu[2],'Toners/Cartuchos','Equipamentos',menuCalcVidaUtil,'Calculadora de Combustível']

//MENU PRINCIPAL
const menuPrincipal = function mP() {
    console.clear()
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[1] MANUTENÇÕES E CONFIGURAÇÕES|')
    console.log('|[2] FIRMWARES                  |')
    console.log('|[3] CHECK-LISTS                |')
    console.log('|[4] TONERS & CARTUCHOS         |')
    console.log('|[5] EQUIPAMENTOS               |')
    console.log('|[6] CALCULADORA DE VIDA ÚTIL   |')
    console.log('|[7] CALCULADORA DE COMBUSTÍVEL |')
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