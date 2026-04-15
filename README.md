# Nins - Professional Portfolio

A modern, advanced, and fully responsive web portfolio for a Computer Science student built with cutting-edge technologies.

## 🎨 Design Features

- **Modern Design**: Glassmorphism and neumorphism styling with gradient accents
- **Smooth Animations**: Scroll-triggered animations, fade-in, slide-up effects using Framer Motion
- **Dark/Light Mode**: Toggle between dark and light themes
- **Custom Cursor**: Animated custom cursor with hover effects
- **Particle Background**: Interactive particle animation that responds to mouse movement
- **Responsive Design**: Fully responsive for mobile, tablet, and desktop

## 🚀 Tech Stack

- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Vite** - Build tool
- **React Icons** - Icon library
- **React Intersection Observer** - Scroll-triggered animations

## 📚 Sections

### 1. **Hero Section**

- Animated greeting and introduction
- Typing effect for dynamic role display
- Profile image with morphing glow animation
- Call-to-action buttons
- Social media links
- Scroll indicator

### 2. **About Me Section**

- Personal introduction
- Goals and passion description
- Quick statistics
- Highlight cards with icons

### 3. **Skills Section**

- Programming Languages (C, Dart, Java, Python, HTML, CSS, JavaScript, PHP)
- Frameworks & Tools (Flutter, React.js, Tailwind CSS)
- Animated progress bars
- Skill level indicators

### 4. **Projects Section**

- Interactive project cards with hover effects
- Project details and descriptions
- Technology tags
- Expandable feature lists
- Links to GitHub and live demos

**Featured Projects:**

1. **BaligyaScan** - Barcode-Based POS and Inventory System
2. **Cafe Shop Management System** - Admin & Staff Management
3. **Smart Electricity Predictor** - Web-Based Usage Risk Predictor

### 5. **Contact Section**

- Contact information cards
- Social media links
- Contact form with validation
- Success feedback animation

### 6. **Footer**

- Quick navigation links
- Social media shortcuts
- Scroll-to-top button
- Copyright information

## 🎬 Animation Features

- **Scroll-Triggered Animations**: Elements animate when scrolled into view
- **Hover Effects**: Interactive hover animations on buttons, cards, and links
- **Morphing Glow**: Animated profile image with morphing border animations
- **Particle System**: Interactive particle background with mouse tracking
- **Typing Effect**: Dynamic typing animation for role display
- **Staggered Animations**: Sequential animations for better visual flow

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🛠 Installation

1. **Clone or extract the repository**

```bash
cd Nins_Portfolio
```

2. **Install dependencies**

```bash
npm install
```

3. **Start development server**

```bash
npm run dev
```

4. **Build for production**

```bash
npm run build
```

5. **Preview production build**

```bash
npm run preview
```

## Deploy To Vercel

1. Push this project to GitHub.
2. Go to Vercel and click Add New Project.
3. Import this repository.
4. Keep defaults for Vite:
   - Build Command: npm run build
   - Output Directory: dist
5. Click Deploy.

This project includes a vercel.json rewrite so direct URL access works correctly.

## ⚙️ Configuration

### Update Personal Information

1. **Contact Information** - Update in `src/components/Contact.jsx`:
   - Replace email address
   - Update phone number or location
   - Add actual social media links

2. **Social Links** - Update in:
   - `src/components/Hero.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`

3. **Profile Image** - Replace `/public/yoy.jpg` with your profile photo

4. **Project Details** - Update project information in `src/components/Projects.jsx`:
   - Project titles and descriptions
   - Technologies used
   - Features list
   - GitHub and demo links

## 🎨 Customization

### Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary: #6366f1;
  --accent: #06b6d4;
  --neon-purple: #a855f7;
  /* ... more colors */
}
```

### Fonts

Google Fonts are already imported in `index.html`:

- Inter (body text)
- Space Grotesk (headings)
- JetBrains Mono (code/mono text)

### Animations

Adjust animation timing in Framer Motion props throughout components:

```jsx
transition={{ duration: 0.7, delay: 0.2 }}
```

## 📊 Performance

- **Lazy Loading**: Images and components load on scroll
- **Optimized Bundle**: Using tree-shaking and code splitting
- **Smooth 60fps Animations**: GPU-accelerated transforms
- **Responsive Images**: Optimized for different device sizes

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

This portfolio template is free to use and customize for personal use.

## 🤝 Contributing

Feel free to fork and customize this portfolio as your own!

## 📧 Contact

For questions or customization needs, reach out through the contact form on the portfolio.

---

**Made with ❤️ and lots of ☕**
