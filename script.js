const basculeMenu = document.getElementById('bascule-menu');
const menu = document.getElementById('menu');
const entete = document.querySelector('.entete');
const elementAnnee = document.getElementById('annee');

if (elementAnnee) {
  elementAnnee.textContent = new Date().getFullYear().toString();
}

if (basculeMenu && menu) {
  basculeMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('menu-ouvert');
  });
}

const liensMenu = document.querySelectorAll('.menu a');
liensMenu.forEach(lien => {
  lien.addEventListener('click', () => {
    if (basculeMenu && basculeMenu.classList.contains('active')) {
      basculeMenu.classList.remove('active');
      menu.classList.remove('active');
      document.body.classList.remove('menu-ouvert');
    }
  });
});

window.addEventListener('scroll', function() {
  if (window.scrollY > 50) {
    entete.classList.add('defilement');
  } else {
    entete.classList.remove('defilement');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  function estElementDansVue(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
      rect.bottom >= 0
    );
  }

  function animerAuDefilement() {
    const elementsAnimes = document.querySelectorAll('.fondu-entrant, .fondu-montant, .fondu-droite');
    
    elementsAnimes.forEach(element => {
      if (estElementDansVue(element) && !element.classList.contains('anime')) {
        element.classList.add('anime');
        
        element.style.animation = 'none';
        element.offsetHeight;
        element.style.animation = null;
      }
    });
  }

  animerAuDefilement();
  window.addEventListener('scroll', animerAuDefilement);
  
  const indicateurDefilement = document.querySelector('.indicateur-defilement');
  if (indicateurDefilement) {
    indicateurDefilement.addEventListener('click', function() {
      const sectionApropos = document.querySelector('.section-apropos');
      if (sectionApropos) {
        sectionApropos.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

const videoArrierePlan = document.querySelector('.video-arriere-plan');
if (videoArrierePlan) {
  videoArrierePlan.addEventListener('loadeddata', function() {
    videoArrierePlan.play();
  });
}


function showAlert() {
    alert("Appelez-nous à : ekipajlannion@gmail.com - 07 80 63 18 22");
}