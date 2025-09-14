import React from "react";
import { Github, Twitter, Linkedin, Youtube, Instagram, Mail } from "lucide-react";

const footerLinks = {
  Company: [
    { name: "About", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Press", href: "#" },
  ],
  Content: [
    { name: "Latest Blogs", href: "#" },
    { name: "Video Interviews", href: "#" },
    { name: "Categories", href: "#" },
    { name: "Featured", href: "#" },
  ],
  Resources: [
    { name: "Help Center", href: "#" },
    { name: "Community", href: "#" },
    { name: "Guidelines", href: "#" },
    { name: "API", href: "#" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "GDPR", href: "#" },
  ],
};

const socialLinks = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "GitHub", icon: Github, href: "#" },
  { name: "Email", icon: Mail, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-card dark:bg-background text-card-foreground dark:text-foreground">
      <div className="container px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary dark:bg-secondary"></div>
              <span className="font-montserrat text-xl font-bold">BlogHub</span>
            </div>
            <p className="mb-6 text-muted-foreground dark:text-muted-foreground max-w-md">
              Discover curated content, exclusive interviews, and AI-powered insights. 
              Your gateway to knowledge and inspiration.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted dark:bg-muted-foreground text-muted-foreground dark:text-muted transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 font-montserrat text-lg font-semibold">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground dark:text-muted hover:text-primary dark:hover:text-primary-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border dark:border-muted pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-muted-foreground dark:text-muted">© 2024 BlogHub. All rights reserved.</p>
            <p className="text-sm text-muted-foreground dark:text-muted">Powered by our custom CMS & AI insights</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
