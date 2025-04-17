// Fade In on Load
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
      document.body.style.transition = "opacity 1.2s ease-in-out";
      document.body.style.opacity = 1;
    }, 100);
  
    // Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
  });
  
  // Scroll to Top
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  
  window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  };
  
  scrollTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Dark/Light Mode Toggle
  document.getElementById("modeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
  