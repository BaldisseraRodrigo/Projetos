const p311 = {
    marca:'RICOH',
    modelo:'P311',
    ppm:'42',
    papel:'A4 & CARTA',
    capacidade:'250+100 folhas',
    cores:'Monocromática',
    codigos:['SP536'],
    manutencao:['Marcas no papel','Obstrução de Papel','Ruído ao funcionar','Equipamento não liga'],
    configuracoes:['Preparação','Rede','Driver','Printwayy'],
    firmware:'v2.12',
    valores:{
        preco:3076.22,
        revelador:1556.41,
        cilindro:637.50,
        fusao:1436.60,
        vidaUtil:500000
    }
}

const m320 = {
    marca:'RICOH',
    modelo:'M320F',
    ppm:'42',
    papel:'A4 & CARTA',
    capacidade:'250+100 folhas',
    cores:'Monocromática',
    codigos:['SF536'],
    manutencao:['Marcas no papel','Obstrução de Papel','Ruído ao funcionar','Equipamento não liga'],
    configuracoes:['Preparação','Rede','Driver','Scanner','Printwayy'],
    firmware:'v2.12',
    valores:{
        preco:3076.22,
        revelador:629,
        cilindro:637.50,
        fusao:1436.60,
        vidaUtil:500000
    }
}

const ricoh = [p311,m320]
module.exports = ricoh