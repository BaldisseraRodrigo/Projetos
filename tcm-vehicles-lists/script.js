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
    let main = document.getElementById('main')
    let table = document.createElement('table')
    main.appendChild(table)
    let tr = document.createElement("tr")
    table.appendChild(tr)
    for (let el of specName) {
        let th = document.createElement('th')
        th.textContent = el
        tr.appendChild(th)
    }
    
    let tr2 = document.createElement("tr")
    table.appendChild(tr2)
    for (const el in chevy71capriceD) {
        let td = document.createElement('td')
        td.textContent = chevy71capriceD[el]
        tr2.appendChild(td)
    }

    let tr3 = document.createElement("tr")
    table.appendChild(tr3)
    for (const el in mazda72rx3Re) {
        let td = document.createElement('td')
        td.textContent = mazda72rx3Re[el]
        tr3.appendChild(td)
    }

    let tr4 = document.createElement("tr")
    table.appendChild(tr4)

    for (const el in fiat08500) {
        let td = document.createElement('td')
        td.textContent = fiat08500[el]
        tr4.appendChild(td)
    }
}

createTable()