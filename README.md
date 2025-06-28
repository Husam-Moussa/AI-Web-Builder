# 🚀 AI Webpage Generator

An intelligent web application that generates complete, responsive websites using Google's Gemini AI. Simply describe your website idea, and watch as AI creates a professional landing page with HTML, CSS, and JavaScript.

## ✨ Features

- **AI-Powered Generation**: Uses Google Gemini API to create complete websites from text descriptions
- **Live Preview**: See your generated website in real-time within the application
- **Responsive Design**: All generated websites are mobile-friendly and responsive
- **Modern UI**: Beautiful, professional designs with gradients, shadows, and modern elements
- **Download Functionality**: Download the generated HTML file for immediate use
- **Smart Suggestions**: Get AI-powered suggestions for improving your website
- **User-Friendly Interface**: Clean, intuitive design with clear instructions

## 🛠️ Tech Stack

- **Frontend**: React 19 with Vite
- **Styling**: Tailwind CSS v4
- **AI Integration**: Google Generative AI (Gemini)
- **UI Components**: Custom React components with modern design

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd webgenerator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your Gemini API key**
   - Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key for use in the application

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Enter your Gemini API key when prompted

## 📖 How to Use

### 1. API Key Setup
- When you first open the application, you'll be prompted to enter your Gemini API key
- Click the link to get your API key from Google AI Studio
- Enter your key and click "Save"

### 2. Describe Your Website
- In the text area, describe the website you want to create
- Be specific about:
  - Type of business/service
  - Key features you want
  - Target audience
  - Design preferences

### 3. Generate Your Website
- Click the "Generate Website" button
- Wait for the AI to create your website (usually takes 10-30 seconds)
- View the live preview on the right side

### 4. Download and Use
- Click "Download HTML File" to save your website
- Open the downloaded file in any web browser
- The website is ready to use!

## 💡 Example Descriptions

Here are some example descriptions you can try:

```
"I want a website for my photography business with a portfolio gallery, contact form, and booking system for photo sessions."
```

```
"Create a restaurant website with menu, online ordering, location map, and customer reviews section."
```

```
"I need a personal blog website with dark theme, article categories, and social media links."
```

```
"Design a fitness trainer website with workout plans, client testimonials, and online booking calendar."
```

## 🔧 Customization

### Modifying the AI Prompts
You can customize the AI prompts in `src/App.jsx`:

- **Main generation prompt**: Lines 47-58
- **Suggestions prompt**: Lines 67-75

### Styling
- Main styles are in `src/App.css`
- Uses Tailwind CSS for utility classes
- Custom CSS for specific components

## 🎨 Generated Website Features

Each generated website includes:

- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Modern Design**: Clean, professional appearance
- **Interactive Elements**: Hover effects, animations, and user interactions
- **SEO-Friendly**: Proper HTML structure and meta tags
- **Fast Loading**: Optimized code for quick page loads
- **Cross-Browser Compatible**: Works in all modern browsers

## 🔒 Security & Privacy

- API keys are stored locally in the browser (not sent to any server)
- No user data is collected or stored
- Generated websites are created locally in your browser
- All processing happens through Google's secure Gemini API

## 🚨 Troubleshooting

### Common Issues

1. **"Failed to generate website" error**
   - Check your API key is correct
   - Ensure you have sufficient Gemini API credits
   - Try refreshing the page

2. **Preview not showing**
   - Check browser console for errors
   - Ensure JavaScript is enabled
   - Try a different browser

3. **Download not working**
   - Check browser download settings
   - Ensure pop-up blockers are disabled
   - Try right-clicking the download button

### API Limits
- Gemini API has rate limits and usage quotas
- Free tier includes 15 requests per minute
- Consider upgrading for higher limits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Google Gemini AI for providing the AI capabilities
- React team for the amazing framework
- Tailwind CSS for the utility-first styling
- Vite for the fast build tool

## 📞 Support

If you encounter any issues or have questions:

1. Check the troubleshooting section above
2. Search existing GitHub issues
3. Create a new issue with detailed information

---

**Happy website generating! 🎉**
