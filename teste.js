//PRINTER HELPER
const prompt = require("prompt-sync")()
console.clear()
let sair = 0
let voltar = 9
let opcao = null
//MENU PRINCIPAL
function menuPrincipal() {
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[1] Manutenção de Hardware     |')
    console.log('|[2] Ajustes/Modo Manutenção    |')
    console.log('|[3] Códigos de Erro            |')
    console.log('|[4] Firmwares                  |')
    console.log('|[5] Calculadora de Vida Útil   |')
    console.log('|[6] Calculadora de Combustível |')
    console.log('|[7] Check-lists                |')
    console.log('|[8] Toners/Cartuchos           |')
    console.log('|[9] Equipamentos               |')
    console.log('|[0] Sair                       |')
    console.log('=================================')
    console.log('')
    if (opcao==0) {
        console.log(mntHard[0])
    } else {
        for (conta in mntHard) {
        if ([conta]==opcao) {
            mntHard[conta]()
            }
        }
    }
}
let menu = ['Saindo...',manutencaoHardware,'Ajustes/Modo Manutenção','Código de Erro', 'Firmwares',
    'Calculadora de Vida Útil','Calculadora de Combustível','Check-lists','Toners/Cartuchos','Equipamentos'
]

//MANUTENÇÃO DE HARDWARE
function manutencaoHardware() {
    console.log('')
    console.log('=================================')
    console.log('|    MANUTENÇÃO DE HARDWARE     |')
    console.log('=================================')
    console.log('|[1] KYOCERA                    |')
    console.log('|[2] RICOH                      |')
    console.log('|[3] LEXMARK                    |')
    console.log('|[4] CANON                      |')
    console.log('=================================')
    console.log('|[5] Voltar                     |')
    console.log('|[0] Sair                       |')
    console.log('=================================')
    console.log('')
    opcao = parseInt(prompt('Digite a opção desejada: '))
    if (opcao==0) {
        console.log(mntHard[0])
    } else {
        for (conta in mntHard) {
        if ([conta]==opcao) {
            mntHard[conta]()
            }
        }
    }
}
const mntHard = ['Saindo...',manutencaoKyocera,'RICOH','LEXMARK','CANON',menuPrincipal()]

//MANUTENÇÃO DE HARDWARE - KYOCERA
function manutencaoKyocera() {
    console.log('')
    console.log('=================================')
    console.log('|     MANUTENÇÃO DE KYOCERA     |')
    console.log('=================================')
    console.log('|             ECOSYS            |')
    console.log('|-------------------------------|')
    console.log('|[] P2040               [] M2040|')
    console.log('|[] P3050               [] M3550|')
    console.log('|[] P3155               [] M3655|')
    console.log('|[] M2640               [] M3040|')
    console.log('|[] M5526               [] M6626|')
    console.log('|-------------------------------|')
    console.log('|            TASKALFA           |')
    console.log('|-------------------------------|')
    console.log('|[] 306CI              [] 2552CI|')
    console.log('|[] 307CI              [] 2553CI|')
    console.log('|[] 308CI              [] 4052CI|')
    console.log('|[] 356CI              [] 5052CI|')
    console.log('|[] 358CI              [] 6052CI|')
    console.log('|[] 406CI              [] 7052CI|')
    console.log('|-------------------------------|')
    console.log('|[0] Sair             [9] Voltar|')
    console.log('=================================')
    console.log('')
}

//MANUTENÇÃO DE HARDWARE - KYOCERA
function manutencaoP2040() {
    console.log('')
    console.log('=================================')
    console.log('|      MANUTENÇÃO DA P2040      |')
    console.log('=================================')
    console.log('|[1] MANCHAS NO PAPEL           |')
    console.log('|[2] OBSTRUÇÃO DE PAPEL         |')
    console.log('|[3] RUÍDOS                     |')
    console.log('|[4] NÃO LIGA                   |')
    console.log('=================================')
    console.log('|[9] Voltar                     |')
    console.log('|[0] Sair                       |')
    console.log('=================================')
    console.log('')
}

//MANUTENÇÃO DE HARDWARE - KYOCERA
function obstrucaoP2040() {
    console.log('')
    console.log('=================================')
    console.log('|  OBSTRUÇÃO DE PAPEL NA P2040  |')
    console.log('=================================')
    console.log('|[1] GAVETA                     |')
    console.log('|[2] BANDEJA MP                 |')
    console.log('|[3] BY PASS                    |')
    console.log('|[4] UNIDADE DE CILINDRO        |')
    console.log('|[5] UNIDADE DE FUSÃO           |')
    console.log('|[6] UNIDADE DUPLEX             |')
    console.log('|[7] BANDEJA DE SAÍDA           |')
    console.log('=================================')
    console.log('|[9] Voltar                     |')
    console.log('|[0] Sair                       |')
    console.log('=================================')
    console.log('')
}





menuPrincipal()

