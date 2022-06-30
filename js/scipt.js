


var hamburger_menu = document.querySelector('.hamburger-menu');
var nav_items = document.querySelector('.nav-items');
var items = document.querySelectorAll('.nav-items a');

hamburger_menu.addEventListener('click', function(){
    hamburger_menu.classList.toggle('hamburger-menu-action');
    nav_items.classList.toggle('nav-items-slide');
})



items.forEach((item) => {
	item.addEventListener('click', () => {
        hamburger_menu.classList.toggle('hamburger-menu-action');
        nav_items.classList.toggle('nav-items-slide');
	});
});




// Navbar Sticky

var nav = document.querySelector('nav');

window.addEventListener('scroll', function(){
    var scroll_position = window.scrollY;
    if (scroll_position > 20 ) {
        nav.classList.add('nav-sticky');
        
    } else {
        nav.classList.remove('nav-sticky');
        
    }
})


