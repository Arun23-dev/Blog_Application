import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Blog Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-footer-accent">BlogName</h3>
            <p className="text-footer-muted leading-relaxed">
              Sharing insights, stories, and inspiration through thoughtful writing and meaningful conversations.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-footer-muted hover:text-footer-accent transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-footer-muted hover:text-footer-accent transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-footer-muted hover:text-footer-accent transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-footer-muted hover:text-footer-accent transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Categories', 'Archive', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-footer-muted hover:text-footer-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="space-y-2">
              {['Technology', 'Lifestyle', 'Travel', 'Food', 'Photography'].map((category) => (
                <li key={category}>
                  <a 
                    href="#" 
                    className="text-footer-muted hover:text-footer-accent transition-colors duration-200"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p className="text-footer-muted text-sm">
              Subscribe to get the latest posts delivered to your inbox.
            </p>
            <div className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 bg-footer-background border border-footer-muted/30 rounded-lg text-footer-foreground placeholder-footer-muted focus:outline-none focus:border-footer-accent transition-colors duration-200"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1.5 text-footer-accent hover:bg-footer-accent hover:text-footer-background rounded-md transition-all duration-200">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-footer-muted/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-footer-muted text-sm">
                © 2024 BlogName. All rights reserved.
              </p>
              <div className="flex space-x-4 text-sm">
                <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-footer-muted hover:text-footer-accent transition-colors duration-200">
                  Cookie Policy
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-1 text-footer-muted text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-footer-accent" />
              <span>by the BlogName team</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;