let specName = ['YEAR','TYPE','MODEL','TOP SPEED','ACELERATION','BREAKING','G-FORCE','TRANSMISSION']

let chevy71capriceD = {
    year: 1971,
    type: 'Chevrolet',
    model: 'Caprice D',
    topSpeed: 317,
    aceleration: 3.4,
    breaking: 19.8,
    gForce: 1.08,
    transmission: 'FRD'
}

let mazda72rx3Re = {
    year: 1972,
    type: 'Mazda',
    model: 'RX-3 RE',
    topSpeed: 310,
    aceleration: 4.03,
    breaking: 17.9,
    gForce: 1.09,
    transmission: 'FRD'
}

let fiat08500 = {
    year: 2008,
    type: 'Fiat',
    model: '500',
    topSpeed: 309,
    aceleration: 4.23,
    breaking: 17.7,
    gForce: 1.12,
    transmission: 'FFD'
}

let srt1 = [chevy71capriceD,mazda72rx3Re,fiat08500]

function createTable() {
    let table = document.createElement('table')
    document.body.appendChild(table)
    let tr = document.createElement("tr")
    table.appendChild(tr)
    for (let el of specName) {
        let th = document.createElement("th")
        th.textContent = el
        tr.appendChild(th)
    }

    for (let el in srt1) {
        let tr2 = document.createElement("tr")
        table.appendChild(tr2)
        for (const key in srt1[el]) {
            let td = document.createElement('td')
            td.textContent = srt1[el][key]
            tr2.appendChild(td)
        }
    }
}

createTable()