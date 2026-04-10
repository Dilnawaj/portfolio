# Abhisheka Raman — Portfolio

A React.js + Bootstrap portfolio website cloned from the original Vercel deployment.

## 🚀 Tech Stack
- **React.js** (Create React App)
- **Bootstrap 5** + **react-bootstrap**
- **Custom CSS** with CSS Variables (dark theme)
- **Google Fonts** — Space Mono + Poppins

## 📦 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## 🌐 Deploy to Vercel

### Option 1 — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option 2 — GitHub + Vercel Dashboard
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Vercel auto-detects Create React App settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
5. Click **"Deploy"** — done! 🎉

> The `vercel.json` file is already configured for SPA client-side routing.

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.js
├── index.js
└── index.css
```
