// scroll menu
var nav = document.getElementById('nav');
var menu = document.getElementById('enlaces');
var logo = document.getElementById('logo');
function menus(){
    var desplazamiento = window.pageYOffset;
    if(desplazamiento <= 200){
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s';
        menu.style.top = '80px';
        abrir.style.color = '#fff';
        logo.style.color = '#fff';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color = '#db9000';
        logo.style.color = '#db9000';
    }
}
window.addEventListener('load', function(){  
    $('#onload').fadeOut();
    $('body').removeClass('hidden');
    menus();
});
window.addEventListener('click', function(e){  
    if(cerrado == false){
        var span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});
window.addEventListener('scroll', function() {
    menus();
});
// end scroll menu

// botón menú
var abrir = document.getElementById('open');
var botones = document.getElementsByClassName('btn-header');
var cerrado = true;

function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    }else{
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}
window.addEventListener('resize', function(){  
    if(screen.width >= 700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});
abrir.addEventListener('click', function(){
    apertura();
});
// end botón menú
