const toggler = document.querySelector('.nav-toggler')
const sidenav = document.querySelector('.dashboard-nav')
const sidenavItemsWrapper = document.querySelector('.dashboard-nav__list')
const sidenavItems = document.querySelectorAll('.dashboard-nav__item')

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