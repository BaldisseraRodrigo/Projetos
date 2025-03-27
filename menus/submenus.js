const manutKyocera = require("./menu_manuts")
const tabelasFirmware = require("./tabela_firmware")
const tabelasToners = require("./tabela_toners")
const checklists = require("./checklists")
const tabelasEquipamentos = require("./tabela_equipamentos")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

//1-MANUTENÇÕES & CONFIGURAÇÕESs
const manutConfig = function mC() {
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
            manutKyocera()
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
            tabelasFirmware[0]()
        } else if (opcao==2) {
            tabelasFirmware[1]()
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
            checklists[opcao-1]()
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
const menuToner = function mT() {
    while(opcao!='S') {
        console.clear()
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
        opcao = prompt('Digite a opção: ')
        if (opcao>0 && opcao<3) {
            tabelasToners[opcao-1]()
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

//5-EQUIPAMENTOS
const menuEquipamentos = function mE() {
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|          EQUIPAMENTOS         |')
        console.log('=================================')
        console.log('|[1] KYOCERA                    |')
        console.log('|[2] RICOH, LEXMARK & CANON     |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao>0 && opcao<3) {
            tabelasEquipamentos[opcao-1]()
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

const submenus = [manutConfig,menuFirmware,menuCheckList,menuToner,menuEquipamentos]
module.exports = submenus