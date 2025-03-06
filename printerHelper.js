//PRINTER HELPER
const prompt = require("prompt-sync")()
console.clear()

//MENU PRINCIPAL
let menuPrincipal = ['Sair','Manutenção de Hardware','Ajustes/Modo Manutenção','Código de Erro', 'Firmwares',
    'Calculadora de Vida Útil','Calculadora de Combustível','Check-lists','Toners/Cartuchos','Equipamentos'
]
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
}
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
    console.log('|[5] Voltar                     |')
    console.log('|[0] Sair                       |')
    console.log('=================================')
    console.log('')
}





let opcao = null
menuPrincipal()
opcao = parseInt(prompt('Digite a opção desejada: '))
switch(opcao) {
    case 1:
        manutencaoHardware()
        opcao = parseInt(prompt('Escolha o fabricante, voltar ou sair: '))

        break
    case 2:
        console.log('Ajustes/Modo Manutenção')
        break
    case 3:
        console.log('Códigos de Erro')
        break
    case 4:
        console.log('Firmwares')
        break
    case 5:
        console.log('Calculadora de Vida Útil')
        break
    case 6:
        console.log('Calculadora de Combustível')
        break
    case 7:
        console.log('Check-lists')
        break
    case 8:
        console.log('Toners/Cartuchos')
        break
    case 9:
        console.log('Equipamentos')
        break
    case 0:
        console.log('Saindo...')
        break
}

