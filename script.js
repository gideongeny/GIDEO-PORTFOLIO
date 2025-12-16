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
      updateGitHubStatsTheme(true);
    } else {
      document.body.classList.remove("dark-mode");
      darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
      updateGitHubStatsTheme(false);
    }
  };
  
  // Check for saved theme preference or use system preference
  const currentTheme = localStorage.getItem("theme") || 
                      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const isDarkMode = currentTheme === "dark";
  setTheme(isDarkMode);
  
  // Update GitHub stats theme on page load
  setTimeout(() => updateGitHubStatsTheme(isDarkMode), 500);
  
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
      const isDark = body.classList.contains('dark-mode');
      if (isDark) {
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        updateGitHubStatsTheme(true);
      } else {
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        updateGitHubStatsTheme(false);
      }
    });
    // Set correct icon on load
    if (body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      updateGitHubStatsTheme(true);
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      updateGitHubStatsTheme(false);
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

  // === GitHub Stats Theme Support ===
  function updateGitHubStatsTheme(isDark) {
    const theme = isDark ? 'dark' : 'default';
    const username = 'gideongeny';
    
    const topLangsImg = document.getElementById('github-top-langs');
    const statsImg = document.getElementById('github-stats');
    const streakImg = document.getElementById('github-streak');
    
    if (topLangsImg) {
      topLangsImg.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true`;
    }
    if (statsImg) {
      statsImg.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&include_all_commits=true`;
    }
    if (streakImg) {
      streakImg.src = `https://github-readme-streak-stats.demolab.com/?user=${username}&theme=${theme}&hide_border=true`;
    }
  }

  // === GitHub API Integration ===
  async function fetchGitHubRepositories() {
    const username = 'gideongeny';
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Failed to fetch repositories');
      
      const repos = await response.json();
      
      // Filter out the portfolio repo itself and forks, then get top repos
      const filteredRepos = repos
        .filter(repo => !repo.fork && repo.name !== 'GIDEO-PORTFOLIO')
        .slice(0, 12); // Get top 12 repositories
      
      displayGitHubRepositories(filteredRepos);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      document.getElementById('github-repos-loading')?.remove();
    }
  }

  function getLanguageIcon(language) {
    const icons = {
      'JavaScript': 'fab fa-js',
      'TypeScript': 'fab fa-js-square',
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'Python': 'fab fa-python',
      'Java': 'fab fa-java',
      'Kotlin': 'fab fa-android',
      'PHP': 'fab fa-php',
      'Go': 'fab fa-golang',
      'Swift': 'fab fa-swift',
      'Ruby': 'fab fa-ruby',
      'C++': 'fas fa-code',
      'C#': 'fab fa-windows',
      'Vue': 'fab fa-vuejs',
      'React': 'fab fa-react',
      'Angular': 'fab fa-angular',
      'Node.js': 'fab fa-node-js',
      'Dart': 'fab fa-google',
      'Rust': 'fab fa-rust',
      'Shell': 'fas fa-terminal'
    };
    return icons[language] || 'fas fa-code';
  }

  function displayGitHubRepositories(repos) {
    const container = document.getElementById('github-repos-container');
    const loading = document.getElementById('github-repos-loading');
    
    if (!container) return;
    
    if (loading) loading.remove();
    
    if (repos.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text);">No repositories found.</p>';
      return;
    }
    
    container.innerHTML = repos.map(repo => {
      const language = repo.language || 'Other';
      const icon = getLanguageIcon(language);
      const description = repo.description || 'No description available.';
      const updatedDate = new Date(repo.updated_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
      
      return `
        <div class="project-card github-repo-card">
          <div class="project-content">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
              <h3><a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" style="color: var(--primary); text-decoration: none;">${repo.name}</a></h3>
              ${repo.stargazers_count > 0 ? `<span style="color: var(--secondary);"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>` : ''}
            </div>
            <p style="color: var(--text); margin-bottom: 1rem; min-height: 48px;">${description}</p>
            <div class="project-tech">
              ${language ? `<span><i class="${icon}"></i> ${language}</span>` : ''}
              ${repo.stargazers_count > 0 ? `<span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>` : ''}
              ${repo.forks_count > 0 ? `<span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>` : ''}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; font-size: 0.85rem; color: var(--text); opacity: 0.7;">
              <span><i class="far fa-calendar"></i> Updated ${updatedDate}</span>
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="project-link" style="margin-top: 0;">
                View <i class="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Fetch GitHub repositories when the projects section is visible
  const projectsSection = document.getElementById('projects');
  if (projectsSection) {
    const projectsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          fetchGitHubRepositories();
          projectsObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    projectsObserver.observe(projectsSection);
  }
});