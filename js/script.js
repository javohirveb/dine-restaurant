window.addEventListener('load', function () {
   // page loader
   document.querySelector('.page-loader').classList.add('fade-out')
   setTimeout(() => {
      this.document.querySelector('.page-loader').style.display = 'none'
   }, 600);
   // animation on scroll
   AOS.init()

})

// toggle navbar 
const navToggler = document.querySelector('.nav-toggler')
navToggler.addEventListener('click', toggleNav)

function toggleNav() {
   navToggler.classList.toggle('active')
   document.querySelector('.nav').classList.toggle('open')
}

// close nav when clicking on a nav item 
document.addEventListener('click', function (e) {
   if (e.target.closest('.nav-item')) {
      toggleNav()
   }
})

// sticky header 
window.addEventListener('scroll', function () {
   if (this.pageYOffset > 60) {
      this.document.querySelector('.header').classList.add('sticky')
   } else {
      this.document.querySelector('.header').classList.remove('sticky')
   }
})

// menu tabs 
const menuTabs = document.querySelector('.menu-tabs')
menuTabs.addEventListener('click', function (e) {
   if (e.target.classList.contains('menu-tab-item') && !e.target.classList.contains('active')) {
      const target = e.target.getAttribute('data-target')
      menuTabs.querySelector('.active').classList.remove('active')
      e.target.classList.add('active')
      const menuSection = document.querySelector('.menu-section')
      menuSection.querySelector('.menu-tab-content.active').classList.remove('active')
      menuSection.querySelector(target).classList.add('active')
      // animation on scroll
      AOS.init()
   }
})