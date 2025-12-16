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
      if (!targetId || targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight || 70;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    });
  });
  
  // === GitHub Stats Theme Update ===
  window.updateGitHubStatsTheme = function(isDark) {
    const theme = isDark ? 'dark' : 'default';
    const username = 'gideongeny';
    
    const statsImg = document.getElementById('github-stats-img');
    const langsImg = document.getElementById('github-langs-img');
    
    if (statsImg) {
      statsImg.src = `https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=${theme}&hide_border=true&include_all_commits=true&count_private=true`;
    }
    if (langsImg) {
      langsImg.src = `https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=${theme}&hide_border=true&langs_count=8`;
    }
  };
  
  // === Dark Mode Toggle ===
  // Use the existing theme-toggle button from navbar
  const themeToggle = document.getElementById('theme-toggle');
  
  const setTheme = (isDark) => {
    console.log('Setting theme:', isDark ? 'dark' : 'light');
    if (isDark) {
      document.body.classList.add("dark-mode");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem("theme", "light");
    }
    // Update GitHub stats theme
    if (typeof updateGitHubStatsTheme === 'function') {
      updateGitHubStatsTheme(isDark);
    }
  };
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const currentTheme = savedTheme || (systemPrefersDark ? "dark" : "light");
  setTheme(currentTheme === "dark");
  
  // Toggle theme on button click
  if (themeToggle) {
    console.log('Dark mode toggle button found, adding event listener');
    themeToggle.addEventListener("click", function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Theme toggle clicked');
      const isDark = !document.body.classList.contains("dark-mode");
      setTheme(isDark);
      return false;
    });
  } else {
    console.error('Theme toggle button not found!');
  }
  
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

  // Dark mode toggle is handled above (removed duplicate code)

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

  // GitHub stats theme is handled above

  // === Profile Image Carousel ===
  let currentSlide = 0;
  const profileImages = document.querySelectorAll('.profile-image.main-profile');
  const indicators = document.querySelectorAll('.carousel-indicators .indicator');
  const totalSlides = profileImages.length;

  function showSlide(index) {
    profileImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
    indicators.forEach((ind, i) => {
      ind.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Auto-advance carousel every 4 seconds
  if (profileImages.length > 1) {
    setInterval(nextSlide, 4000);
  }

  // Allow manual navigation via indicators
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });

  // === Hero Background Carousel ===
  let currentBgSlide = 0;
  const bgSlides = document.querySelectorAll('.hero-bg-slide');
  const totalBgSlides = bgSlides.length;

  function showBgSlide(index) {
    bgSlides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextBgSlide() {
    currentBgSlide = (currentBgSlide + 1) % totalBgSlides;
    showBgSlide(currentBgSlide);
  }

  // Auto-advance background carousel every 5 seconds
  if (bgSlides.length > 1) {
    setInterval(nextBgSlide, 5000);
  }

  // === GitHub API Integration ===
  async function fetchGitHubRepositories() {
    const username = 'gideongeny';
    let allRepos = [];
    let page = 1;
    const perPage = 100;
    const maxPages = 20; // Increased limit for users with many repos
    
    const loading = document.getElementById('github-repos-loading');
    if (loading) {
      loading.innerHTML = `
        <div style="text-align: center; padding: 2rem; color: var(--text);">
          <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
          <p>Loading repositories from GitHub... (Page ${page})</p>
        </div>
      `;
    }
    
    try {
      console.log('Fetching GitHub repositories for user:', username);
      
      // Fetch all pages of repositories
      while (page <= maxPages) {
        console.log(`Fetching page ${page}...`);
        const apiUrl = `https://api.github.com/users/${username}/repos?sort=updated&per_page=${perPage}&page=${page}&type=all`;
        
        let response;
        try {
          response = await fetch(apiUrl);
        } catch (fetchError) {
          console.error('Network error:', fetchError);
          throw new Error(`Network error: ${fetchError.message}`);
        }
        
        if (!response.ok) {
          const errorText = await response.text();
          console.error('API Error:', response.status, errorText);
          throw new Error(`Failed to fetch repositories: ${response.status} ${response.statusText}`);
        }
        
        const repos = await response.json();
        console.log(`Page ${page}: Received ${repos.length} repositories`);
        
        if (repos.length === 0) {
          console.log('No more repositories found');
          break; // No more repositories
        }
        
        allRepos = allRepos.concat(repos);
        
        // Update loading message
        if (loading) {
          loading.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text);">
              <i class="fas fa-spinner fa-spin" style="font-size: 2rem; margin-bottom: 1rem;"></i>
              <p>Loading repositories... (Found ${allRepos.length} so far${page < maxPages ? `, checking page ${page + 1}...` : ''})</p>
            </div>
          `;
        }
        
        // Display repos as we fetch them (show first page immediately, then update as more come)
        if (allRepos.length > 0) {
          const filteredSoFar = allRepos.filter(repo => repo.name !== 'GIDEO-PORTFOLIO');
          filteredSoFar.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
          displayGitHubRepositories(filteredSoFar);
        }
        
        // If we got fewer than perPage, we've reached the end
        if (repos.length < perPage) {
          console.log('Reached last page');
          break;
        }
        
        page++;
        
        // Small delay to avoid rate limiting (only if not on last page)
        if (page <= maxPages && repos.length >= perPage) {
          await new Promise(resolve => setTimeout(resolve, 100));
        }
      }
      
      console.log(`Total repositories fetched: ${allRepos.length}`);
      
      // Filter out ONLY the portfolio repo itself (show forks and all repos)
      const filteredRepos = allRepos.filter(repo => repo.name !== 'GIDEO-PORTFOLIO');
      
      console.log(`After filtering: ${filteredRepos.length} repositories to display`);
      
      // Sort by updated date (most recent first)
      filteredRepos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      
      if (filteredRepos.length === 0) {
        throw new Error('No repositories found');
      }
      
      displayGitHubRepositories(filteredRepos);
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      if (loading) {
        loading.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: var(--text);">
            <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: var(--secondary);"></i>
            <p>Error loading repositories. Please check the console for details.</p>
            <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">${error.message}</p>
            <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer;">Retry</button>
          </div>
        `;
      }
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

  function getRepositoryHomepage(repo) {
    // Return homepage if it exists, otherwise try GitHub Pages
    if (repo.homepage && repo.homepage.startsWith('http')) {
      return repo.homepage;
    }
    
    // Check if GitHub Pages might be enabled (common patterns)
    const repoName = repo.name;
    const username = 'gideongeny';
    const ghPagesUrl = `https://${username}.github.io/${repoName}/`;
    
    // Return GitHub Pages URL as potential homepage
    return ghPagesUrl;
  }

  function getGradientFromString(str) {
    // Generate a consistent gradient color based on repository name
    const colors = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)'
    ];
    
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  function displayGitHubRepositories(repos) {
    const container = document.getElementById('github-repos-container');
    const loading = document.getElementById('github-repos-loading');
    
    if (!container) return;
    
    if (loading) loading.remove();
    
    if (repos.length === 0) {
      container.innerHTML = '<p style="text-align: center; color: var(--text); padding: 2rem;">No repositories found.</p>';
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
      
      const homepageUrl = getRepositoryHomepage(repo);
      const gradient = getGradientFromString(repo.name);
      
      return `
        <div class="project-card github-repo-card">
          <div class="repo-image-container" style="background: ${gradient};">
            <div class="repo-placeholder"><i class="fas fa-code"></i></div>
          </div>
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
            <div class="repo-links">
              <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="repo-link-btn">
                <i class="fab fa-github"></i> Code
              </a>
              ${homepageUrl ? `
                <a href="${homepageUrl}" target="_blank" rel="noopener noreferrer" class="repo-link-btn secondary">
                  <i class="fas fa-globe"></i> Live Demo
                </a>
              ` : ''}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem; font-size: 0.85rem; color: var(--text); opacity: 0.7;">
              <span><i class="far fa-calendar"></i> Updated ${updatedDate}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // Fetch GitHub repositories immediately on page load
  console.log('Page loaded, starting to fetch GitHub repositories...');
  // Use setTimeout to ensure DOM is fully ready
  setTimeout(() => {
    try {
      fetchGitHubRepositories().catch(error => {
        console.error('Failed to fetch repositories:', error);
        const loading = document.getElementById('github-repos-loading');
        if (loading) {
          loading.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text);">
              <i class="fas fa-exclamation-triangle" style="font-size: 2rem; margin-bottom: 1rem; color: var(--secondary);"></i>
              <p>Error loading repositories. Please check console for details.</p>
              <p style="font-size: 0.9rem; opacity: 0.7; margin-top: 0.5rem;">${error.message || 'Unknown error'}</p>
              <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1rem; background: var(--primary); color: white; border: none; border-radius: 6px; cursor: pointer;">Retry</button>
            </div>
          `;
        }
      });
    } catch (error) {
      console.error('Error calling fetchGitHubRepositories:', error);
    }
  }, 100);

  // === Resume Download Handling ===
  window.downloadResume = function(e) {
    e.preventDefault();
    const resumeUrl = 'resume.pdf';
    
    fetch(resumeUrl, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          const link = document.createElement('a');
          link.href = resumeUrl;
          link.download = 'Gideon_Ngeno_Resume.pdf';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          alert('Resume file not found. Please contact me at gideongeng@gmail.com for my resume.');
        }
      })
      .catch(() => {
        alert('Resume file not found. Please contact me at gideongeng@gmail.com for my resume.');
      });
  };

  // === Multi-language Support ===
  let currentLanguage = localStorage.getItem('language') || 'en';
  const langToggle = document.getElementById('lang-toggle');
  const languages = ['en', 'es', 'sw']; // English, Spanish, Swahili

  function updateLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Wait for translations to be loaded
    if (typeof translations === 'undefined') {
      console.warn('Translations not loaded yet, waiting...');
      // Retry after a short delay
      setTimeout(() => updateLanguage(lang), 100);
      return;
    }

    const t = translations[lang];
    if (!t) {
      console.error(`Translations not found for language: ${lang}`);
      return;
    }

    // Update navigation links (skip the language toggle button)
    const navLinks = document.querySelectorAll('nav .nav-links a');
    const keys = ['about', 'skills', 'projects', 'testimonials', 'blog', 'contact'];
    navLinks.forEach((link, index) => {
      if (index < keys.length && t.nav && t.nav[keys[index]]) {
        link.textContent = t.nav[keys[index]];
      }
    });

    // Update hero section
    const heroH1 = document.querySelector('.hero h1');
    if (heroH1 && t.hero && t.hero.hi) {
      heroH1.innerHTML = `${t.hero.hi} <span class="highlight">Gideon Cheruiyot Ngeno</span>`;
    }
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle && t.hero && t.hero.subtitle) heroSubtitle.textContent = t.hero.subtitle;
    const heroText = document.querySelector('.hero-text');
    if (heroText && t.hero && t.hero.text) heroText.textContent = t.hero.text;
    const heroCTA = document.querySelector('.hero-cta .btn');
    if (heroCTA && t.hero && t.hero.cta) heroCTA.textContent = t.hero.cta;

    // Update section headings
    const sections = {
      '#about h2': t.about?.title,
      '#skills h2': t.skills?.title,
      '#projects h2': t.projects?.title,
      '#testimonials h2': t.testimonials?.title,
      '#blog h2': t.blog?.title,
      '#contact h2': t.contact?.title
    };

    Object.entries(sections).forEach(([selector, text]) => {
      if (text) {
        const elem = document.querySelector(selector);
        if (elem) elem.textContent = text;
      }
    });

    // Update contact form placeholders
    if (t.contact) {
      const firstNameInput = document.querySelector('input[name="firstName"], input[placeholder*="First"]');
      if (firstNameInput && t.contact.firstName) firstNameInput.setAttribute('placeholder', t.contact.firstName);
      
      const lastNameInput = document.querySelector('input[name="lastName"], input[placeholder*="Last"]');
      if (lastNameInput && t.contact.lastName) lastNameInput.setAttribute('placeholder', t.contact.lastName);
      
      const emailInput = document.querySelector('input[type="email"]');
      if (emailInput && t.contact.email) emailInput.setAttribute('placeholder', t.contact.email);
      
      const subjectInput = document.querySelector('input[name="subject"], input[placeholder*="Subject"]');
      if (subjectInput && t.contact.subject) subjectInput.setAttribute('placeholder', t.contact.subject);
      
      const messageInput = document.querySelector('textarea[name="message"]');
      if (messageInput && t.contact.message) messageInput.setAttribute('placeholder', t.contact.message);
    }
    
    const submitBtn = document.querySelector('.contact-form button[type="submit"]');
    if (submitBtn && t.contact && t.contact.send) submitBtn.textContent = t.contact.send;
  }

  // Initialize language after a short delay to ensure translations.js is loaded
  setTimeout(() => {
    updateLanguage(currentLanguage);
  }, 100);

  // Language toggle
  if (langToggle) {
    console.log('Language toggle button found, adding event listener');
    langToggle.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('Language toggle clicked, current language:', currentLanguage);
      const currentIndex = languages.indexOf(currentLanguage);
      const nextIndex = (currentIndex + 1) % languages.length;
      const nextLang = languages[nextIndex];
      console.log('Switching to language:', nextLang);
      updateLanguage(nextLang);
      return false;
    });
  } else {
    console.error('Language toggle button not found!');
  }

  // === Animate Skill Bars on Scroll ===
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            const progressBar = entry.target.querySelector('.progress');
            if (progressBar) {
              const width = progressBar.style.width;
              progressBar.style.width = '0%';
              setTimeout(() => {
                progressBar.style.width = width;
              }, 100);
            }
          }, index * 100);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    skillBars.forEach((bar, index) => {
      bar.style.opacity = '0';
      bar.style.transform = 'translateY(30px)';
      observer.observe(bar);
    });
  }
  
  // Initialize animation when skills section loads
  const skillsSection = document.getElementById('skills');
  if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateSkillBars();
          skillsObserver.disconnect();
        }
      });
    }, { threshold: 0.1 });
    
    skillsObserver.observe(skillsSection);
  }
});