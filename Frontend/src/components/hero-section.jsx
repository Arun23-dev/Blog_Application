import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle,Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-background via-muted/30 to-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading font-black text-4xl md:text-6xl lg:text-7xl text-balance mb-6">
            Discover Blogs, Interviews, and{" "}
            <span className="text-primary">Insights Driven by AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Your destination for professional content, engaging video interviews, and AI-powered content discovery that
            adapts to your interests.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8">
              Explore Latest Blogs
            </Button>
               <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
              Watch Interviews
              <Play className="ml-2 w-5 h-5" />
            </Button>
          </div>

        
        </div>
      </div>
    </section>
  );
}
