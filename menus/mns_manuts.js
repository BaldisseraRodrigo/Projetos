const mnMntP2040 = require("./kyocera/menu_p2040")
const prompt = require("prompt-sync")()
console.clear()
let opcaoM = null
const menuM = [mnMntP2040,'P3050','P3155']
//1-MANUTENÇÃO DE KYOCERA
const mnMntKyocera = function mMk() {
    console.clear()
    console.log('')
    console.log('=================================')
    console.log('|MANUTS. E CONFIGURAÇÕES KYOCERA|')
    console.log('=================================')
    console.log('|             ECOSYS            |')
    console.log('|-------------------------------|')
    console.log('|[1] P2040             [!] M2040|')
    console.log('|[2] P3050             [!] M3550|')
    console.log('|[3] P3155             [!] M3655|')
    console.log('|[!] M2640             [!] M3040|')
    console.log('|[!] M5526             [!] M6626|')
    console.log('|-------------------------------|')
    console.log('|            TASKALFA           |')
    console.log('|-------------------------------|')
    console.log('|[!] 306CI            [!] 2552CI|')
    console.log('|[!] 307CI            [!] 2553CI|')
    console.log('|[!] 308CI            [!] 4052CI|')
    console.log('|[!] 356CI            [!] 5052CI|')
    console.log('|[!] 358CI            [!] 6052CI|')
    console.log('|[!] 406CI            [!] 7052CI|')
    console.log('|-------------------------------|')
    console.log('|[S] Sair             [V] Voltar|')
    console.log('=================================')
    console.log('')
    while(opcaoM!='S') {
        opcaoM = prompt('Digite a opção: ')
        if (opcaoM>=1 && opcaoM<4) {
            menuM[opcaoM-1]()
        } else if (opcaoM=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcaoM=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

module.exports = mnMntKyocera