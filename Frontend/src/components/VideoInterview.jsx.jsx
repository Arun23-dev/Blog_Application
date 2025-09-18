import { Play, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const videoInterviews = [
  {
    id: 1,
    title: "Building the Future: AI Startup Founder's Journey",
    guest: "Sarah Chen, CEO of TechVision",
    duration: "28:45",
    views: "12.5K",
    thumbnail: "/test.png",
    description: "An inspiring conversation about building AI-first companies and navigating the startup ecosystem.",
  },
  {
    id: 2,
    title: "Sustainable Design: Creating for Tomorrow",
    guest: "Marcus Rodriguez, Design Director",
    duration: "22:30",
    views: "8.9K",
   thumbnail: "/test.png",
    description: "Exploring how design thinking can drive environmental sustainability and social impact.",
  },
  {
    id: 3,
    title: "The Psychology of Digital Marketing",
    guest: "Dr. Emily Watson, Marketing Psychologist",
    duration: "35:12",
    views: "15.2K",
    thumbnail: "/test.png",
    description: "Understanding consumer behavior and psychological triggers in the digital age.",
  },
  {
    id: 4,
    title: "Blockchain Beyond Cryptocurrency",
    guest: "David Kim, Blockchain Developer",
    duration: "31:18",
    views: "9.7K",
  thumbnail: "/test.png",
    description: "Discovering real-world applications of blockchain technology across various industries.",
  },
]

export default function VideoInterviews() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Video Interviews
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Exclusive conversations with industry leaders and innovators
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {videoInterviews.map((video) => (
            <Card
              key={video.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button
                    size="lg"
                    className="rounded-full bg-white/90 text-gray-900 hover:bg-white hover:scale-110 transition-all duration-300"
                  >
                    <Play className="h-6 w-6 ml-1" fill="currentColor" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 rounded bg-black/70 px-2 py-1 text-sm text-white">
                  {video.duration}
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="mb-2 font-montserrat text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                  {video.title}
                </h3>
                <p className="mb-3 text-cyan-600 font-medium">{video.guest}</p>
                <p className="mb-4 text-gray-600 dark:text-gray-300">{video.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Eye className="mr-1 h-4 w-4" />
                      {video.views} views
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {video.duration}
                    </div>
                  </div>
                  <Button variant="ghost" className="text-cyan-600 hover:text-cyan-700">
                    Watch Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-700 hover:to-emerald-700"
          >
            View All Interviews
          </Button>
        </div>
      </div>
    </section>
  )
}
