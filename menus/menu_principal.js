//PRINTER HELPER
const submenus = require("./submenus")
const menuCalcVidaUtil = require("./calc_util")
const calcCombustivel = require("./calc_comb")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

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
    if (opcao>0 && opcao<8) {
        if (opcao==6) {
            menuCalcVidaUtil()
        } else if (opcao==7) {
            calcCombustivel()
        } else {
            submenus[opcao-1]()
        }
    } else if (opcao=='S') {
        console.log('Saindo...')
    } else {
        console.log('ERRO! Opção invalida!')
    }
}