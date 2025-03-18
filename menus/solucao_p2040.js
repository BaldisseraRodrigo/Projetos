const prompt = require("prompt-sync")()
let opcao = null

const manchaVertical = ['Mancha na Vertical',
    'É uma sujeira no trilho de carga.',
    'Chave de fenda fina e pincel.',
    '1.ABRA a tampa frontal.\n 2.RETIRE a unidade reveladora.\n 3.RETIRE a unidade de cilindro.\n 4.REMOVA o trilho de carga da unidade de cilindro com o auxilio de uma chave de fenda fina.\n 5.VERIFIQUE se há alguma sujeira na parte de baixo ou dentro do trilho de carga.\n 6.Caso tenha, REMOVA com um pincel.\n 7.MONTE o trilho de carga na unidade de cilindro novamente .\n 8.MONTE as unidades de cilindro e reveladora no equipamento novamente e feche a tampa frontal.\n 9.IMPRIMA uma página de testes e VERIFIQUE se a mancha saiu. Caso não tenha saído, REPITA o procedimento novamente.'
]

const obstrucaoGaveta = ['Obstrução na Gaveta',
    'Roletes desgastados.',
    'Chave de fenda fina e álcool em gel.',
    '1.RETIRE a bandeja.\n 2.Com a chave de fenda, RETIRE o suporte do rolete da bandeja e depois o rolete.\n 3.Na parte superior do console da bandeja, PRESSIONE a trava do suporte de roletes e GIRE o conjunto para trás, depois REMOVA os roletes.\n 4.VERIFIQUE se os roletes ainda possuem ranhuras, se sim, LIMPE-OS com o álcool em gel.\n 5.Se os roletes estiverem gastos, FAÇA a substituição do conjunto inteiro.\n 6.MONTE os roletes no equipamento novamente.\n 7.IMPRIMA uma página de testes para verificar a tração dos roletes.'
]

const e0100 = ['ERRO 0100',
    'SIGNIFICADO: É um problema com o dispositivo de memória de backup.',
    'SOLUÇÃO:\n1.Reinicie a impressora.\n2.Certifique-se de que todos os cabos e conexões internas estejam firmes e sem danos.\n3.Atualize o firmware.\n4.Se as etapas anteriores não resolverem o problema, pode ser necessário substituir a placa principal.'
]

const resolucaoProblema = function rP(a) {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('.----------------------------------------------------------------------------.')
        console.log('|                            P R O B L E M A                                 |')
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[0]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log('|                               C A U S A                                    |')
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[1]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log(`|               F E R R A M E N T A S   N E C E S S Á R I A S                |`)
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[2]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log(`|                              S O L U Ç Ã O                                 |`)
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${a[3]}`)
        console.log('====================================================================================================================')
        console.log('|[S] Sair             [V] Voltar|')
        console.log('=================================')
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

const modoManutencao = function mM() {
    while (opcao!='S') {
        console.clear()
        console.log('')
        console.log('.----------------------------------------------------------------------------.')
        console.log('|                            P R O B L E M A                                 |')
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${u000[0]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log('|                               C A U S A                                    |')
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${u000[1]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log(`|               F E R R A M E N T A S   N E C E S S Á R I A S                |`)
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${u000[2]}`)
        console.log('.----------------------------------------------------------------------------.')
        console.log(`|                              S O L U Ç Ã O                                 |`)
        console.log('^----------------------------------------------------------------------------^')
        console.log(` ${u000[3]}`)
        console.log('====================================================================================================================')
        console.log('|[S] Sair             [V] Voltar|')
        console.log('=================================')
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
module.exports = resolucaoProblema