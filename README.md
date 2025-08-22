# Black Mesa New Tab 🔬

A Chrome extension that replaces your new tab page with random images from the Black Mesa Research Facility.

## Installation 🚀

1. Clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the repository folder

## Adding New Images 🖼️

To add new images to the rotation:

1. Add your image file to the `images` folder
2. Add the filename to the `imagesList` array in `scripts/random-image.js`

Example:
```javascript
imagesList: [
  "existing-image.jpg",
  "your-new-image.jpg"  // Add your new image here
]
```

## Project Structure 📁

```
├── icons/              # Extension icons
├── images/             # Background images
├── pages/              # HTML pages
├── scripts/           # JavaScript files
└── styles/            # CSS styles
```

## Development 💻

- The main new tab page is in `pages/black-mesa-new-tab.html`
- Image randomisation logic is in `scripts/random-image.js`
- Styles are in `styles/main.css`
