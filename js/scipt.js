


var nav_items = document.querySelector('.nav_items');
var hamburger_menu = document.querySelector('.hamburger_menu');
var items = document.querySelectorAll('.nav_items a');


hamburger_menu.addEventListener('click', function(){
    hamburger_menu.classList.toggle('hamburger_menu_action');
    nav_items.classList.toggle('nav_items_slide');
});

items.forEach((item) => {
	item.addEventListener('click', () => {
        hamburger_menu.classList.toggle('hamburger_menu_action');
        nav_items.classList.toggle('nav_items_slide');
	});
});

// Navbar Sticky

var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    var scroll_position = this.window.scrollY;
    if (scroll_position > 4) {
        nav.classList.add('nav_sticky');
        
    } else {
        nav.classList.remove('nav_sticky');   
    } 
});



