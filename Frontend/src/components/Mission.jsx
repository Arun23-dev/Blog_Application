import React from 'react'
   import { Check } from "lucide-react"


export default function Mission() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Our Mission</h2>

        <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 max-w-3xl mx-auto">
          To bridge the gap between information and inspiration, creating a space where readers can discover practical
          wisdom, creative solutions, and meaningful perspectives that enhance their daily lives and broaden their
          horizons.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium">Quality Content</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium">Expert Authors</span>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-green-500 rounded-full p-1">
              <Check className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-medium">Community Focus</span>
          </div>
        </div>
      </div>
    </section>
  )
}

