var nav_sticky = document.querySelector('nav');

window.addEventListener('scroll', function(){
    var scroll_position = this.window.scrollY;
    if (scroll_position > 0) {
        nav_sticky.classList.add('nav-sticky');       
    } else {
        nav_sticky.classList.remove('nav-sticky');         
    }
})

var nav_item = document.querySelector('.nav-item');
var hamburger_menu = document.querySelector('.hamburger-menu');
var menu_item = document.querySelectorAll('nav ul li a');
var brand_invert = document.querySelectorAll('.brand');

hamburger_menu.addEventListener('click', function(){
    hamburger_menu.classList.toggle('hm-active');
    nav_item.classList.toggle('nav-slide');
})

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
        nav_item.classList.toggle('nav-slide');
        hamburger_menu.classList.toggle('hm-active');
	});
});

