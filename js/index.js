const toggler = document.querySelector('.nav-toggler')
const sidenav = document.querySelector('.dashboard-nav')
const fetchDataBtn = document.querySelector('.primary-btn')
const sidenavItemsWrapper = document.querySelector('.dashboard-nav__list')
const sidenavItems = document.querySelectorAll('.dashboard-nav__item')

let dataContainer = document.querySelector('.data-container')

// Toggle active class on click
sidenavItemsWrapper.addEventListener('click', (e)=>{
    sidenav.classList.toggle('active')
        toggler.classList.toggle('active')
    if(e.target.tagName === 'SPAN'){
        sidenavItems.forEach(item=>{
            item.classList.remove('active')
        })
        e.target.parentNode.parentNode.classList.add('active')
    }
    if(e.target.tagName === 'LI'){
        console.log(e.target.tagName)
        sidenavItems.forEach(item=>{
            item.classList.remove('active')
        })
        e.target.classList.add('active')
    }
    if(e.target.tagName === 'A'){
        console.log(e.target.tagName)
        sidenavItems.forEach(item=>{
            item.classList.remove('active')
        })
        e.target.parentNode.classList.add('active')
    }
})

// naviagtion toggler 
toggler.addEventListener('click', ()=>{
    toggler.classList.toggle('active')
    sidenav.classList.toggle('active')
})


// Fetch Data on Click
fetchDataBtn.addEventListener('click', fetchAPi)

function isLessThanZero(value){
    // let comparison = 1;
    return Math.sign(value) !== 1 ? 'red':Math.sign(value) == 1 ? 'green': ''
}

// function changeToLocalNumbers()

 function fetchAPi(){
    let tableBody = document.querySelector('.table-body')
    const loader = document.querySelector('.loader')
    try {
        loader.style.zIndex = 2
         fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
            method: 'GET',
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD'
            },            
            headers: {
            
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': '8672b317-04bb-4ace-8cd3-5181c3df8381',                
            },
            json: true,
            gzip: true
    }).then(res =>res.json()).then(data=>data).then(res=>{        
        loader.style.zIndex = -1
        
        res.data.forEach((d, index)=>{
            let price = Number(d.quote.USD.price.toFixed(2))
            let marketCap = Number(d.quote.USD.market_cap.toFixed(2))
            let circSupply = Number(d.circulating_supply.toFixed(1))
            circSupply = (circSupply).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })
            marketCap = (marketCap).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })
            price = (price).toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })
            tableBody.innerHTML += `<tr class="coins-list">
            <td class="coin-id">${index +1}</td>
            <td class="name">
              <span class="coin-image__wrap"><img class="coin-img" src="https://s2.coinmarketcap.com/static/img/coins/64x64/${d.id}.png" alt=""></span>
               ${d.name}
            </td>
              <td>${d.symbol}</td>
            <td class="price"> ${price}</td>
            <td class="${isLessThanZero(d.quote.USD.percent_change_1h)}">${d.quote.USD.percent_change_1h.toFixed(3)} BTC</td>
            <td class="${isLessThanZero(d.quote.USD.percent_change_24h)}">${d.quote.USD.percent_change_24h.toFixed(3)}</td>
            <td class="price">${marketCap}</td>
            <td class="price">${circSupply}</td>
          </tr>`
            dataContainer.classList.add('data-ready')
        })
        // dataContainer.innerHTML = res.data[0].slug
        console.log(res);
    })
    
    } catch (error) {
        document.querySelector('.loader-feedback').innerContent = "Please Refresh The Browser, Network Issues"
        console.log(error)
    }
}

window.onload = () =>{
    // fetchAPi()
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(resp => resp.json())
    // .then(resp => console.log(resp))
}