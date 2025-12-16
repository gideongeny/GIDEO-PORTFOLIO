# 👨‍💻 Gideon Ngeno - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full-Stack & Mobile Developer.

## 🌟 Features

- **Auto-Synced GitHub Repositories**: Automatically fetches and displays ALL your GitHub repositories (no limit!)
  - Repository images with gradient placeholders
  - Direct links to GitHub code and live demos (when available)
  - Language detection with icons
  - Star and fork counts
  - Last updated dates
- **Profile Image Carousel**: Rotating profile images in hero section with smooth transitions
- **Background Image Carousel**: Rotating background images behind hero text
- **3D Interactive Skills Section**: Skills with 3D hover effects and animations
- **Multi-Language Support**: Switch between English, Spanish, and Swahili
- **PWA Capability**: Installable as a Progressive Web App with offline support
- **Testimonials Section**: Showcase client and colleague testimonials
- **Blog Section**: Display latest blog posts and articles
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with preference saving
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Integrated contact form with FormSubmit
- **Roadmap Section**: Showcase upcoming features and enhancements
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and lazy loading for images

## 🚀 Live Demo

Visit the live website: [gideongeny.github.io/GIDEO-PORTFOLIO](https://gideongeny.github.io/GIDEO-PORTFOLIO/)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Icons**: Font Awesome 6.4.0
- **APIs**: GitHub REST API
- **Form Handling**: FormSubmit
- **PWA**: Service Workers, Web App Manifest
- **i18n**: Custom multi-language support (English, Spanish, Swahili)
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
GIDEO-PORTFOLIO/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design with 3D effects
├── script.js           # JavaScript functionality including GitHub API, i18n, PWA
├── translations.js     # Multi-language translation data
├── manifest.json       # PWA manifest file
├── service-worker.js   # Service worker for PWA offline support
├── thank-you.html      # Thank you page after form submission
├── sitemap.xml         # SEO sitemap
└── images/             # All project and profile images
    ├── profile-main.jpg
    ├── about-bg.jpg
    ├── hero-bg.jpg
    └── project images...
```

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gideongeny/GIDEO-PORTFOLIO.git
   cd GIDEO-PORTFOLIO
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Customize for your use**
   - Update personal information in `index.html`
   - Modify `script.js` to change GitHub username (line ~235)
   - Add your own images to the project
   - Update skills and project descriptions

## 🎨 Customization

### Change GitHub Username

In `script.js`, find the GitHub API integration section and update the username:

```javascript
const username = 'gideongeny'; // Change to your GitHub username
```

Also update GitHub stats images in `index.html`:

```html
<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gideongeny&..." />
```

### Update Contact Information

Edit the contact section in `index.html`:

```html
<p><i class="fa-solid fa-envelope"></i> your-email@example.com</p>
<p><i class="fa-solid fa-phone"></i> +1234567890</p>
```

### Modify Color Scheme

Update CSS variables in `styles.css`:

```css
:root {
  --primary: #1e88e5;    /* Main brand color */
  --secondary: #ff7043;  /* Accent color */
  --accent: #43a047;     /* Success/highlight color */
}
```

## 🌐 GitHub API Integration

The portfolio automatically fetches your GitHub repositories using the GitHub REST API:

- **Endpoint**: `https://api.github.com/users/{username}/repos`
- **Sorting**: By last updated date
- **Filtering**: Excludes forks and the portfolio repository itself
- **Display**: Shows up to 12 most recently updated repositories

### Repository Features:
- **ALL Repositories**: Fetches ALL repositories from GitHub (no 12-repo limit!)
- **Visual Representation**: Each repository has an image placeholder with gradient backgrounds
- **Live Demo Links**: Automatically detects and links to repository homepages or GitHub Pages
- **Repository Images**: Attempts to fetch website screenshots for repositories with live demos
- **Direct Code Access**: Quick link to GitHub repository code
- **Language Detection**: Automatic language detection with appropriate icons
- **Statistics**: Display star counts, fork counts, and last updated dates
- **Real-time Sync**: Updates automatically when repositories are added or updated on GitHub
- **Pagination**: Automatically handles multiple pages of repositories from GitHub API

## 📱 Responsive Breakpoints

- **Desktop**: 901px and above
- **Tablet**: 601px - 900px
- **Mobile**: 600px and below

## 🎯 Sections

1. **Hero Section**: Introduction with rotating profile image carousel, background image carousel, and social links
2. **About**: Personal background and experience
3. **Skills**: Interactive 3D technical skills with progress bars and hover effects
4. **GitHub Repositories**: Auto-synced ALL repositories with images and live demo links
5. **Testimonials**: Client and colleague testimonials (Zadoc, Nicole, Birgen, Peter)
6. **Blog**: Latest blog posts and articles
7. **Roadmap**: Upcoming features and enhancements
8. **Contact**: Contact form and information

## 🔒 Privacy & Security

- Contact form uses FormSubmit service (no backend required)
- No tracking scripts included
- All external resources use reputable CDNs
- GitHub API calls are client-side only (public data)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/gideongeny/GIDEO-PORTFOLIO/issues).

## 📧 Contact

**Gideon Cheruiyot Ngeno**

- 📧 Email: gideongeng@gmail.com
- 📱 Phone: +254 720317626
- 💼 LinkedIn: [gideo-ngeng-120437230](https://www.linkedin.com/in/gideo-ngeng-120437230/)
- 🐙 GitHub: [gideongeny](https://github.com/gideongeny)
- 📍 Location: Kenya

## 🙏 Acknowledgments

- Font Awesome for icons
- GitHub for API services
- FormSubmit for contact form handling
- All contributors and supporters

---

Made with ❤️ and lots of coffee ☕ by Gideon Ngeno

---

## 📈 Implemented Enhancements

- ✅ **Auto-synced ALL GitHub repositories** - Fetches every repository, no limit
- ✅ **Repository images** - Visual representation for each project with gradients
- ✅ **Live demo links** - Direct links to deployed projects
- ✅ **Profile image carousel** - Rotating photos in hero section
- ✅ **Background image carousel** - Rotating background images in hero
- ✅ **3D Interactive Skills** - Skills section with 3D hover effects
- ✅ **Multi-language support** - English, Spanish, and Swahili
- ✅ **PWA capability** - Installable as app with offline support
- ✅ **Testimonials section** - Client testimonials
- ✅ **Blog section** - Latest blog posts
- ✅ **Roadmap section** - Showcase upcoming features

## 🔮 Future Enhancements

- [ ] Blog section with markdown support and dynamic content
- [ ] CV/Resume download functionality (PDF generation)
- [ ] Analytics integration (Google Analytics, Plausible)
- [ ] Additional languages (French, Arabic, etc.)
- [ ] Performance optimizations (image compression, code splitting)
- [ ] Project filtering and search functionality
- [ ] Detailed project pages with more information
- [ ] Video demonstrations for projects
- [ ] RSS feed for blog updates
- [ ] Newsletter subscription
- [ ] Comments system for blog posts
- [ ] Advanced animations and transitions

---

⭐ If you like this project, please give it a star on GitHub!

