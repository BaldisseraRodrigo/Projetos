const solucaoProblema = require("../checklists/solucao_problema")
const solucaoErro = require("../checklists/solucao_erro")
const prompt = require("prompt-sync")()
console.clear()
let opcao = null

const manchaVertical = ['Mancha na Vertical',
    'É uma sujeira no trilho de carga.',
    'Chave de fenda fina e pincel.',
    '1.ABRA a tampa frontal.\n 2.RETIRE a unidade reveladora.\n 3.RETIRE a unidade de cilindro.\n 4.REMOVA o trilho de carga da unidade de cilindro com o auxilio de uma chave de fenda fina.\n 5.VERIFIQUE se há alguma sujeira na parte de baixo ou dentro do trilho de carga.\n 6.Caso tenha, REMOVA com um pincel.\n 7.MONTE o trilho de carga na unidade de cilindro novamente .\n 8.MONTE as unidades de cilindro e reveladora no equipamento novamente e feche a tampa frontal.\n 9.IMPRIMA uma página de testes e VERIFIQUE se a mancha saiu. Caso não tenha saído, REPITA o procedimento novamente.'
]
const obstrucaoGaveta = ['Obstrução na Gaveta',
    'Roletes desgastados.',
    'Chave de fenda fina e álcool em gel.',
    '1.RETIRE a bandeja.\n 2.Com a chave de fenda, RETIRE o suporte do rolete da bandeja e depois o rolete.\n 3.Na parte superior do console da bandeja, PRESSIONE a trava do suporte de roletes e GIRE o conjunto para trás.\n 4.REMOVA os roletes do suporte.\n 5.VERIFIQUE se os roletes ainda possuem ranhuras, se sim, LIMPE-OS com o álcool em gel.\n 6.Se os roletes estiverem gastos, FAÇA a substituição do conjunto inteiro.\n 7.MONTE os roletes no equipamento novamente.\n 8.IMPRIMA uma página de testes para verificar a tração dos roletes.'
]

const e0100 = ['ERRO 0100',
    'É um problema com o dispositivo de memória de backup.',
    '1.Reinicie a impressora.\n 2.Certifique-se de que todos os cabos e conexões internas estejam firmes e sem danos.\n 3.Atualize o firmware.\n 4.Se as etapas anteriores não resolverem o problema, pode ser necessário substituir a placa principal.'
]

//MANUTENÇÃO P2040
const listaManutP2040 = [manchaVertical,obstrucaoGaveta,e0100]
const manutP2040 = function mP2040() {
    while(opcao!='S') {
        console.clear()
        console.log('')
        console.log('=================================')
        console.log('|      MANUTENÇÃO DA P2040      |')
        console.log('=================================')
        console.log('|[1] MANCHA NA VERTICAL         |')
        console.log('|-------------------------------|')
        console.log('|[2] OBSTRUÇÃO NA GAVETA        |')
        console.log('|-------------------------------|')
        console.log('|[3] ERRO 0100                  |')
        console.log('=================================')
        console.log('|[V] Voltar                     |')
        console.log('|[S] Sair                       |')
        console.log('=================================')
        console.log('')
        opcao = prompt('Digite a opção: ')
        if (opcao==1 || opcao==2) {
            solucaoProblema(listaManutP2040[opcao-1])
        } else if (opcao==3) {
            solucaoErro(listaManutP2040[opcao-1])
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

module.exports = manutP2040