# AI Webpage Generator

A modern, responsive web application that generates complete HTML/CSS/JavaScript websites using Google's Gemini AI API. Transform your ideas into stunning, functional websites with just a description.

## ✨ Features

- **AI-Powered Generation**: Uses Google Gemini 1.5 Flash model for intelligent website creation
- **Live Preview**: Real-time preview of generated websites
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Professional UI**: Clean, modern interface with smooth animations
- **Download Functionality**: Export generated websites as HTML files
- **Error Handling**: Comprehensive error handling and user feedback

## 🚀 Technologies Used

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS v4
- **AI Integration**: Google Gemini API
- **Build Tool**: Vite
- **Package Manager**: npm

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile**: Single column layout with optimized touch targets
- **Tablet**: Balanced layout with medium preview area
- **Desktop**: Two-column layout with maximum preview space
- **Large Screens**: Enhanced spacing and larger preview areas

## 🎨 UI Features

- **Professional Loader**: Animated circular pixels loader on app initialization
- **Modern Design**: Clean white background with black accents
- **Smooth Animations**: CSS transitions and keyframe animations
- **Glass Morphism**: Subtle shadows and border effects
- **Interactive Elements**: Hover effects and loading states

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Husam-Moussa/AI-Web-Builder.git
   cd AI-Web-Builder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in your terminal)

## 🔧 Configuration

### API Key Setup
The application uses a hardcoded Google Gemini API key. For production use, consider:
- Moving the API key to environment variables
- Implementing proper API key management
- Adding rate limiting and usage monitoring

### Customization
- Modify the prompt in `src/App.jsx` to change the AI generation behavior
- Update styling in `src/App.css` for custom themes
- Adjust responsive breakpoints in `tailwind.config.js`

## 📁 Project Structure

```
AI-Web-Builder/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   ├── App.jsx            # Main application component
│   ├── App.css            # Custom styles
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎯 Usage

1. **Describe Your Website**: Enter a detailed description of the website you want to create
2. **Generate**: Click the "Generate Website" button to create your site
3. **Preview**: View the generated website in the live preview area
4. **Download**: Save the generated HTML file to your computer

## 🔒 Security Considerations

- The current implementation includes a hardcoded API key (for demonstration purposes)
- In production, implement proper API key management
- Consider adding rate limiting and user authentication
- Validate and sanitize user inputs

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Vite configuration
3. Deploy with a single click

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### Other Platforms
The application can be deployed to any static hosting service that supports React applications.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Husam Moussa**
- GitHub: [@Husam-Moussa](https://github.com/Husam-Moussa)

## 🙏 Acknowledgments

- Google Gemini API for AI-powered website generation
- React and Vite teams for the excellent development tools
- Tailwind CSS for the utility-first CSS framework
- The open-source community for inspiration and support

---

**Note**: This project is for educational and demonstration purposes. The hardcoded API key should be replaced with proper environment variable management for production use.
