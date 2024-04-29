document.addEventListener("DOMContentLoaded", function() {
     // Smooth scrolling when clicking on links with class "scroll-link"
     $('.scroll-link').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        var hash = this.hash;

        // Animate scroll to target
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }
    });
    
    window.addEventListener('scroll', () => {
      let navBar = document.getElementById('navbar');
      let allLinks = document.querySelectorAll('a');
      navBar.classList.toggle("color-nav", window.scrollY > 0)
      
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
