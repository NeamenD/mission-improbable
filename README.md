# 💘 Date Meme - Will You Go On A Date With Me?

A fun, interactive React meme app where the "No" button runs away from your mouse! 😂

## 🚀 GitHub Pages Deployment Guide

### Step 1: Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [Git](https://git-scm.com/)
- A [GitHub](https://github.com) account

### Step 2: Update Repository Name

**IMPORTANT:** Open `vite.config.js` and replace `'date-meme'` with YOUR repository name:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/YOUR-REPO-NAME/", // ← Change this!
});
```

For example, if your repo is `my-awesome-date-app`, use:

```javascript
base: '/my-awesome-date-app/',
```

### Step 3: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

### Step 4: Test Locally (Optional)

To see it working on your computer:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Step 5: Create GitHub Repository

1. Go to [GitHub](https://github.com) and create a new repository
2. Name it (e.g., `date-meme` or whatever you want)
3. **Don't** initialize with README (we already have one)
4. Copy the repository URL (looks like: `https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`)

### Step 6: Push to GitHub

Run these commands in your terminal:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Date Meme App"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 7: Deploy to GitHub Pages

Now deploy with one command:

```bash
npm run deploy
```

This will:

- Build your app
- Create a `gh-pages` branch
- Push the built files to GitHub

### Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **Branch: gh-pages**
4. Click **Save**

### Step 9: Visit Your Live Site! 🎉

Your site will be live at:

```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
```

For example: `https://johndoe.github.io/date-meme/`

---

## 📝 Making Changes

After you make changes to the code:

```bash
# Test locally first
npm run dev

# When ready to deploy
git add .
git commit -m "Update: describe your changes"
git push origin main
npm run deploy
```

The `npm run deploy` command will rebuild and update your live site!

---

## 🎨 Features

- **Runaway "No" Button** - Moves away from your cursor!
- **Multi-Step Flow** - Question → Response → Date Picker → Food Selection → Confirmation
- **Responsive Design** - Works on mobile and desktop
- **Smooth Animations** - Bouncing emojis, fading transitions, floating hearts
- **Beautiful UI** - Purple gradient background with playful fonts

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **GitHub Pages** - Free hosting
- **Google Fonts** - Fredoka & Patrick Hand fonts

---

## 💡 Customization Ideas

Want to make it your own? Try:

- Change colors in the gradient background
- Add more food options
- Modify the text and emojis
- Add sound effects
- Change the fonts

All the styling is in `src/App.jsx` in the `<style>` tag!

---

## 🐛 Troubleshooting

**Site not showing up?**

- Wait 2-3 minutes after deploying
- Check that GitHub Pages is enabled in Settings
- Verify the `base` path in `vite.config.js` matches your repo name

**"No" button not working?**

- Make sure you're not on mobile (mouse tracking doesn't work on touch)

**Changes not appearing?**

- Run `npm run deploy` again
- Clear your browser cache (Ctrl+Shift+R or Cmd+Shift+R)

---

## 📄 License

Feel free to use this for your own romantic endeavors! 💕

---

Made with ❤️ and a lot of emojis
