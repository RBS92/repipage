# 💕 Reasons I Love You - Appreciation Page

A cute, mobile-friendly web page that displays random reasons why you love your girlfriend. Perfect for hosting on GitHub Pages!

## ✨ Features

- 🎨 Beautiful gradient background with floating hearts animation
- 📱 Mobile-first, app-like design
- 💖 50 pre-written reasons (customize them!)
- 🎯 Random reason generator that cycles through all reasons
- ✨ Smooth animations and transitions
- 📊 Counter to track how many reasons have been shown

## 🚀 How to Deploy to GitHub Pages

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Appreciation page"
```

2. Create a new repository on GitHub (don't initialize with README)

3. Push your code:
```bash
git remote add origin https://github.com/YOUR-USERNAME/appreciationpage.git
git branch -M main
git push -u origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select **main** branch
5. Click **Save**
6. Wait a few minutes for deployment

Your page will be available at: `https://YOUR-USERNAME.github.io/appreciationpage/`

## 🎨 Customization

### Adding Your Own Reasons

Edit the `script.js` file and modify the `reasons` array:

```javascript
const reasons = [
    { emoji: "😊", text: "Your custom reason here" },
    { emoji: "💖", text: "Another reason..." },
    // Add more reasons...
];
```

### Changing Colors

Edit `styles.css` to customize the color scheme:

- **Background gradient**: Line 8 (`background: linear-gradient(...)`)
- **Button colors**: Line 109 (`background: linear-gradient(...)`)
- **Text colors**: Lines 48, 92, 127

### Changing Button Text

Edit `index.html` line 25 to change the button text:
```html
<button id="newReasonBtn" class="btn">
    Your Custom Text 💖
</button>
```

## 📱 Mobile Optimized

The page is fully responsive and optimized for:
- iPhone and Android phones
- Tablets
- Desktop browsers

## 💡 Tips

- Share the link with your girlfriend via text or QR code
- Bookmark it on her phone's home screen for an app-like experience
- Update reasons regularly to keep it fresh and surprising
- Consider adding personal inside jokes or specific memories

## 📝 License

Feel free to use and modify this project for personal use!

---

Made with ❤️ for someone special
