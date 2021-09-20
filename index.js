// code navbar active media < 1000px

const nav_template = document.querySelector('.nav-template');
const nav_click = document.querySelector('.nav-bar');
const nav_item = document.querySelector('.nav-item');

nav_template.addEventListener('click', function(e){
    if(e.target.className == 'img-nav' || e.target.className == 'nav-bar'){
        nav_item.classList.toggle('nav-active');
        console.log('a')
    }
})



// code navbar active media < 1000px