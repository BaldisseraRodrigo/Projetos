const prompt = require("prompt-sync")()
console.clear()

let opcao = null
let checklist = {
    data:'',
    cliente:'',
    local:'',
    modelo:'',
    ns:'',
    contador:0,
    os:0,
    manutencao:'',
    fw:'',
    pw:'',
    conexao:0,
    tecnico:'',
}

const checkListPreparacao = function cLp() {
    while(opcao!='S') {
        console.clear()
        checklist.data = prompt('Data da preparação (DD/MM/AA): ')
        checklist.modelo = prompt('Modelo do equipamento: ')
        checklist.ns = prompt('Número de série do equipamento: ')
        checklist.contador = prompt('Contador do equipamento: ')
        checklist.os = prompt('Número da Ordem de Serviço: ')
        checklist.fw = prompt('Firmware atualizado [S/N]: ')
        checklist.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('=================================================')
        console.log('|           CHECK-LISTS DE PREPARAÇÃO           |')
        console.log('=================================================')
        console.log(`|Data: ${checklist.data}`)
        console.log(`|Equipamento: ${checklist.modelo}`)
        console.log(`|NS: ${checklist.ns}`)
        console.log(`|Contador: ${checklist.contador}`)
        console.log(`|OS: ${checklist.os}`)
        console.log(`|Firmware: ${checklist.fw}`)
        console.log(`|Técnico: ${checklist.tecnico}`)
        console.log('=================================================')
        console.log('|[S] Sair                             [V] Voltar|')
        console.log('=================================================')
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
        checklist.data = prompt('Data da instalação (DD/MM/AA): ')
        checklist.cliente = prompt('Cliente: ')
        checklist.local = prompt('Local da instalação: ')
        checklist.modelo = prompt('Modelo do equipamento: ')
        checklist.ns = prompt('Número de série do equipamento: ')
        checklist.contador = prompt('Contador do equipamento: ')
        checklist.os = prompt('Número da Ordem de Serviço: ')
        checklist.fw = prompt('Firmware atualizado [S/N]: ')
        checklist.pw = prompt('Equipamento monitorado no Printwayy [S/N]: ')
        checklist.conexao = prompt('Conexão (1-USB/2-REDE): ')
        if (checklist.conexao==1) {
            checklist.conexao = 'USB' 
        } else if (checklist.conexao==2) {
            checklist.conexao = prompt('Digite o IP: ')
        }
        checklist.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('================================================')
        console.log('|          CHECK-LISTS DE INSTALAÇÃO           |')
        console.log('================================================')
        console.log(`|Data: ${checklist.data}`)
        console.log(`|Cliente: ${checklist.cliente}`)
        console.log(`|Local: ${checklist.local}`)
        console.log(`|Equipamento: ${checklist.modelo}`)
        console.log(`|NS: ${checklist.ns}`)
        console.log(`|Contador: ${checklist.contador}`)
        console.log(`|OS: ${checklist.os}`)
        console.log(`|Firmware: ${checklist.fw}`)
        console.log(`|Printwayy: ${checklist.pw}`)
        console.log(`|Conexão: ${checklist.conexao}`)
        console.log(`|Técnico: ${checklist.tecnico}`)
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

const checkListManutencao = function cLm() {
    while(opcao!='S') {
        console.clear()
        checklist.data = prompt('Data da manutenção (DD/MM/AA): ')
        checklist.cliente = prompt('Cliente: ')
        checklist.local = prompt('Local de origem: ')
        checklist.modelo = prompt('Modelo do equipamento: ')
        checklist.ns = prompt('Número de série do equipamento: ')
        checklist.contador = prompt('Contador do equipamento: ')
        checklist.os = prompt('Número da Ordem de Serviço: ')
        checklist.manutencao = prompt('Descrição da manutenção: ')
        checklist.fw = prompt('Firmware atualizado [S/N]: ')
        checklist.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('================================================')
        console.log('|          CHECK-LISTS DE MANUTENÇÃO           |')
        console.log('================================================')
        console.log(`|Data: ${checklist.data}`)
        console.log(`|Cliente: ${checklist.cliente}`)
        console.log(`|Local: ${checklist.local}`)
        console.log(`|Equipamento: ${checklist.modelo}`)
        console.log(`|NS: ${checklist.ns}`)
        console.log(`|Contador: ${checklist.contador}`)
        console.log(`|OS: ${checklist.os}`)
        console.log(`|Descrição: ${checklist.manutencao}`)
        console.log(`|Firmware: ${checklist.fw}`)
        console.log(`|Técnico: ${checklist.tecnico}`)
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

const checkListRetirada = function cLr() {
    while(opcao!='S') {
        console.clear()
        checklist.data = prompt('Data de retirada (DD/MM/AA): ')
        checklist.cliente = prompt('Cliente: ')
        checklist.local = prompt('Local da retirada: ')
        checklist.modelo = prompt('Modelo do equipamento: ')
        checklist.ns = prompt('Número de série do equipamento: ')
        checklist.contador = prompt('Contador do equipamento: ')
        checklist.os = prompt('Número da Ordem de Serviço: ')
        checklist.fw = prompt('Firmware atualizado [S/N]: ')
        checklist.pw = prompt('Equipamento retirado do Printwayy [S/N]: ')
        checklist.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('================================================')
        console.log('|            CHECK-LISTS DE RETIRADA           |')
        console.log('================================================')
        console.log(`|Data: ${checklist.data}`)
        console.log(`|Cliente: ${checklist.cliente}`)
        console.log(`|Local: ${checklist.local}`)
        console.log(`|Equipamento: ${checklist.modelo}`)
        console.log(`|NS: ${checklist.ns}`)
        console.log(`|Contador: ${checklist.contador}`)
        console.log(`|OS: ${checklist.os}`)
        console.log(`|Firmware: ${checklist.fw}`)
        console.log(`|Printwayy: ${checklist.pw}`)
        console.log(`|Técnico: ${checklist.tecnico}`)
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

const checkListDesmanche = function cLd() {
    while(opcao!='S') {
        console.clear()
        checklist.data = prompt('Data do desmanche (DD/MM/AA): ')
        checklist.modelo = prompt('Modelo do equipamento: ')
        checklist.ns = prompt('Número de série do equipamento: ')
        checklist.contador = prompt('Contador do equipamento: ')
        checklist.os = prompt('Número da Ordem de Serviço: ')
        checklist.tecnico = prompt('Nome do Técnico: ')
        console.log('')
        console.log('================================================')
        console.log('|            CHECK-LISTS DE DESMANCHE          |')
        console.log('================================================')
        console.log(`|Data: ${checklist.data}`)
        console.log(`|Equipamento: ${checklist.modelo}`)
        console.log(`|NS: ${checklist.ns}`)
        console.log(`|Contador: ${checklist.contador}`)
        console.log(`|OS: ${checklist.os}`)
        console.log(`|Técnico: ${checklist.tecnico}`)
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

const checklists = [checkListPreparacao,checkListInstalacao,checkListManutencao,checkListRetirada,checkListDesmanche]
module.exports = checklists