document.addEventListener("DOMContentLoaded", function() {
  let allLinks = document.querySelectorAll('a');
  
  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Extract "#" from the href´s
      let sectionIdWithNumeral = link.getAttribute('href')
      let sectionId = sectionIdWithNumeral.replace('#', '');
      
      let section = document.getElementById(sectionId);
      section.classList.add('selected-section');
      section.classList.add('transition-section');
  });
  
  window.addEventListener('scroll', () => {
   let navBar = document.getElementById('navbar');
   let allLinks = document.querySelectorAll('a');
   navBar.classList.toggle("color-nav", window.scrollY > 0);
   
   // Loop through each <a> element and toggle the class
   allLinks.forEach(link => {
     link.classList.toggle("links-nav", window.scrollY > 0);
   });
 })
 setTimeout( () => {
   document.getElementById('nombre-juan').classList.add('loaded');
   document.getElementById('sub-juan').classList.add('loaded');
   document.getElementById('foto-juan').classList.add('foto-con-borde');
   document.getElementById('navbar').classList.add('nav-loaded');
 }, 100); // Ajusta el tiempo según sea necesario
});
});