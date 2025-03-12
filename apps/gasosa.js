function gasConta(){   
    const cstStd = 10
    console.log('')
    console.log('----------COMPENSASÃO DE COMBUSTÍVEL----------')
    let prcGas = prompt('Preço da gasolina: R$')
    let cshRcv = prompt('Dinheiro recebido: R$')
    let disTtl = cshRcv * cstStd / prcGas
    let cstCar = prompt('Consumo do carro: ')
    let gasTtl = disTtl / cstCar
    let invTtl = gasTtl * prcGas
    console.log('----------------------------------------------')

    console.log(`O carro rodou ${disTtl.toFixed(2)}km.`)
    console.log(`Consumiu ${gasTtl.toFixed(2)} litros de gasolina.`)
    console.log(`Com um investimento de R$${invTtl.toFixed(2)}.`)

    console.log('----------------------------------------------')
    if (cstStd<cstCar) {
        console.log(`Que bom você está com um LUCRO de R$${(cshRcv-invTtl).toFixed(2)}.`)
    } else if (cstStd>cstCar) {
        console.log(`Vish, você está tendo um PREJUÍZO de R$${(cshRcv-invTtl).toFixed(2)}.`)
    } else {
        console.log(`Não mudou nada, ficou ELAS por ELAS.`)
    }
    console.log('----------------------------------------------')
    console.log('')
}