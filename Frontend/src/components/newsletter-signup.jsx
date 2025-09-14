import React, { useState } from "react";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-16 bg-background dark:bg-card">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* Icon */}
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/20 p-3">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>

          {/* Heading */}
          <h2 className="mb-4 font-montserrat text-3xl font-bold text-foreground dark:text-card-foreground md:text-4xl">
            Stay Updated
          </h2>

          {/* Subtext */}
          <p className="mb-8 text-lg text-muted-foreground dark:text-muted-foreground">
            Get the latest blogs, interviews, and AI-powered insights delivered
            straight to your inbox.
          </p>

          {/* Subscription Success */}
          {isSubscribed ? (
            <div className="flex items-center justify-center space-x-2 text-foreground dark:text-card-foreground">
              <CheckCircle className="h-6 w-6" />
              <span className="text-lg font-medium">
                Thank you for subscribing!
              </span>
            </div>
          ) : (
            /* Subscription Form */
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 sm:flex-row sm:gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-card text-card-foreground border border-border placeholder:text-muted-foreground dark:bg-background dark:text-foreground dark:placeholder:text-muted-foreground"
                required
              />
              <Button
                type="submit"
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium"
              >
                Subscribe Now
              </Button>
            </form>
          )}

          {/* Footer note */}
          <p className="mt-4 text-sm text-muted-foreground dark:text-muted-foreground">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  );
}
