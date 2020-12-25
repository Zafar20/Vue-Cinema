let burger = document.querySelector('.header__nav-burger'),
    list = document.querySelector('.header__nav-menu');
    
    
    
burger.addEventListener('click', () => {
    list.classList.toggle('active');
    
})

