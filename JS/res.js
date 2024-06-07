navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.right-nav')
navbar =  document.querySelector('.navbar')
burger =  document.querySelector('.burger')

burger.addEventListener('click',()=>{
    navList.classList.toggle('nav-v-opacity')
    rightNav.classList.toggle('nav-v-opacity')
    navbar.classList.toggle('nav-h')
})