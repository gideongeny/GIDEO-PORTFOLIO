# 👨‍💻 Gideon Ngeno - Portfolio Website

A modern, responsive portfolio website showcasing my projects, skills, and experience as a Full-Stack & Mobile Developer.

## 🌟 Features

- **Auto-Synced GitHub Repositories**: Automatically fetches and displays all your GitHub repositories without manual input
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with preference saving
- **Interactive Gallery**: Showcase your photos and experiences
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Contact Form**: Integrated contact form with FormSubmit
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized assets and lazy loading for images

## 🚀 Live Demo

Visit the live website: [gideongeny.github.io/GIDEO-PORTFOLIO](https://gideongeny.github.io/GIDEO-PORTFOLIO/)

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Icons**: Font Awesome 6.4.0
- **APIs**: GitHub REST API
- **Form Handling**: FormSubmit
- **Hosting**: GitHub Pages

## 📁 Project Structure

```
GIDEO-PORTFOLIO/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # JavaScript functionality including GitHub API integration
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

In `script.js`, find this line and update the username:

```javascript
const username = 'gideongeny'; // Change to your GitHub username
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

### Features:
- Real-time repository sync
- Language detection with icons
- Star and fork counts
- Direct links to repository pages
- Last updated dates

## 📱 Responsive Breakpoints

- **Desktop**: 901px and above
- **Tablet**: 601px - 900px
- **Mobile**: 600px and below

## 🎯 Sections

1. **Hero Section**: Introduction with profile image and social links
2. **About**: Personal background and experience
3. **Skills**: Technical skills with progress bars
4. **Featured Projects**: Highlighted projects with images
5. **GitHub Repositories**: Auto-synced from GitHub
6. **Gallery**: Photo showcase
7. **Contact**: Contact form and information

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

## 📈 Future Enhancements

- [ ] Blog section integration
- [ ] CV/Resume download functionality
- [ ] Testimonials section
- [ ] Analytics integration
- [ ] Multi-language support
- [ ] PWA capabilities
- [ ] Performance optimizations

---

⭐ If you like this project, please give it a star on GitHub!

