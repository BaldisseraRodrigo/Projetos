const mnMntKyocera = require("./mns_manuts")
const prompt = require("prompt-sync")()
console.clear()
let opcaoS = null
const menuS = [mnMntKyocera,'RICOH','LEXMARK','CANON']
//1-MANUTENÇÃO DE HARDWARE
const mntHard = function mH() {
    while(opcaoS!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|   MANUTENÇÕES & CONFIGURAÇÃO  |')
        console.log('=================================')
        console.log('|[1] KYOCERA                    |')
        console.log('|[2] RICOH                      |')
        console.log('|[3] LEXMARK                    |')
        console.log('|[4] CANON                      |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcaoS = prompt('Digite a opção: ')
        if (opcaoS>=1 && opcaoS<5) {
            menuS[opcaoS-1]()
        } else if (opcaoS=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcaoS=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

//4-FIRMWARES
function menuFirmware() {
    console.log('')
    console.log('=================================')
    console.log('|           FIRMWARES           |')
    console.log('=================================')
    console.log('|[1] KYOCERA                    |')
    console.log('|[2] RICOH                      |')
    console.log('|[3] LEXMARK                    |')
    console.log('|[4] CANON                      |')
    console.log('=================================')
    console.log('|[V] Voltar                     |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
}

//7-CHECK-LISTS
function menuCheck() {
    console.log('')
    console.log('=================================')
    console.log('|          CHECK-LISTS          |')
    console.log('=================================')
    console.log('|[1] INSTALAÇÃO                 |')
    console.log('|[2] RETIRADA                   |')
    console.log('|[3] PREPARAÇÃO                 |')
    console.log('|[4] DESMANCHE                  |')
    console.log('=================================')
    console.log('|[V] Voltar                     |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
}

//8-TONERS & CARTUCHOS
function menuToner() {
    console.log('')
    console.log('=================================')
    console.log('|       TONERS & CARTUCHOS      |')
    console.log('=================================')
    console.log('|[1] KYOCERA                    |')
    console.log('|[2] RICOH                      |')
    console.log('|[3] LEXMARK                    |')
    console.log('|[4] CANON                      |')
    console.log('=================================')
    console.log('|[V] Voltar                     |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
}

//9-EQUIPAMENTOS
function menuEquipamentos() {
    console.log('')
    console.log('=================================')
    console.log('|          EQUIPAMENTOS         |')
    console.log('=================================')
    console.log('|[1] KYOCERA                    |')
    console.log('|[2] RICOH                      |')
    console.log('|[3] LEXMARK                    |')
    console.log('|[4] CANON                      |')
    console.log('=================================')
    console.log('|[V] Voltar                     |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
}

module.exports = mntHard