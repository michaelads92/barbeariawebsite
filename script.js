
/* efeito menu responsivo*/
const btnAnimar = document.getElementById('btnmenu')
const menuDiv = document.getElementById('menu-mobile')

menuDiv.addEventListener('click', animarMenu)

function animarMenu(){
      menuDiv.classList.toggle('abrir')
      btnAnimar.classList.toggle('ativar')
};
window.sr = ScrollReveal({ reset: true });
sr.reveal('.efeito', {
      duration: 1000,
      distance: '90px'
});
sr.reveal('.barba', {
      duration: 1000,
      distance: '90px',
      origin: 'left'
});
sr.reveal('.cabelo', {
      duration: 1000,
      distance: '90px',
      origin: 'left'
});
sr.reveal('.cera', {
      duration: 1000,
      distance: '90px',
      origin: 'left'
});
sr.reveal('.visagismo', {
      duration: 1000,
      distance: '90px',
      origin: 'left'
});
sr.reveal('.oqvisagismo', {
      duration: 1000,
      distance: '90px',
      origin: 'left',
});
sr.reveal('.sobre', {
      duration: 1000,
      distance: '90px',
      origin: 'left'
      
});
