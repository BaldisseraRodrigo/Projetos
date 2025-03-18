const p2040 = {
    marca:'KYOCERA',
    modelo:'ECOSYS P2040dw',
    ppm:'42',
    papel:'A4 & CARTA',
    capacidade:'250+100 folhas',
    cores:'Monocromática',
    codigos:['e0100','e0120','e0130'],
    manutencao:['Marcas no papel','Obstrução de Papel','Ruído ao funcionar','Equipamento não liga'],
    configuracoes:['Preparação','Rede','Driver','Scanner','Printwayy'],
    firmware:['v2.12','2R4_2000.005.512 2023.07.04',]
}
console.log('-----------------------------------------------------------------')
console.log('|     MODELO     |     VERSÃO     |         STATUS PAGE         |')
console.log('-----------------------------------------------------------------')
console.log(`| ${p2040.modelo} | ${p2040.firmware[0]}          | ${p2040.firmware[1]} |`)
console.log('-----------------------------------------------------------------')