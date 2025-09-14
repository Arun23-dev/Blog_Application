import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const featuredContent = [
  {
    id: 1,
    title: "The Future of AI in Content Creation",
    description:
      "Exploring how artificial intelligence is revolutionizing the way we create and consume digital content.",
    author: "Sarah Johnson",
    readTime: "8 min read",
    category: "Technology",
     image: "/images/test.png",
  },
  {
    id: 2,
    title: "Building Scalable Web Applications",
    description: "A comprehensive guide to architecting web applications that can handle millions of users.",
    author: "Mike Chen",
    readTime: "12 min read",
    category: "Development",
    image: "/images/test.png",
  },
  {
    id: 3,
    title: "The Psychology of User Experience",
    description:
      "Understanding how cognitive biases and psychological principles shape user behavior in digital products.",
    author: "Dr. Emily Rodriguez",
    readTime: "10 min read",
    category: "UX Design",
    image: "/images/test.png",
  },
  {
    id: 4,
    title: "Sustainable Tech: Green Computing",
    description: "How the tech industry is adapting to create more environmentally friendly solutions.",
    author: "Alex Thompson",
    readTime: "6 min read",
    category: "Sustainability",
     image: "/images/test.png",
  },
]

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredContent.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredContent.length) % featuredContent.length)
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-3xl md:text-4xl text-balance mb-4">Featured Content</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Discover our most popular articles and interviews, handpicked by our editorial team and AI recommendations.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {featuredContent.map((item) => (
                <div key={item.id} className="w-full flex-shrink-0">
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="relative h-64 md:h-96">
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />

<Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
  {item.category}
  </Badge>                        
                        </div>

                        <div className="p-8 md:p-12 flex flex-col justify-center">
                          <h3 className="font-heading font-bold text-2xl md:text-3xl text-balance mb-4">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-lg text-pretty mb-6">{item.description}</p>
                          <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {item.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {item.readTime}
                            </div>
                          </div>
                          <Button size="lg" className="w-fit">
                            Read More
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {featuredContent.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
