# Advanced Customization Guide

This guide helps you customize your portfolio beyond basic information updates.

---

## 🎨 Color Scheme Customization

### Change Theme Colors

Edit `:root` variables in `styles.css`:

```css
:root {
    /* Current Colors */
    --primary-dark: #0a0e27;           /* Main background */
    --secondary-dark: #1a1a3e;         /* Secondary background */
    --accent-blue: #00d4ff;             /* Primary accent */
    --accent-purple: #8b5cf6;           /* Secondary accent */
    --accent-pink: #ec4899;             /* Tertiary accent */
    --text-light: #e4e8f0;              /* Main text */
    --text-muted: #a1aab7;              /* Muted text */
    --border-color: rgba(0, 212, 255, 0.1);  /* Border color */
    --glow-blue: 0 0 30px rgba(0, 212, 255, 0.3);  /* Glow effect */
}
```

### Pre-built Color Schemes

**Dark Purple Theme:**
```css
--accent-blue: #a78bfa;        /* Purple */
--accent-purple: #6d28d9;       /* Dark Purple */
--accent-pink: #d946ef;         /* Magenta */
```

**Neon Green Theme:**
```css
--accent-blue: #39ff14;         /* Neon Green */
--accent-purple: #00ff00;       /* Lime */
--accent-pink: #0fff50;         /* Bright Green */
```

**Cyberpunk Theme:**
```css
--accent-blue: #ff00ff;         /* Magenta */
--accent-purple: #00ffff;       /* Cyan */
--accent-pink: #ff0080;         /* Hot Pink */
```

**Ocean Theme:**
```css
--accent-blue: #0099ff;         /* Ocean Blue */
--accent-purple: #00ccff;       /* Light Blue */
--accent-pink: #0066ff;         /* Deep Blue */
```

### Apply Custom Color Everywhere

1. Update `:root` variables
2. Colors automatically apply to:
   - Buttons
   - Links
   - Icons
   - Gradients
   - Glows

---

## 🔤 Typography Customization

### Change Fonts

Edit font imports in `index.html` `<head>`:

```html
<!-- Current Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

**Use different fonts:**

```html
<!-- Playfair Display + Outfit (Elegant) -->
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">

<!-- Montserrat + Ubuntu (Professional) -->
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Ubuntu:wght@400;500;700&display=swap" rel="stylesheet">

<!-- Bebas Neue + Source Sans Pro (Modern) -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet">
```

Update in `styles.css`:

```css
body {
    font-family: 'Your-Font-Name', sans-serif;
}

.section-title, .hero-title {
    font-family: 'Your-Title-Font', sans-serif;
}
```

---

## 🎬 Animation Customization

### Adjust Animation Speed

Change animation durations in `styles.css`:

```css
/* Slower animations (easier to see) */
--transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);  /* was 0.3s */

/* Faster animations (more snappy) */
--transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);  /* was 0.3s */
```

### Disable Specific Animations

Add to `styles.css`:

```css
/* Disable scroll animations */
.skill-card, .project-card, .contact-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
}

/* Disable hover effects */
.skill-card:hover {
    transform: none !important;
}

/* Disable gradient animation */
@keyframes gradientShift {
    0%, 100% { background-position: 0%; }
    50% { background-position: 100%; }
}
```

### Add New Animations

```css
/* Add bounce effect */
@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
    }
    100% {
        transform: scale(1);
    }
}

.skill-card {
    animation: bounceIn 0.6s ease-out;
}
```

---

## 📐 Layout Customization

### Change Hero Section Layout

**Full Width (no sidebar):**
```css
.hero-content {
    grid-template-columns: 1fr;  /* was 1fr 1fr */
    text-align: center;
}
```

**Image Left, Text Right:**
```css
.hero-content {
    grid-template-columns: 1fr 1fr;
    direction: rtl;  /* Reverses order */
}
```

### Adjust Section Padding

Find sections and modify padding:

```css
.hero {
    padding: 4rem 2rem;  /* was 8rem 2rem 2rem */
}

.about {
    padding: 4rem 2rem;  /* was 6rem 2rem */
}
```

---

## 🖼️ Hero Image Customization

### Make Image Larger

```css
.image-placeholder {
    width: 500px;  /* was 350px */
    height: 650px; /* was 450px */
}
```

### Remove Image Glow

```css
.image-glow {
    display: none;
}
```

### Add Image Border

```css
.image-placeholder img {
    border: 5px solid var(--accent-blue);  /* Add border */
    filter: drop-shadow(0 10px 40px rgba(0, 212, 255, 0.2));
}
```

---

## 🗂️ Grid Layouts

### Change Projects Grid (3 columns to 2)

```css
.projects-grid {
    grid-template-columns: repeat(2, 1fr);  /* was repeat(auto-fit, minmax(300px, 1fr)) */
}
```

### Change Skills to Single Column

```css
.skills-grid {
    grid-template-columns: 1fr;  /* was repeat(auto-fit, minmax(250px, 1fr)) */
}
```

### Make All Grids Equal Width

```css
.skill-card, .project-card, .contact-card {
    grid-column: span 1;
}
```

---

## 🌈 Gradient Customization

### Custom Gradient Title

Find in `styles.css`:

```css
/* Original gradient */
.hero-title {
    background: linear-gradient(135deg, 
        var(--accent-blue) 0%, 
        var(--accent-purple) 50%, 
        var(--accent-blue) 100%);
}

