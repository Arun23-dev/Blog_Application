import React from 'react'
import { PenTool } from "lucide-react"

function ModernBlogHeader() {
  return (
   <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-2xl">
            <PenTool className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl font-bold text-gray-900 mb-6 text-balance">ModernBlog</h1>

        {/* Subtitle */}
        <p className="text-2xl text-purple-500 mb-8 text-balance">Insights, stories, and tips for modern living</p>

        {/* Description */}
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto text-pretty">
          Where creativity meets innovation. We curate thoughtful content that inspires, educates, and empowers readers
          to navigate the complexities of contemporary life with confidence and style.
        </p>
      </div>
    </div>
  )
}

export default ModernBlogHeader