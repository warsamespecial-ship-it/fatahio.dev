# Profile Images

## Adding Your Profile Image

1. Place your profile image in this folder (`public/images/`)
2. Name it `profile.jpg` (or update the path in `src/data/personalInfo.json`)
3. Supported formats: JPG, PNG, WebP
4. Recommended size: 800x800px or larger (square format works best)
5. The image will be automatically displayed on the Home page

### Current Setup
- The profile image path is set to `/images/profile.jpg` in `personalInfo.json`
- The image is displayed in:
  - Home page (Hero section)
  - About page (Profile section)

### Image Requirements
- Format: JPG, PNG, or WebP
- Recommended dimensions: 800x800px (square)
- File size: Optimize for web (keep under 500KB for better performance)
- The image will be displayed as a circular profile picture

### Alternative: Use External URL
If you prefer to host your image externally, you can update `src/data/personalInfo.json`:
```json
"image": "https://your-image-url.com/profile.jpg"
```

