//PRINTER HELPER
const prompt = require("prompt-sync")()
console.clear()

import { gasConta } from "./gasosa"

//MENU PRINCIPAL
function menuPrincipal(a) {
    console.log('')
    console.log('=================================')
    console.log('|  P R I N T E R   H E L P E R  |')
    console.log('=================================')
    console.log('|[ 1] Manutenção de Hardware    |')
    console.log('|[ 2] Configurações e Ajustes   |')
    console.log('|[ 3] Modos de Manutenção       |')
    console.log('|[ 4] Códigos de Erro           |')
    console.log('|[ 5] Firmwares                 |')
    console.log('|[ 6] Calculadora de Vida Útil  |')
    console.log('|[ 7] Calculadora de Combustível|')
    console.log('|[ 8] Check-lists               |')
    console.log('|[ 9] Toners/Cartuchos          |')
    console.log('|[10] Equipamentos              |')
    console.log('|[11] Sair                      |')
    console.log('=================================')
    console.log('')
    a = parseInt(prompt('Digite a opção desejada: '))
    console.clear()
    return a
}

let opcao = 0

while (opcao<1 || opcao>11) {
    opcao = menuPrincipal(opcao)
    if (opcao<1 || opcao>11) {
        console.log('OPÇÃO ERRADA')
    }
}

switch(opcao) {
    case 1:
        console.log('Manutenção de Hardware')
        break
    case 2:
        console.log('Configurações e Ajustes')
        break
    case 3:
        console.log('Modos de Manutenção')
        break
    case 4:
        console.log('Códigos de Erro')
        break
    case 5:
        console.log('Firmwares')
        break
    case 6:
        console.log('Calculadora de Vida Útil')
        break
    case 7:
        gasConta()
        break
    case 8:
        console.log('Check-lists')
        break
    case 9:
        console.log('Toners/Cartuchos')
        break
    case 10:
        console.log('Equipamentos')
        break
    case 11:
        console.log('Saindo...')
}

