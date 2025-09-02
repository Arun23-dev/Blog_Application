import React from 'react';
import { 
  Users, 
  Award, 
  Target, 
  Heart, 
  Globe, 
  BookOpen, 
  PenTool, 
  Camera,
  Code,
  Palette,
  Music,
  Utensils,
  Plane,
  Car,
  Home,
  Briefcase,
  GraduationCap,
  Heart as HeartIcon,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Github,
  Calendar,
  Clock,
  TrendingUp,
  Zap,
  Shield,
  Lightbulb,
  Rocket,
  Coffee,
  Smile
} from 'lucide-react';
import { Link } from 'react-router';

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      bio: "Passionate about technology and innovation. Leading our mission to democratize knowledge sharing.",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Michael Chen",
      role: "Head of Content",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "Content strategist with 10+ years experience in digital media and storytelling.",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Emily Rodriguez",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Full-stack developer passionate about creating seamless user experiences.",
      social: {
        linkedin: "#",
        github: "#",
        twitter: "#"
      }
    },
    {
      name: "David Kim",
      role: "Design Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "Creative designer focused on user-centered design and visual storytelling.",
      social: {
        linkedin: "#",
        behance: "#",
        instagram: "#"
      }
    }
  ];

  const stats = [
    { number: "1,250+", label: "Articles Published", icon: BookOpen, color: "text-blue-600" },
    { number: "85+", label: "Expert Writers", icon: Users, color: "text-green-600" },
    { number: "2.5M+", label: "Total Views", icon: TrendingUp, color: "text-purple-600" },
    { number: "12", label: "Categories", icon: Target, color: "text-orange-600" }
  ];

  const values = [
    {
      title: "Quality Content",
      description: "We believe in publishing only the highest quality, well-researched content that provides real value to our readers.",
      icon: Star,
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      title: "Community First",
      description: "Our community of writers and readers is at the heart of everything we do. We foster meaningful connections and discussions.",
      icon: Heart,
      color: "bg-red-100 text-red-600"
    },
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to improve the content creation and consumption experience.",
      icon: Lightbulb,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Accessibility",
      description: "We're committed to making knowledge accessible to everyone, regardless of their background or location.",
      icon: Globe,
      color: "bg-green-100 text-green-600"
    }
  ];

  const categories = [
    { name: "Technology", icon: Code, count: 45, color: "bg-blue-500" },
    { name: "Development", icon: BookOpen, count: 38, color: "bg-green-500" },
    { name: "Design", icon: Palette, count: 32, color: "bg-purple-500" },
    { name: "Photography", icon: Camera, count: 28, color: "bg-pink-500" },
    { name: "Music", icon: Music, count: 25, color: "bg-yellow-500" },
    { name: "Food", icon: Utensils, count: 22, color: "bg-orange-500" },
    { name: "Travel", icon: Plane, count: 35, color: "bg-indigo-500" },
    { name: "Automotive", icon: Car, count: 18, color: "bg-red-500" },
    { name: "Home & Garden", icon: Home, count: 30, color: "bg-teal-500" },
    { name: "Business", icon: Briefcase, count: 42, color: "bg-gray-500" },
    { name: "Education", icon: GraduationCap, count: 27, color: "bg-cyan-500" },
    { name: "Health & Fitness", icon: HeartIcon, count: 33, color: "bg-rose-500" }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a vision to create a platform for sharing knowledge and stories."
    },
    {
      year: "2021",
      title: "First 100 Articles",
      description: "Reached our first milestone with 100 high-quality articles published."
    },
    {
      year: "2022",
      title: "Community Growth",
      description: "Welcomed 50+ writers and reached 1 million total views."
    },
    {
      year: "2023",
      title: "Platform Evolution",
      description: "Launched advanced features including AI-powered search and recommendations."
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded to serve readers and writers from over 100 countries worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Our Story
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto">
              We're passionate about connecting people through knowledge, stories, and shared experiences. 
              Our platform brings together writers, creators, and readers from around the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blogs"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explore Our Content
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To democratize knowledge sharing by providing a platform where anyone can share their expertise, 
                experiences, and insights with the world. We believe that everyone has a story worth telling 
                and knowledge worth sharing.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Content</h3>
                    <p className="text-gray-600">Curated, well-researched articles that provide real value</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Global Community</h3>
                    <p className="text-gray-600">Connecting writers and readers from around the world</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Innovation</h3>
                    <p className="text-gray-600">Leveraging technology to enhance the reading experience</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">85+</div>
                    <div className="text-sm text-gray-600">Expert Writers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that tell our story of growth and community impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 mb-4">{stat.label}</div>
                  <div className="flex justify-center">
                    <Icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Content Categories</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore diverse topics across multiple categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  to={`/blogs?category=${category.name.toLowerCase()}`}
                  className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.count} articles
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones in our growth and development
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200"></div>
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 px-8">
                  <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2 px-8"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate people behind our platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    {Object.entries(member.social).map(([platform, url]) => {
                      const Icon = platform === 'linkedin' ? Linkedin : 
                                  platform === 'twitter' ? Twitter : 
                                  platform === 'github' ? Github : 
                                  platform === 'instagram' ? Instagram : 
                                  platform === 'facebook' ? Facebook : 
                                  platform === 'youtube' ? Youtube : null;
                      return Icon ? (
                        <a
                          key={platform}
                          href={url}
                          className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're a writer looking to share your knowledge or a reader seeking insights, 
            we'd love to have you as part of our growing community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Writing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/blogs"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">hello@modernblog.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;