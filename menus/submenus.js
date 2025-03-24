const manutKyocera = require("./menu_manuts")
const tabelasFirmware = require("./tabela_firmware")
const checklist = require("./checklists")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

//1-MANUTENÇÕES & CONFIGURAÇÕES
const manutConfig = function mC() {
    const listaManut = [manutKyocera]
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|   MANUTENÇÕES & CONFIGURAÇÃO  |')
        console.log('=================================')
        console.log('|[1] KYOCERA                    |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao==1) {
            listaManut[0]()
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

//2-FIRMWARES
const menuFirmware = function mF() {
    const listaFirmware = [tabelasFirmware[0],tabelasFirmware[1]]
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|           FIRMWARES           |')
        console.log('=================================')
        console.log('|[1] KYOCERA                    |')
        console.log('|[2] RICOH, LEXMARK & CANON     |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao==1) {
            listaFirmware[0]()
        } else if (opcao==2) {
            listaFirmware[1]()
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

//3-CHECK-LISTS
const menuCheckList = function mCl() {
    const listaCheck = [checklist[0],checklist[1],checklist[2],checklist[3],checklist[4]]
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|          CHECK-LISTS          |')
        console.log('=================================')
        console.log('|[1] PREPARAÇÃO                 |')
        console.log('|[2] INSTALAÇÃO                 |')
        console.log('|[3] MANUTENÇÃO                 |')
        console.log('|[4] RETIRADA                   |')
        console.log('|[5] DESMANCHE                  |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao>0 && opcao<6) {
            listaCheck[opcao-1]()
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

//4-TONERS & CARTUCHOS
function menuToner() {
    console.log('')
    console.log('=================================')
    console.log('|       TONERS & CARTUCHOS      |')
    console.log('=================================')
    console.log('|[1] KYOCERA                    |')
    console.log('|[2] RICOH, LEXMARK & CANON     |')
    console.log('=================================')
    console.log('|[V] Voltar                     |')
    console.log('|[S] Sair                       |')
    console.log('=================================')
    console.log('')
}

//5-EQUIPAMENTOS
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

const submenu = [manutConfig,menuFirmware,menuCheckList]
module.exports = submenu