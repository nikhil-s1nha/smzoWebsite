# SMZO Dental Clinic Website

A modern, responsive dental clinic website built with Next.js, featuring smooth animations, clean design, and excellent user experience.

## 🚀 Features

- **Modern Design**: Clean, professional design with dental-themed color scheme
- **Smooth Animations**: Framer Motion animations for engaging user interactions
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Proper meta tags and structured content
- **Accessible**: WCAG compliant design patterns

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom animations
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel ready

## 📁 Project Structure

```
smzoWebsite/
├── app/
│   ├── globals.css          # Global styles and Tailwind config
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Homepage
│   ├── about/               # About Us pages
│   ├── patient-info/        # Patient information pages
│   ├── services/            # Dental services pages
│   ├── dental-health/       # Dental health education
│   └── contact/             # Contact page
├── components/              # Reusable components
├── public/                  # Static assets
└── package.json            # Dependencies and scripts
```

## 🎨 Design Features

### Color Palette
- **Primary Blue**: Professional and trustworthy
- **Dental Green**: Health and wellness focused
- **Neutral Grays**: Clean and modern feel

### Animations
- Smooth page transitions
- Hover effects on interactive elements
- Scroll-triggered animations
- Floating elements for visual interest

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages Structure

### Main Navigation
- **Home**: Hero section, features, services preview, testimonials
- **About Us**: Practice overview, team information
- **Patient Info**: Reviews, first visit, registration, scheduling, policies
- **Services**: All dental services offered
- **Dental Health**: Educational content and tips
- **Contact**: Location, hours, contact form

### Key Features
- **Appointment Booking**: Easy online scheduling
- **Patient Portal**: Forms and information access
- **Service Showcase**: Detailed service descriptions
- **Testimonials**: Patient reviews and feedback
- **Educational Content**: Dental health tips and information

## 🎯 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:
```javascript
colors: {
  primary: { /* Blue shades */ },
  dental: { /* Green shades */ }
}
```

### Content
- Update text content in component files
- Replace images in the `public/` directory
- Modify contact information in navigation and footer

### Animations
Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'fade-in': 'fadeIn 0.6s ease-in-out',
  'slide-up': 'slideUp 0.8s ease-out',
  // Add more custom animations
}
```

## 📦 Build & Deploy

1. **Build for production**:
   ```bash
   npm run build
   ```

2. **Start production server**:
   ```bash
   npm start
   ```

3. **Deploy to Vercel**:
   ```bash
   npx vercel
   ```

## 🔧 Development

### Adding New Pages
1. Create a new directory in `app/`
2. Add `page.tsx` file
3. Update navigation in `components/Navigation.tsx`

### Adding New Components
1. Create component file in `components/`
2. Import and use in pages
3. Follow existing component patterns

### Styling Guidelines
- Use Tailwind CSS classes
- Follow the established color scheme
- Maintain consistent spacing and typography
- Add animations for interactive elements

## 📞 Support

For questions or support, please contact the development team.

## 📄 License

This project is licensed under the MIT License. 