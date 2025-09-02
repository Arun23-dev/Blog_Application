
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Mail, Users, TrendingUp, Clock, CheckCircle, Sparkles } from "lucide-react"

export default function Subscribe() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setIsLoading(false)
    setIsSubscribed(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  const stats = [
    {
      icon: Clock,
      value: "Weekly",
      label: "Delivery",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: Users,
      value: "50K+",
      label: "Subscribers",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Open Rate",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
  ]

  if (isSubscribed) {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-bounce-in">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the Community!</h2>
            <p className="text-xl text-gray-600 mb-8">
              Thank you for subscribing! Check your inbox for a welcome email with exclusive content.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-600">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Your first newsletter arrives this week</span>
              <Sparkles className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-6 shadow-lg">
            <Mail className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6 text-balance">Stay Updated</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty leading-relaxed">
            Subscribe to our newsletter and never miss out on the latest insights, tips, and stories. Join thousands of
            readers who trust us for quality content.
          </p>
        </div>

        {/* Subscription Form */}
        <Card className="p-8 mb-12 shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 text-lg border-2 border-gray-200 focus:border-purple-500 transition-colors"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-14 px-8 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Subscribing...
                </div>
              ) : (
                "Subscribe Now"
              )}
            </Button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            No spam, ever. Unsubscribe at any time. Read our{" "}
            <a href="#" className="text-purple-600 hover:text-purple-700 underline">
              privacy policy
            </a>
            .
          </p>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-6 text-center border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bgColor} rounded-xl mb-4`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-60">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Secure & Encrypted</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-sm text-gray-600">Ad-Free Content</span>
          </div>
        </div>
      </div>
    </section>
  )
}
