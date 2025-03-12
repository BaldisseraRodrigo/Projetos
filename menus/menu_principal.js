//PRINTER HELPER
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

//MENU PRINCIPAL
function menuPrincipal() {
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[1] Manutenção de Hardware     |')
    console.log('|[2] Configurações & Ajustes    |')
    console.log('|[3] Códigos de Erro            |')
    console.log('|[4] Firmwares                  |')
    console.log('|[5] Calculadora de Vida Útil   |')
    console.log('|[6] Calculadora de Combustível |')
    console.log('|[7] Check-lists                |')
    console.log('|[8] Toners & Cartuchos         |')
    console.log('|[9] Equipamentos               |')
    console.log('|[S] Sair                       |')
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

menuPrincipal()

