document.addEventListener("DOMContentLoaded", function() {
  // Agregar clases después de que la página se haya cargado completamente
    setTimeout(function() {
      document.getElementById('nombre-juan').classList.add('loaded');
      document.getElementById('sub-juan').classList.add('loaded');
      document.getElementById('foto-juan').classList.add('foto-con-borde');
      document.getElementById('navbar').classList.add('nav-loaded');
    }, 100); // Ajusta el tiempo según sea necesario
});
