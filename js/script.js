const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
const links = document.querySelectorAll(".navbar-links");

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

links.forEach(function(link) {
  link.addEventListener("click", function() {
    navbarLinks.classList.remove("active");
  });
});

