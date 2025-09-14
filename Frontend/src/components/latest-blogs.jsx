import { Clock, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const blogPosts = [
  {
    id: 1,
    title: "10 Essential JavaScript Tips for Modern Development",
    author: "Alex Thompson",
    category: "Programming",
    readTime: "7 min read",
    date: "2 days ago",
    image: "/images/test.png",
    excerpt:
      "Master these JavaScript techniques to write cleaner, more efficient code that scales with your applications.",
  },
  {
    id: 2,
    title: "The Art of Minimalist Design",
    author: "Sophie Miller",
    category: "Design",
    readTime: "5 min read",
    date: "3 days ago",
     image: "/images/test.png",
    excerpt: "Discover how less can be more in creating powerful, user-focused design experiences.",
  },
  {
    id: 3,
    title: "Cryptocurrency Market Analysis 2024",
    author: "Robert Chang",
    category: "Finance",
    readTime: "12 min read",
    date: "5 days ago",
    image: "/images/test.png",
    excerpt: "An in-depth look at market trends, emerging opportunities, and risk factors in the crypto space.",
  },
  {
    id: 4,
    title: "Sustainable Living: Small Changes, Big Impact",
    author: "Maria Garcia",
    category: "Lifestyle",
    readTime: "8 min read",
    date: "1 week ago",
     image: "/images/test.png",
    excerpt: "Simple lifestyle adjustments that can significantly reduce your environmental footprint.",
  },
  {
    id: 5,
    title: "Machine Learning for Beginners",
    author: "Dr. James Wilson",
    category: "Technology",
    readTime: "15 min read",
    date: "1 week ago",
   image: "/images/test.png",
    excerpt: "A comprehensive introduction to ML concepts, algorithms, and practical applications.",
  },
  {
    id: 6,
    title: "The Future of Remote Collaboration",
    author: "Lisa Park",
    category: "Business",
    readTime: "9 min read",
    date: "2 weeks ago",
    image: "/images/test.png",
    excerpt: "How emerging technologies are reshaping the way distributed teams work together.",
  },
]

export default function LatestBlogs() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Latest Blogs
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Stay updated with our freshest content and insights
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 backdrop-blur px-3 py-1 text-sm font-medium text-gray-800">
                    {post.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="mb-3 font-montserrat text-xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                  {post.title}
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-2">{post.excerpt}</p>

                <div className="mb-4 flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="mr-1 h-4 w-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>

                <Button variant="ghost" className="group/btn p-0 h-auto font-medium text-cyan-600 hover:text-cyan-700">
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white bg-transparent"
          >
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
