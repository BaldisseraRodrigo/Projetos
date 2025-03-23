const prompt = require("prompt-sync")()
console.clear()

let opcao = null
let instalacao = {
    data:'',
    cliente:'',
    local:'',
    equipamento:'',
    ns:'',
    contador:0,
    os:0,
    firmware:'',
    printwayy:'',
    conexao:0,
    tecnico:'',
}

const checkListPreparacao = function cLp() {
    while(opcao!='S') {
        console.clear()
        instalacao.data = prompt('Data da instalação (DD/MM/AA): ')
        instalacao.cliente = prompt('Cliente: ')
        instalacao.local = prompt('Local da instalação: ')
        instalacao.equipamento = prompt('Modelo do equipamento instalado: ')
        instalacao.ns = prompt('Número de série do equipamento: ')
        instalacao.contador = prompt('Contador do equipamento: ')
        instalacao.os = prompt('Número da Ordem de Serviço: ')
        instalacao.firmware = prompt('Firmware atualizado [S/N]: ')
        instalacao.printwayy = prompt('Equipamento monitorado no Printwayy [S/N]: ')
        instalacao.conexao = prompt('Conexão (1-USB/2-REDE): ')
        if (instalacao.conexao==1) {
            instalacao.conexao = 'USB' 
        } else if (instalacao.conexao==2) {
            instalacao.conexao = prompt('Digite o IP: ')
        }
        instalacao.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('================================================')
        console.log('|          CHECK-LISTS DE INSTALAÇÃO           |')
        console.log('================================================')
        console.log(`|Data: ${instalacao.data}                      |`)
        console.log(`|Cliente: ${instalacao.cliente}                |`)
        console.log(`|Local: ${instalacao.local}                    |`)
        console.log(`|Equipamento: ${instalacao.equipamento}        |`)
        console.log(`|NS: ${instalacao.ns}                          |`)
        console.log(`|Contador: ${instalacao.contador}              |`)
        console.log(`|OS: ${instalacao.os}                          |`)
        console.log(`|Firmware: ${instalacao.firmware}              |`)
        console.log(`|Printwayy: ${instalacao.printwayy}            |`)
        console.log(`|Conexão: ${instalacao.conexao}                |`)
        console.log(`|Técnico: ${instalacao.tecnico}                |`)
        console.log('================================================')
        console.log('|[S] Sair                            [V] Voltar|')
        console.log('================================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcao=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

const checkListInstalacao = function cLi() {
    while(opcao!='S') {
        console.clear()
        instalacao.data = prompt('Data da instalação (DD/MM/AA): ')
        instalacao.cliente = prompt('Cliente: ')
        instalacao.local = prompt('Local da instalação: ')
        instalacao.equipamento = prompt('Modelo do equipamento instalado: ')
        instalacao.ns = prompt('Número de série do equipamento: ')
        instalacao.contador = prompt('Contador do equipamento: ')
        instalacao.os = prompt('Número da Ordem de Serviço: ')
        instalacao.firmware = prompt('Firmware atualizado [S/N]: ')
        instalacao.printwayy = prompt('Equipamento monitorado no Printwayy [S/N]: ')
        instalacao.conexao = prompt('Conexão (1-USB/2-REDE): ')
        if (instalacao.conexao==1) {
            instalacao.conexao = 'USB' 
        } else if (instalacao.conexao==2) {
            instalacao.conexao = prompt('Digite o IP: ')
        }
        instalacao.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('================================================')
        console.log('|          CHECK-LISTS DE INSTALAÇÃO           |')
        console.log('================================================')
        console.log(`|Data: ${instalacao.data}                      |`)
        console.log(`|Cliente: ${instalacao.cliente}                |`)
        console.log(`|Local: ${instalacao.local}                    |`)
        console.log(`|Equipamento: ${instalacao.equipamento}        |`)
        console.log(`|NS: ${instalacao.ns}                          |`)
        console.log(`|Contador: ${instalacao.contador}              |`)
        console.log(`|OS: ${instalacao.os}                          |`)
        console.log(`|Firmware: ${instalacao.firmware}              |`)
        console.log(`|Printwayy: ${instalacao.printwayy}            |`)
        console.log(`|Conexão: ${instalacao.conexao}                |`)
        console.log(`|Técnico: ${instalacao.tecnico}                |`)
        console.log('================================================')
        console.log('|[S] Sair                            [V] Voltar|')
        console.log('================================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao=='S') {
            console.log('Saindo...')
            process.exit(0)
        } else if (opcao=='V') {
            return
        } else {
            console.log('ERRO! Opção invalida!')
        }
    }
}

const checklists = [checkListInstalacao]
module.exports = checklists