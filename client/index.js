document.addEventListener("DOMContentLoaded", function() {
  let allLinks = document.querySelectorAll('.link-nav');
  let sectionClicked;

  allLinks.forEach(link => {
    link.addEventListener('click', () => {
      if(sectionClicked){
        sectionClicked.classList.remove('selected-section')
        sectionClicked.classList.remove('transition-section')
      }
      // Extract "#" from the href´s
      let sectionIdWithNumeral = link.getAttribute('href')
      let sectionId = sectionIdWithNumeral.replace('#', '');
      
      sectionClicked = document.getElementById(sectionId);
      sectionClicked.classList.add('selected-section');
      sectionClicked.classList.add('transition-section');
    });
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