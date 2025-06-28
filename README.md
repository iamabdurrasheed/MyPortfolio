# 🚀 3D Developer Portfolio

A modern, responsive portfolio website template built with React.js, Three.js, and Tailwind CSS. Perfect for showcasing projects, skills, and experience with stunning 3D animations and interactive elements.

## 🌟 Features

- **Modern Design**: Clean, professional UI with glassmorphism effects
- **3D Animations**: Interactive 3D models using Three.js and React Three Fiber
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Contact Form**: Functional contact form with EmailJS integration
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Project Showcase**: Detailed project cards with tech stack visualization
- **Skills Section**: Interactive technology icons and proficiency display
- **Education Timeline**: Visual representation of academic journey

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Library
- **Three.js** - 3D Graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Navigation
- **React Parallax Tilt** - Tilt effects

### Tools & Services
- **Vite** - Build tool and development server
- **EmailJS** - Email service for contact form
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

##  Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5174`

### Build for Production

```bash
npm run build
```

## 🎯 Customization

This portfolio template is designed to be easily customizable:

### Content Updates
- Update personal information in `src/constants/index.js`
- Modify project details in the projects array
- Edit skills and technologies in the technologies array
- Update education timeline in `src/components/Education.jsx`
- Customize about section in `src/components/About.jsx`

### Styling
- Modify color schemes in `tailwind.config.cjs`
- Update glassmorphism effects in `src/index.css`
- Customize animations in `src/utils/motion.js`

### 3D Models
- Replace 3D models in the `public/` directory
- Update model references in canvas components
- Adjust lighting and camera positions as needed

## 🌐 Live Demo

[View Live Demo](https://your-portfolio-url.com)

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Fork the project
- Create a feature branch (`git checkout -b feature/AmazingFeature`)
- Commit your changes (`git commit -m 'Add some AmazingFeature'`)
- Push to the branch (`git push origin feature/AmazingFeature`)
- Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Three.js Community** for amazing 3D capabilities
- **React Three Fiber** for seamless React integration
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- All the open-source contributors who made this possible

---

⭐ **Star this repository if you found it helpful!**

**Made with ❤️ for developers by developers**
