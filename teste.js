//PRINTER HELPER
const prompt = require("prompt-sync")()
console.clear()
let opcao = null
//MENU PRINCIPAL
let menu = ['Saindo...','Manutenção de Hardware','Ajustes/Modo Manutenção','Código de Erro', 'Firmwares',
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
    opcao = parseInt(prompt('Digite a opção desejada: '))
    if (opcao==0) {
        console.log(menu[0])
    } else {
        for (conta in menu) {
        if ([conta]==opcao) {
            console.log(menu[conta])
            }
        }
    }
}


menuPrincipal()