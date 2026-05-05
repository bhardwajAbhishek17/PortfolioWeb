document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector("#menu-icon");
  const navbar = document.querySelector(".navbar");

  // Initialize Typed ONCE
  const typed = new Typed(".multiple-text", {
    strings: [
      "Java Fullstack Developer",
      "Frontend Developer.",
      "Backend Developer.",
    ],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
  });

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Toggle icon
    if (navbar.classList.contains("active")) {
      menuIcon.classList.replace("fa-bars", "fa-xmark");
    } else {
      menuIcon.classList.replace("fa-xmark", "fa-bars");
    }
  });
});
