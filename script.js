const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// Otimização das imagens dos projetos
document.querySelectorAll(".project-image img").forEach((image) => {
    image.loading = "lazy";
    image.decoding = "async";
});
