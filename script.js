document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const menuIcon = document.querySelector(".menu-icon")
    const navLinks = document.querySelector(".nav-links")
  
    if (menuIcon) {
      menuIcon.addEventListener("click", () => {
        navLinks.classList.toggle("active")
      })
    }
  
    // Close menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest("nav") && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active")
      }
    })
  
    // Contact Form Submission
    const contactForm = document.getElementById("contactForm")
    const formSuccess = document.getElementById("formSuccess")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
        event.preventDefault()
  
        // Simulate form submission
        setTimeout(() => {
          contactForm.style.display = "none"
          formSuccess.style.display = "block"
  
          // Reset form after 5 seconds
          setTimeout(() => {
            contactForm.reset()
            contactForm.style.display = "block"
            formSuccess.style.display = "none"
          }, 5000)
        }, 1000)
      })
    }
  
    // Generate placeholder images
    const logoImg = document.getElementById("logo-img")
    if (logoImg) {
      logoImg.src = generatePlaceholderSVG(60, 60, "2e7d32", "LOGO")
    }
  
    // Replace all placeholder.svg images with generated SVGs
    const placeholderImages = document.querySelectorAll('img[src="placeholder.svg"]')
    placeholderImages.forEach((img) => {
      const width = img.width || 300
      const height = img.height || 200
      img.src = generatePlaceholderSVG(width, height, "2e7d32", "IMAGE")
    })
  
    // Function to generate placeholder SVG
    function generatePlaceholderSVG(width, height, color, text) {
      return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'%3E%3Crect width='${width}' height='${height}' fill='%23${color}' fill-opacity='0.2'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-size='${Math.min(width, height) / 10}px' fill='%23${color}'%3E${text}%3C/text%3E%3C/svg%3E`
    }
  })
  