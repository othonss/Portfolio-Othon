const btnMobile = document.getElementById('btnMobile');

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('navPrincipal');
    const cabecalho = document.getElementById('cabecalho');
    const principal = document.getElementById('principal')
    nav.classList.toggle('active');
    cabecalho.classList.toggle('active');
    principal.classList.toggle('active');
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    }else{
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);