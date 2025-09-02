import { Shield, GraduationCap, Users, Rocket } from "lucide-react"

export default function CoreValues() {
  const values = [
    {
      icon: Shield,
      title: "Authenticity",
      description:
        "We believe in genuine, honest content that reflects real experiences and provides practical value. No fluff, no fake promises—just authentic insights that make a difference.",
      iconColor: "bg-purple-100 text-purple-600",
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description:
        "We're committed to staying curious and constantly expanding our knowledge. Our content evolves with the times, ensuring readers always get the most current and relevant information.",
      iconColor: "bg-purple-100 text-purple-600",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Our readers are at the heart of everything we do. We listen to feedback, engage in meaningful conversations, and create content that truly serves our community's needs and interests.",
      iconColor: "bg-cyan-100 text-cyan-600",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description:
        "We embrace new ideas, technologies, and approaches to content creation. Our goal is to push boundaries and find fresh ways to inform, inspire, and engage our readers.",
      iconColor: "bg-indigo-100 text-indigo-600",
    },
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-balance">Our Core Values</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-pretty">
            The principles that guide everything we do and every piece of content we create
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${value.iconColor} flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-pretty">{value.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
