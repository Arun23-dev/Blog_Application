
import { HeroSection } from "../components/hero-section";
import FeaturedCarousel from "../components/featured-carousel";
import LatestBlogs from "../components/latest-blogs";
import VideoInterviews from "../components/VideoInterview.jsx";
import CategoriesSection from "../components/categories-section";
import NewsletterSignup from "../components/newsletter-signup";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen " >
        <HeroSection />
        <FeaturedCarousel />
        <LatestBlogs />
        <VideoInterviews />
        <CategoriesSection />
        <NewsletterSignup />
        <Footer></Footer>
    </div>
  )
}
