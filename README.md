# Muhammad Basil - Premium Portfolio Website

A fully responsive, modern, and premium portfolio website for WordPress & Elementor developer Muhammad Basil. Built with HTML5, CSS3, and vanilla JavaScript with smooth animations, glassmorphism effects, and neon accents.

## Features

✨ **Modern Design**
- Dark theme with premium aesthetics
- Glassmorphism effects and neon blue accents
- Smooth animations and transitions
- Fully responsive on all devices

🎨 **Sections Included**
- Hero Section with CTA buttons
- About Me with expertise cards
- Skills Section with animated cards
- Featured Projects Portfolio (10 projects)
- Contact Information with icons
- Floating Social Media Icons
- Premium Footer

⚡ **Performance & Interactions**
- Smooth scroll navigation
- Hover animations and effects
- Lazy loading images
- Mobile-friendly
- Keyboard navigation support
- Scroll animations

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styling (dark theme, animations)
├── script.js           # JavaScript interactivity
├── README.md           # This file
└── cv.pdf             # Place your CV here (optional)
```

## Getting Started

### 1. Local Setup
Simply open `index.html` in your web browser. No build process required!

```bash
# If you have a local server
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (using http-server)
npx http-server
```

Then visit `http://localhost:8000`

### 2. Deployment Options

#### Deploy on Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Deploy on Netlify
1. Connect your repository to Netlify
2. Set build command: (leave empty for static site)
3. Set publish directory: `.` (root)

#### Deploy on GitHub Pages
1. Create a GitHub repository
2. Push your files to the main branch
3. Go to Settings → Pages
4. Select "Deploy from a branch" → main branch
5. Your site will be live at `https://yourusername.github.io/portfolio`

## Customization

### Update Personal Information

Edit the following in `index.html`:

```html
<!-- Hero Section -->
<h1 class="hero-title">Your Name</h1>
<p class="hero-description">Your tagline here</p>

<!-- Contact Section -->
<p>your-email@example.com</p>
<p>Your Phone Number</p>

<!-- Update links -->
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
<a href="https://wa.me/yourwhatsapp">WhatsApp</a>
```

### Change Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-dark: #0a0e27;
    --accent-blue: #00d4ff;
    --accent-purple: #8b5cf6;
    --text-light: #e4e8f0;
}
```

### Update Projects

Add your projects in the Projects Section:

```html
<div class="project-card">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project Name">
        <div class="project-overlay">
            <a href="https://yourproject.com" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i> Visit Site
            </a>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Project description</p>
    </div>
</div>
```

### Add CV Download

1. Place your CV file (e.g., `cv.pdf` or `resume.pdf`) in the portfolio directory
2. Update the download button in `index.html`:

```html
<a href="cv.pdf" class="btn btn-primary" download>
    <i class="fas fa-download"></i> Download CV
</a>
```

### Update Profile Image

Replace the placeholder image URL in the hero section:

```html
<img src="https://your-image-url.jpg" alt="Muhammad Basil">
```

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. Optimize images before uploading
2. Use WebP format for better compression
3. Minimize CSS/JS for production
4. Use a CDN for faster delivery

## SEO Optimization

The website includes basic SEO structure:
- Meta tags
- Semantic HTML
- Fast load times
- Mobile responsive
- Schema markup ready

Enhance with:
1. Add Google Analytics
2. Create sitemap.xml
3. Add robots.txt
4. Optimize meta descriptions
5. Add Open Graph tags

## Integration Options

### Add Analytics
Add to `<head>` in index.html:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Add Contact Form
Use services like:
- Formspree
- Netlify Forms
- Basin
- GetForm

## Troubleshooting

### Images not showing
- Verify image URLs are correct
- Use absolute URLs or relative paths
- Check CORS for external images

### Styling issues
- Clear browser cache (Ctrl+Shift+Delete)
- Check CSS file is linked correctly
- Verify no CSS naming conflicts

### JavaScript not working
- Check console for errors (F12)
- Verify CDN links are working
- Clear cache and reload

## License

This portfolio website is open source and free to use for personal and commercial projects.

## Support

For issues or questions:
- Email: muhammadbasil515@gmail.com
- LinkedIn: linkedin.com/in/muhammad-basil-08a775396
- WhatsApp: +92 301 9556075

## Credits

- Font Awesome Icons
- Google Fonts
- Placeholder images via Placeholder.com

---

**Created with ❤️ by Muhammad Basil | 2026**
