const toggler = document.querySelector('.nav-toggler')
const sidenav = document.querySelector('.dashboard-nav')
const sidenavItemsWrapper = document.querySelector('.dashboard-nav__list')
const sidenavItems = document.querySelectorAll('.dashboard-nav__item')

const dataContainer = document.querySelector('.data')

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


 function fetchAPi(){
    
    try {
         fetch('https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',{
            method: 'GET',
            uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
            qs: {
                'start': '1',
                'limit': '5000',
                'convert': 'USD'
            },
            // 'X-CMC_PRO_API_KEY':'8672b317-04bb-4ace-8cd3-5181c3df8381',
            headers: {
            // 'Access-Control-Allow-Credentials': '*',
                'Content-Type': 'application/json',
                'X-CMC_PRO_API_KEY': '8672b317-04bb-4ace-8cd3-5181c3df8381',
                
            },
            json: true,
            gzip: true
    }).then(res =>res.json()).then(res=>res)
    
    } catch (error) {
        console.log(error)
    }
}
async function ano(name){
    const data = await fetch(`https://api.github.com/users/${name}`).then(r => r.json());
    return data
}
window.onload = () =>{
    fetchAPi()
    console.log(ano('pemeraldy'))
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then(resp => resp.json())
    // .then(resp => console.log(resp))
}