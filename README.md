# fatahio.dev - Personal Portfolio Website

A modern, responsive personal portfolio web application built with React.js, featuring a clean design, smooth animations, and dark mode support.

## Features

- 🎨 **Modern Design**: Clean, professional UI with smooth animations
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Mobile-friendly design that adapts to all screen sizes
- ⚡ **Fast Performance**: Optimized with React Router and Framer Motion animations
- ♿ **Accessible**: Built with accessibility standards in mind
- 🎯 **Easy Navigation**: Smooth navigation with React Router

## Pages

1. **Home / Landing**: Hero section with profile image, tagline, and call-to-action buttons
2. **About**: Personal information, biography, and skills showcase with category filtering
3. **Projects**: Portfolio grid with project cards, filtering by technology
4. **Resume**: Detailed work experience, education, and skills
5. **Blog**: Blog posts/articles listing
6. **Contact**: Contact form and information

## Tech Stack

- **Frontend**: React.js with TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **State Management**: React Context API

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fatahio.dev
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
src/
├── components/       # Reusable components (Navbar, Footer, Cards, etc.)
├── context/         # Context providers (ThemeContext)
├── data/           # JSON data files (projects, blog, personal info)
├── pages/          # Page components (Home, About, Projects, etc.)
├── types/          # TypeScript type definitions
├── App.tsx         # Main app component with routing
└── index.tsx       # Entry point
```

## Customization

### Update Personal Information

Edit `src/data/personalInfo.json` to update:
- Personal details (name, email, phone, location)
- Bio and skills
- Work experience
- Education
- Social media links

### Add Projects

Edit `src/data/projects.json` to add or modify projects. Each project should include:
- `id`: Unique identifier
- `title`: Project name
- `description`: Brief description
- `image`: Image URL
- `technologies`: Array of technologies used
- `liveUrl`: Live demo URL (optional)
- `githubUrl`: GitHub repository URL (optional)

### Add Blog Posts

Edit `src/data/blog.json` to add blog posts with:
- `id`: Unique identifier
- `title`: Post title
- `description`: Brief description
- `date`: Publication date
- `image`: Featured image URL (optional)
- `url`: Link to full post (optional)

### Update Profile Image

Replace the image URL in `src/data/personalInfo.json` with your actual profile image URL, or place your image in `public/images/` and reference it as `/images/your-image.jpg`.

## Deployment

This project is configured for deployment on Netlify:

1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure the build command as `npm run build`
4. Set the publish directory to `build`

## Contact Form Integration

The contact form currently uses a simulated submission. To integrate with a real service:

1. **Formspree**: Sign up at formspree.io and add your endpoint URL
2. **EmailJS**: Configure EmailJS service and add credentials
3. **Backend API**: Connect to your own backend API endpoint

Update the `handleSubmit` function in `src/pages/Contact.tsx` accordingly.

## License

This project is private and personal.

## Author

**Abdifatah Mawlid Hussein**
- Email: abdifatahmawlidhussein01@gmail.com
- Location: Borama, Somaliland

---

Built with ❤️ using React.js and Tailwind CSS
