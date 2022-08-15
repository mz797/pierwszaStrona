document.addEventListener('DOMContentLoaded',function(){

    const nav = document.querySelector('.navbar')
    const allNavLink = document.querySelectorAll('.nav-link')
    const navCollapse = document.querySelector('.navbar-collapse')
    //
    function removeShow(){
        navCollapse.classList.remove('show')
    }
    
    function addShadow(){
        if(window.scrollY>=100){
            nav.classList.add('shadow-bg')
        }
        else{
            nav.classList.remove('shadow-bg')
        }
    }

    const navColapse = document.querySelector('.collapse.navbar-collapse')
    
    if(navColapse.classList.contains('show')){
        nav.classList.add('shadow-bg')
    }
    else{
        nav.classList.remove('shadow-bg')
    }

    allNavLink.forEach(element => {
        element.addEventListener('click',removeShow)
    });
    
    window.addEventListener('scroll',addShadow)

})


// navLink.addEventListener('click',removeShow)