/* Rainbow gradient */
.hero-title {
    background: linear-gradient(90deg, 
        #ff0000 0%,
        #ffff00 25%,
        #00ff00 50%,
        #0000ff 75%,
        #ff000 0%);
}

/* Gold gradient */
.hero-title {
    background: linear-gradient(135deg, 
        #ffd700 0%,
        #ffed4e 100%);
}
```

---

## 🎯 Button Customization

### Change Button Style

```css
.btn-primary {
    background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
    border-radius: 8px;  /* Change roundness */
    padding: 1rem 2.5rem;  /* Change size */
    text-transform: uppercase;  /* Make uppercase */
    letter-spacing: 1px;  /* Add letter spacing */
}
```

### Add Shadow to Buttons

```css
.btn-primary {
    box-shadow: 0 20px 50px rgba(0, 212, 255, 0.4);
    border: 2px solid transparent;
}
```

### Make Buttons Full Width

```css
.cta-buttons {
    flex-direction: column;  /* Stack vertically */
}

.btn {
    width: 100%;  /* Full width */
    text-align: center;
}
```

---

## 🔊 Sound Effects (Advanced)

Add sound on button click:

```html
<!-- Add to index.html before closing </body> -->
<audio id="clickSound" preload="auto">
    <source src="https://cdn.pixabay.com/download/audio/2022/03/24/audio_SOMETHELSE_4e03c27e.mp3" type="audio/mpeg">
</audio>
```

Then in `script.js`:

```javascript
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const audio = document.getElementById('clickSound');
        audio.play();
    });
});
```

---

## 🌙 Dark Mode Toggle

Add dark/light mode switch:

```html
<!-- Add to navbar -->
<button id="themeToggle" style="background: none; border: none; color: var(--text-light); cursor: pointer; font-size: 1.5rem;">
    <i class="fas fa-moon"></i>
</button>
```

Add to `script.js`:

```javascript
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

themeToggle?.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Restore saved theme
if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
}
```

Add to `styles.css`:

```css
body.light-mode {
    --primary-dark: #ffffff;
    --secondary-dark: #f5f5f5;
    --accent-blue: #0066ff;
    --text-light: #000000;
    --text-muted: #666666;
}
```

---

## 📱 Mobile-Only Customizations

```css
@media (max-width: 768px) {
    /* Hide sections on mobile */
    .floating-socials {
        display: none;  /* Hide floating socials */
    }

    /* Stack everything vertically */
    .hero-content {
        grid-template-columns: 1fr !important;
    }

    /* Make text smaller */
    .hero-title {
        font-size: 1.8rem;  /* was 2.5rem */
    }

    /* Remove images on mobile */
    .hero-image {
        display: none;
    }
}
```

---

## 🔔 Add Notifications/Alerts

For form submissions:

```javascript
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem;
        background: ${type === 'success' ? '#00d4ff' : '#ff0000'};
        color: #0a0e27;
        border-radius: 8px;
        animation: slideIn 0.3s ease;
        z-index: 10000;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Use it like:
showNotification('Message sent!', 'success');
showNotification('Error occurred!', 'error');
```

---

## 🎓 Advanced: Custom Components

### Add a testimonials section:

```html
<section id="testimonials" class="testimonials">
    <div class="container">
        <h2 class="section-title">Client Testimonials</h2>
        <div class="testimonials-grid">
            <div class="testimonial-card">
                <p class="testimonial-text">"Great work!"</p>
                <p class="testimonial-author">- Client Name</p>
            </div>
        </div>
    </div>
</section>
```

Style it:

```css
.testimonials {
    padding: 6rem 2rem;
    background: linear-gradient(135deg, var(--primary-dark), var(--secondary-dark));
}

.testimonial-card {
    padding: 2rem;
    background: rgba(0, 212, 255, 0.05);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: var(--transition);
}

.testimonial-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-blue);
}
```

---

## 🐛 Debugging Tips

**Check console for errors:**
- Press F12 → Console tab
- Look for red errors
- Fix JavaScript issues

**Check CSS issues:**
- Use F12 → Elements tab
- Inspect elements
- Check computed styles

**Test responsive design:**
- Press F12 → Mobile view (Ctrl+Shift+M)
- Test different screen sizes

---

## 🚀 Performance Optimization

### Remove Unused Animations

```css
/* Comment out animations you don't use */
/* @keyframes shift { } */
/* @keyframes float { } */
```

### Optimize Images

```html
<!-- Use modern image format -->
<img src="image.webp" alt="Description">

<!-- Add fallback -->
<picture>
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Description">
</picture>
```

### Minify CSS/JS

Remove comments and whitespace to reduce file size.

---

## Need More Help?

1. Check CSS comments for explanations
2. Search Google for "CSS [what you want to change]"
3. Use browser DevTools (F12)
4. Refer to MDN Web Docs

---

**Happy customizing! 🎨**
