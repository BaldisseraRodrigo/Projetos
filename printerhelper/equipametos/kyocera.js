const { capacidade } = require("./lexmark")

const p2040 = {
    marca:'KYOCERA',
    modelo:'ECOSYS P2040dw',
    ppm:'42',
    papel:'A4 & CARTA',
    capacidade:'250+100 folhas',
    cores:'Monocromática',
    toner:{
        modelo:'TK1175',
        capacidade:'5.000 impressões'
    },
    codigos:['e0100','e0120','e0130'],
    manutencao:['Marcas no papel','Obstrução de Papel','Ruído ao funcionar','Equipamento não liga'],
    configuracoes:['Preparação','Rede','Driver','Printwayy'],
    firmware:['v2.12','2R4_2000.005.512 2023.07.04',],
    valores:{
        preco:3076.22,
        revelador:1556.41,
        cilindro:637.50,
        fusao:1436.60,
        vidaUtil:500000
    }
}

const m2040 = {
    marca:'KYOCERA',
    modelo:'ECOSYS M2040dn',
    ppm:'42',
    papel:'A4 & CARTA',
    capacidade:'250+100 folhas',
    cores:'Monocromática',
    toner:{
        modelo:'TK1175',
        capacidade:'5.000 impressões'
    },
    codigos:['e0100','e0120','e0130'],
    manutencao:['Marcas no papel','Obstrução de Papel','Ruído ao funcionar','Equipamento não liga'],
    configuracoes:['Preparação','Rede','Driver','Scanner','Printwayy'],
    firmware:['v2.12','2R4_2000.005.512 2023.07.04',],
    valores:{
        preco:3076.22,
        revelador:629,
        cilindro:637.50,
        fusao:1436.60,
        vidaUtil:500000
    }
}

const m3040 = {
    marca:'KYOCERA',
    modelo:'ECOSYS M3040idn',
    ppm:'42',
    papel:'A4 & CARTA',
    capacidade:'350+100 folhas',
    cores:'Monocromática',
    toner:{
        modelo:'TK3102',
        capacidade:'5.000 impressões'
    },
    codigos:['e0100','e0120','e0130'],
    manutencao:['Marcas no papel','Obstrução de Papel','Ruído ao funcionar','Equipamento não liga'],
    configuracoes:['Preparação','Rede','Driver','Scanner','Printwayy'],
    firmware:['v2.12','2R4_2000.005.512 2023.07.04',],
    valores:{
        preco:2500,
        revelador:1644.20,
        cilindro:737.50,
        fusao:806.34,
        vidaUtil:500000
    }
}

const ecosys = [p2040,m2040,m3040]
module.exports = ecosys