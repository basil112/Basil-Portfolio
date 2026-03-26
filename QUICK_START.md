# Quick Start Guide

## 🚀 Get Your Portfolio Live in 5 Minutes

### Prerequisites
- Web browser (Chrome, Firefox, Safari)
- Text editor (VS Code, Notepad++, or any editor)

---

## Step 1: Open Locally (30 seconds)

1. Navigate to the portfolio folder
2. Right-click on `index.html`
3. Select "Open with Browser"
4. 🎉 Your portfolio is now running locally!

---

## Step 2: Customize Your Information (2 minutes)

Edit `index.html` and find/replace:

**Find these sections:**

1. **Your name:**
   ```html
   <h1 class="hero-title">Muhammad Basil</h1>
   ```
   Change to your name

2. **Your contact email:**
   ```html
   <a href="mailto:muhammadbasil515@gmail.com">
   ```
   Replace with your email

3. **Your phone:**
   ```html
   <a href="tel:+923019556075">0301-9556075</a>
   ```
   Replace with your phone

4. **WhatsApp link:**
   ```html
   https://wa.me/923019556075
   ```
   Replace with your WhatsApp number (format: country code without + sign)

5. **LinkedIn profile:**
   ```html
   https://linkedin.com/in/muhammad-basil-08a775396
   ```
   Replace with your LinkedIn profile URL

6. **Portfolio link:**
   ```html
   https://basil-wp-demo.vercel.app
   ```
   Update after deployment

---

## Step 3: Add Your Projects (1 minute each)

Find the Projects section and update:

```html
<div class="project-card">
    <div class="project-image">
        <img src="https://via.placeholder.com/400x300/0f3460/00d4ff?text=Project" alt="Project">
        <div class="project-overlay">
            <a href="https://your-project-link.com" target="_blank" class="project-link">
                Visit Site
            </a>
        </div>
    </div>
    <div class="project-info">
        <h3>Project Name</h3>
        <p>Brief description</p>
    </div>
</div>
```

Tips:
- Add 3-4 best projects first
- Use real project images (replace placeholder)
- Add working project URLs

---

## Step 4: Add Your Photo

Replace the hero image placeholder:

Original:
```html
<img src="https://via.placeholder.com/400x500/1a1a2e/00d4ff?text=Muhammad+Basil" alt="Muhammad Basil">
```

Your photo (host it on):
- Free: Imgur.com or Imgbb.com
- Get the image URL
- Replace with your image URL:

```html
<img src="https://your-image-url.jpg" alt="Your Name">
```

---

## Step 5: Deploy (1-2 minutes)

### Easiest: Netlify Drag & Drop

1. Go to https://app.netlify.com/drop
2. Drag entire portfolio folder → drop it
3. Wait 10 seconds...
4. ✅ Your portfolio is LIVE with a URL like: `https://random-name.netlify.app`

### Or: Vercel (Free + Fast)

1. Go to https://vercel.com
2. Click "New Project"
3. Import your GitHub repo or drag folder
4. Click Deploy
5. ✅ Done! URL like: `https://portfolio.vercel.app`

### Or: GitHub Pages (Free)

1. Create GitHub repo
2. Push files:
   ```bash
   git init
   git add .
   git commit -m "Portfolio"
   git push origin main
   ```
3. Enable Pages in Settings
4. ✅ Live at: `https://username.github.io/portfolio`

---

## What to Customize Next (Optional)

After launching:

1. **Add CV Download**
   - Upload `cv.pdf` to root folder
   - Update link in HTML

2. **Change Colors** (edit `styles.css`)
   ```css
   --accent-blue: #00d4ff;
   --accent-purple: #8b5cf6;
   ```

3. **Add More Projects**
   - Duplicate project cards
   - Update with your projects

4. **Add Contact Form**
   - Use Formspree or Basin
   - Paste code in contact section

5. **Update About Section**
   - Edit your bio
   - Update experience/skills

---

## Common Tasks

### Change Hero Section Text
Edit in `index.html`:
```html
<h1 class="hero-title">Your Title Here</h1>
<h2 class="hero-subtitle">Your Subtitle Here</h2>
<p class="hero-description">Your description here</p>
```

### Update Skills
Find skills section and edit card content:
```html
<div class="skill-card">
    <div class="skill-icon">
        <i class="fab fa-wordpress-simple"></i>
    </div>
    <h3>Your Skill</h3>
    <p>Skill description</p>
</div>
```

### Add Social Media
Update footer and floating icons:
```html
<a href="https://twitter.com/yourhandle" target="_blank">
    <i class="fab fa-twitter"></i>
</a>
```

---

## Performance Tips

✅ Keep portfolio folder clean
✅ Optimize images before adding
✅ Test on mobile devices
✅ Check all links work
✅ Clear cache before testing

---

## Need Help?

1. **Styling issues?** → Check `styles.css`
2. **Layout broken?** → Ensure tags are matched properly
3. **Images not showing?** → Verify image URLs
4. **Deployment failed?** → Read platform-specific guides

---

## File Structure After Customization

```
portfolio/
├── index.html              # Your content
├── styles.css              # Your colors/themes
├── script.js               # Your interactions
├── README.md               # About your portfolio
├── DEPLOYMENT_GUIDE.md     # How to deploy
├── QUICK_START.md          # This file
├── cv.pdf                  # Your resume (optional)
├── vercel.json             # Vercel config
├── netlify.toml            # Netlify config
├── sitemap.xml             # SEO sitemap
└── robots.txt              # SEO robots
```

---

## Deployment URLs

After deployment, your portfolio will be live at:

- **Netlify:** `https://your-site.netlify.app`
- **Vercel:** `https://your-site.vercel.app`
- **GitHub Pages:** `https://username.github.io/portfolio`

---

## Next Steps

1. ✅ Customize personal info
2. ✅ Add your projects
3. ✅ Deploy to live URL
4. ✅ Share your portfolio
5. ✅ Get client inquiries!

---

## Quick Links

- 📖 Full README: [README.md](README.md)
- 🚀 Deployment Guide: [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
- 🎨 Edit Styles: [styles.css](styles.css)
- 📝 Edit Content: [index.html](index.html)
- ⚙️ Add Interactions: [script.js](script.js)

---

**Your portfolio is ready! Now go out and showcase your amazing work! 🎉**

Have questions? Check the full README.md or DEPLOYMENT_GUIDE.md
