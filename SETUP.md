# Portfolio Setup and Configuration Guide

## Initial Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Personal Information

#### A. Update Contact Details

File: `src/components/Contact.jsx`

Replace the following placeholders:

```javascript
// Line 11-23
const contactInfo = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "your.email@example.com", // UPDATE THIS
    href: "mailto:your.email@example.com", // UPDATE THIS
    color: "#6366f1",
  },
  // ... more contacts
];

const socials = [
  {
    icon: FaGithub,
    href: "https://github.com/yourusername",
    label: "GitHub",
    color: "#fff",
  }, // UPDATE
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    color: "#0A66C2",
  }, // UPDATE
  {
    icon: FaFacebookF,
    href: "https://facebook.com/yourprofile",
    label: "Facebook",
    color: "#1877F2",
  }, // UPDATE
];
```

#### B. Update Hero Social Links

File: `src/components/Hero.jsx`

Replace around line 128:

```javascript
{
  [
    {
      icon: FaGithub,
      href: "https://github.com/yourusername",
      label: "GitHub",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
    },
    {
      icon: FaFacebookF,
      href: "https://facebook.com/yourprofile",
      label: "Facebook",
    },
  ];
}
```

#### C. Update Footer Social Links

File: `src/components/Footer.jsx`

Replace around line 44:

```javascript
{
  [
    { icon: FaGithub, href: "https://github.com/yourusername" },
    { icon: FaLinkedinIn, href: "https://linkedin.com/in/yourprofile" },
    { icon: FaFacebookF, href: "https://facebook.com/yourprofile" },
  ];
}
```

#### D. Update Projects

File: `src/components/Projects.jsx`

Update project details:

- Project titles
- Descriptions
- Technologies
- GitHub links (currently using '#')
- Demo links (currently using '#')

#### E. Update Profile Image

Replace `public/yoy.jpg` with your profile photo (250x250px minimum)

### 3. Customize Colors (Optional)

File: `src/index.css`

Edit lines 8-16 to customize the color scheme:

```css
:root {
  --primary: #6366f1; /* Primary brand color */
  --accent: #06b6d4; /* Accent color */
  --neon-purple: #a855f7; /* Purple accent */
  --neon-pink: #ec4899; /* Pink accent */
  --neon-blue: #3b82f6; /* Blue accent */
  /* ... */
}
```

### 4. Customize Fonts (Optional)

Fonts are imported in `index.html` lines 10-11. You can:

- Change font families
- Add additional weights
- Use different font services

## Development

### Start Development Server

```bash
npm run dev
```

Server will run on `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates optimized build in `dist/` folder

### Preview Production Build

```bash
npm run preview
```

Test the production build locally

## File Structure Reference

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with dark mode toggle
│   ├── Hero.jsx            # Main hero section
│   ├── About.jsx           # About me section
│   ├── Skills.jsx          # Skills with progress bars
│   ├── Projects.jsx        # Project showcase cards
│   ├── Contact.jsx         # Contact form and info
│   ├── Footer.jsx          # Footer section
│   ├── ParticleBackground.jsx  # Interactive particle animation
│   ├── CustomCursor.jsx    # Custom cursor animation
│   └── Preloader.jsx       # Loading animation
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles

public/
├── yoy.jpg               # Profile image
├── icons.svg             # Icon assets
└── favicon.svg           # Favicon

index.html                # HTML entry point
package.json              # Dependencies
vite.config.js            # Vite configuration
README.md                 # Project documentation
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite and builds automatically

### Deploy to Netlify

1. Build locally: `npm run build`
2. Connect `dist/` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Deploy to GitHub Pages

1. Update `vite.config.js` with your repository name
2. Run: `npm run build`
3. Push to GitHub

## Performance Tips

1. **Optimize Images**: Compress profile image using TinyPNG or similar
2. **Lazy Load**: Images load only when visible on screen
3. **Code Splitting**: Vite automatically splits code for better loading
4. **Minification**: Production build is automatically minified

## Browser Support

| Browser | Support   |
| ------- | --------- |
| Chrome  | ✅ Latest |
| Firefox | ✅ Latest |
| Safari  | ✅ Latest |
| Edge    | ✅ Latest |

## Troubleshooting

### Issue: Port 5173 already in use

```bash
npm run dev -- --port 3000
```

### Issue: Images not loading

- Check image path in components
- Ensure images are in `public/` folder
- Clear browser cache (Ctrl+F5)

### Issue: Animations not smooth

- Check browser hardware acceleration is enabled
- Close unnecessary browser tabs
- Try different browser

### Issue: Build errors

```bash
npm install
npm run build
```

## Additional Features to Consider

1. **Add Blog Section**: Create blog component with markdown support
2. **Add Resume Download**: Link to downloadable PDF resume
3. **Add Testimonials**: Section for client/peer testimonials
4. **Add Newsletter**: Email subscription form
5. **Add Analytics**: Google Analytics integration
6. **Add SEO**: Meta tags and structured data

## Security Checklist

- [ ] Update all social media links
- [ ] Remove any personal information
- [ ] Test contact form response
- [ ] Check all external links work
- [ ] Test on mobile devices
- [ ] Review for typos and grammar

## Maintenance

- Keep dependencies updated: `npm update`
- Monitor bundle size: `npm run build` and check dist folder
- Test all links periodically
- Update projects as you complete new ones
- Keep contact information current

---

**Last Updated**: 2024
**Maintained By**: [Your Name]
