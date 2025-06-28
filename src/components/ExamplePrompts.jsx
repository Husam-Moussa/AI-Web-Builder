import { useState } from 'react'

const ExamplePrompts = ({ onSelectPrompt }) => {
  const [showExamples, setShowExamples] = useState(false)

  const examples = [
    {
      title: "Photography Business",
      description: "I want a website for my photography business with a portfolio gallery, contact form, and booking system for photo sessions.",
      category: "Business"
    },
    {
      title: "Restaurant Website",
      description: "Create a restaurant website with menu, online ordering, location map, and customer reviews section.",
      category: "Food & Dining"
    },
    {
      title: "Personal Blog",
      description: "I need a personal blog website with dark theme, article categories, and social media links.",
      category: "Personal"
    },
    {
      title: "Fitness Trainer",
      description: "Design a fitness trainer website with workout plans, client testimonials, and online booking calendar.",
      category: "Health & Fitness"
    },
    {
      title: "E-commerce Store",
      description: "Build an online store for handmade jewelry with product catalog, shopping cart, and secure checkout.",
      category: "E-commerce"
    },
    {
      title: "Real Estate Agency",
      description: "Create a real estate website with property listings, search filters, agent profiles, and contact forms.",
      category: "Real Estate"
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Example Prompts</h3>
        <button
          onClick={() => setShowExamples(!showExamples)}
          className="text-grey-600 duration-300 font-semibold hover:text-gray-700 text-sm cursor-pointer"
        >
          {showExamples ? 'Hide Examples' : 'Show Examples'}
        </button>
      </div>
      
      {showExamples && (
        <div className="space-y-3">
          {examples.map((example, index) => (
            <div
              key={index}
              className="p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-200"
              onClick={() => onSelectPrompt(example.description)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{example.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{example.description}</p>
                  <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {example.category}
                  </span>
                </div>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium ml-2">
                  Use This
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExamplePrompts 