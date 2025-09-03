import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [websiteDescription, setWebsiteDescription] = useState('')
  const [generatedCode, setGeneratedCode] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const previewRef = useRef(null)

  // Initialize app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show loader for 2 seconds

    return () => clearTimeout(timer)
  }, [])

  // Initialize Gemini API
  const initializeGemini = () => {
    const API_KEY = 'AIzaSyB_LBh6rTqMJuOu_GJVR17085kN-7xPOIU'
    return API_KEY
  }

  // Check available models
  const checkAvailableModels = async () => {
    const API_KEY = initializeGemini()
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models?key=${API_KEY}`
      )
      const data = await response.json()
      console.log('Available models:', data)
      return data
    } catch (error) {
      console.error('Error checking models:', error)
    }
  }

  // Generate website code using Gemini
  const generateWebsite = async () => {
    if (!websiteDescription.trim()) {
      setError('Please enter a website description')
      return
    }

    setIsGenerating(true)
    setError('')
    setSuggestions([])

    try {
      const API_KEY = initializeGemini()
      console.log('Starting website generation...')
      
      const prompt = `Generate a complete, modern, and responsive website based on this description: "${websiteDescription}"

Please provide:
1. Complete HTML code with embedded CSS and JavaScript
2. Modern, professional design with clean HTML structure
3. Responsive layout that works on mobile and desktop
4. Relevant content and sections
5. Beautiful styling with CSS (gradients, shadows, modern UI elements)
6. Interactive elements with JavaScript where appropriate
7. Separate HTML, CSS, and JavaScript sections clearly organized

Return ONLY the complete HTML code with embedded CSS and JavaScript, no explanations or markdown formatting. The code should be ready to use immediately.`

      console.log('Making API request...')
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: prompt }]
              }
            ]
          })
        }
      )

      console.log('Response status:', response.status)
      if (!response.ok) {
        const errorText = await response.text()
        console.error('API Response Error:', errorText)
        throw new Error(`HTTP error! status: ${response.status}, response: ${errorText}`)
      }

      const result = await response.json()
      console.log('API Response received:', result)
      
      if (!result.candidates || !result.candidates[0] || !result.candidates[0].content) {
        throw new Error('Invalid response format from API')
      }

      const generatedHTML = result.candidates[0].content.parts[0].text
      console.log('Generated HTML length:', generatedHTML.length)
      console.log('First 200 characters:', generatedHTML.substring(0, 200))

      setGeneratedCode(generatedHTML)
      console.log('Generated code set successfully')

    } catch (err) {
      console.error('Error generating website:', err)
      setError(`Failed to generate website: ${err.message}`)
    } finally {
      setIsGenerating(false)
      console.log('Generation process completed')
    }
  }

  // Download generated code
  const downloadCode = () => {
    if (!generatedCode) return

    const blob = new Blob([generatedCode], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'generated-website.html'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  // Update preview when code changes
  useEffect(() => {
    if (previewRef.current && generatedCode) {
      const iframe = previewRef.current
      const doc = iframe.contentDocument || iframe.contentWindow.document
      doc.open()
      doc.write(generatedCode)
      doc.close()
    }
  }, [generatedCode])

  // Professional Loader Component
  const ProfessionalLoader = () => (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated Circular Pixels */}
        <div className="relative w-24 h-24">
          {/* Outer ring of pixels */}
          <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-3 h-3 bg-black rounded-full animate-pulse"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-40px)`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1.5s'
                }}
              />
            ))}
          </div>
          
          {/* Inner ring of pixels */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-black rounded-full animate-pulse"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateY(-25px)`,
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '1.2s'
                }}
              />
            ))}
          </div>
          
          {/* Center pixel */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-4 h-4 bg-black rounded-full animate-pulse" style={{ animationDuration: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  )

  // Show loader while app is initializing
  if (isLoading) {
    return <ProfessionalLoader />
  }

  return (
    <div className="min-h-screen p-2 sm:p-4 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-gray-600 font-semibold text-base sm:text-lg px-2">
            Transform your ideas into stunning websites with AI-powered code generation
          </p>
        </div>

        {/* Main Content - Responsive Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left Column - Input Section */}
          <div className="space-y-4 sm:space-y-6 order-1">
            {/* Website Description */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-black">Describe Your Website</h2>
              <textarea
                value={websiteDescription}
                onChange={(e) => setWebsiteDescription(e.target.value)}
                placeholder="e.g., I want a website for my photography business with a portfolio, contact form, and booking system..."
                className="w-full h-32 sm:h-40 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
              />
              <div className="mt-4 sm:mt-6">
                <button
                  onClick={generateWebsite}
                  disabled={isGenerating}
                  className="w-full px-4 sm:px-8 py-3 sm:py-4 bg-black text-white cursor-pointer rounded-lg hover:bg-gray-800 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-base sm:text-lg"
                >
                  {isGenerating ? 'Generating...' : 'Generate Website'}
                </button>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 sm:p-6 error-card">
                <p className="text-red-600 text-sm sm:text-base">{error}</p>
              </div>
            )}

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">Suggestions for Improvement</h3>
                <ul className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-gray-700 text-sm sm:text-base">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Download Button */}
            {generatedCode && (
              <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-black">Download Code</h3>
                <button
                  onClick={downloadCode}
                  className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-black cursor-pointer text-white rounded-lg hover:opacity-80 duration-300 transition-colors font-semibold text-sm sm:text-base"
                >
                  Download HTML File
                </button>
              </div>
            )}
          </div>

          {/* Right Column - Preview Section */}
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200 order-2">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-black">Live Preview</h2>
            {isGenerating ? (
              <div className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg flex items-center justify-center bg-gray-50">
                <div className="text-center px-4">
                  <div className="inline-block animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-b-2 border-black mb-3 sm:mb-4"></div>
                  <p className="text-lg sm:text-xl font-semibold text-gray-700">Generating your website...</p>
                  <p className="text-sm sm:text-base text-gray-500 mt-2">Creating HTML, CSS, and JavaScript code</p>
                </div>
              </div>
            ) : generatedCode ? (
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <iframe
                  ref={previewRef}
                  title="Generated Website Preview"
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px]"
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            ) : (
              <div className="h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500 px-4">
                  <p className="text-lg sm:text-xl mb-2 font-bold">Your generated website will appear here</p>
                  <p className="text-base sm:text-lg opacity-75 font-semibold">Start by describing your website idea above</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
