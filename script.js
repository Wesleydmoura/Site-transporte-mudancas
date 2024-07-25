function mostrarSubmenu(submenuId) {
    const submenu = document.getElementById(submenuId);
    if (submenu.style.display === "none") {
      submenu.style.display = "block";
    } else {
      submenu.style.display = "none";
    }
  }
  
  // Adicione event listeners aos links do menu principal para mostrar os submenus
  const menuLinks = document.querySelectorAll(".menu-principal a");
  for (const link of menuLinks) {
    link.addEventListener("click", function() {
      const submenuId = this.dataset.submenu;
      mostrarSubmenu(submenuId);
    });
  }
  document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("nav-menu").classList.toggle("active");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
document.querySelector("form").addEventListener("submit", function(e) {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (!nome || !email || !mensagem) {
      e.preventDefault();
      alert("Por favor, preencha todos os campos.");
  }
});

