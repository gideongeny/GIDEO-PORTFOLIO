document.addEventListener("DOMContentLoaded", function() {
  // === Mobile Navigation ===
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  
  navToggle.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    if (window.innerWidth <= 900 && navLinks.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  });
  
  // === Smooth Scrolling ===
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth"
        });
      }
    });
  });
  
  // === Dark Mode Toggle ===
  const darkModeToggle = document.createElement("button");
  darkModeToggle.className = "dark-toggle btn";
  darkModeToggle.style.position = "fixed";
  darkModeToggle.style.bottom = "20px";
  darkModeToggle.style.right = "20px";
  darkModeToggle.style.zIndex = "1000";
  darkModeToggle.style.width = "50px";
  darkModeToggle.style.height = "50px";
  darkModeToggle.style.borderRadius = "50%";
  darkModeToggle.style.display = "flex";
  darkModeToggle.style.alignItems = "center";
  darkModeToggle.style.justifyContent = "center";
  darkModeToggle.setAttribute("aria-label", "Toggle dark mode");
  document.body.appendChild(darkModeToggle);
  
  const setTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add("dark-mode");
      darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    }
  };
  
  // Check for saved theme preference or use system preference
  const currentTheme = localStorage.getItem("theme") || 
                      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(currentTheme === "dark");
  
  // Toggle theme on button click
  darkModeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark-mode");
    setTheme(isDark);
  });
  
  // === Profile Image Animation ===
  const profileImage = document.querySelector('.profile-image-container');
  if (profileImage) {
    profileImage.addEventListener('mouseenter', () => {
      profileImage.style.transform = 'scale(1.05)';
    });
    
    profileImage.addEventListener('mouseleave', () => {
      profileImage.style.transform = 'scale(1)';
    });
  }
  
  // === Project Image Lazy Loading ===
  const lazyLoadImages = (targets) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          
          if (src) {
            img.setAttribute('src', src);
            img.removeAttribute('data-src');
          }
          
          observer.disconnect();
        }
      });
    }, { rootMargin: '200px 0px' });
    
    targets.forEach(img => {
      io.observe(img);
    });
  };
  
  const projectImages = document.querySelectorAll('.project-image img[data-src]');
  if (projectImages.length > 0) {
    lazyLoadImages(projectImages);
  }
  
  // === Project Link Handling ===
  document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // In a real implementation, this would navigate to project pages
      alert('This would link to the full project details in a complete implementation');
    });
  });
  
  // === Scroll Reveal Animation ===
  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll("section").forEach(section => {
    section.classList.add("reveal");
    animateOnScroll.observe(section);
  });
  
  // === Form Validation ===
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault();
      
      let isValid = true;
      const inputs = this.querySelectorAll("input, textarea");
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.style.borderColor = "#ff0000";
          isValid = false;
        } else {
          input.style.borderColor = "";
        }
      });
      
      if (isValid) {
        // In a real implementation, you would send the form data to a server here
        alert("Thank you for your message! I'll get back to you soon.");
        this.reset();
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }
  
  // === CV Download ===
  document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener("click", function(e) {
      if (!this.getAttribute("href")) {
        e.preventDefault();
        alert("CV download link not configured yet.");
      }
    });
  });

  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Load theme from localStorage
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      }
    });
    // Set correct icon on load
    if (body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  // Animate Skill Bars on Scroll
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar .progress');
    skillBars.forEach(bar => {
      const rect = bar.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        bar.style.transition = 'width 1.2s cubic-bezier(.4,2,.6,1)';
        bar.style.width = bar.getAttribute('style').match(/width: (\d+%)/)[1];
      }
    });
  }
  window.addEventListener('scroll', animateSkillBars);
  window.addEventListener('DOMContentLoaded', animateSkillBars);

  // Hide navToggle (hamburger) on desktop
  function handleNavToggleDisplay() {
    if (window.innerWidth > 900) {
      navToggle.style.display = "none";
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      navToggle.style.display = "block";
    }
  }
  window.addEventListener("resize", handleNavToggleDisplay);
  handleNavToggleDisplay();
});