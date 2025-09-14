import {
  Code,
  Palette,
  TrendingUp,
  Heart,
  Cpu,
  Camera,
  Music,
  Plane,
  Car,
  Briefcase,
  GraduationCap,
  Utensils,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  { name: "Technology", icon: Cpu, count: 124, color: "from-blue-500 to-cyan-500" },
  { name: "Design", icon: Palette, count: 89, color: "from-purple-500 to-pink-500" },
  { name: "Business", icon: TrendingUp, count: 156, color: "from-green-500 to-emerald-500" },
  { name: "Health", icon: Heart, count: 67, color: "from-red-500 to-rose-500" },
  { name: "Programming", icon: Code, count: 203, color: "from-indigo-500 to-blue-500" },
  { name: "Photography", icon: Camera, count: 45, color: "from-yellow-500 to-orange-500" },
  { name: "Music", icon: Music, count: 78, color: "from-violet-500 to-purple-500" },
  { name: "Travel", icon: Plane, count: 92, color: "from-teal-500 to-cyan-500" },
  { name: "Automotive", icon: Car, count: 34, color: "from-gray-500 to-slate-500" },
  { name: "Career", icon: Briefcase, count: 118, color: "from-amber-500 to-yellow-500" },
  { name: "Education", icon: GraduationCap, count: 87, color: "from-emerald-500 to-green-500" },
  { name: "Food", icon: Utensils, count: 56, color: "from-orange-500 to-red-500" },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Explore by Topic
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Discover content across all your favorite subjects
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <Card
                key={category.name}
                className="group cursor-pointer overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 font-montserrat text-lg font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{category.count} articles</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Can't find what you're looking for?{" "}
            <button className="font-medium text-cyan-600 hover:text-cyan-700 transition-colors">
              Browse all categories
            </button>
          </p>
        </div>
      </div>
    </section>
  )
}
