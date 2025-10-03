"use client"

import { Button } from "@/components/ui/button"
import { Star, Phone, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background pt-20"
    >
      {/* Animated Stars Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="absolute text-secondary/20 animate-float"
            style={{
              width: `${30 + i * 10}px`,
              height: `${30 + i * 10}px`,
              top: `${20 + i * 15}%`,
              right: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
            }}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Circular Accent */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 border-4 border-secondary/20 rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block" />
      <div className="absolute top-1/4 left-1/4 w-80 h-80 border-2 border-secondary/10 rounded-full -translate-x-1/2 -translate-y-1/2 hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Star className="w-4 h-4 fill-secondary text-secondary" />
            <span className="text-sm font-medium">Best Rated in New Jersey</span>
            <Star className="w-4 h-4 fill-secondary text-secondary" />
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-bold mb-6 text-balance transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Best Rated Professional <span className="text-primary">Cleaning Service</span> in New Jersey
          </h1>

          {/* Subheading */}
          <p
            className={`text-xl md:text-2xl text-muted-foreground mb-4 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Since 2002
          </p>

          <p
            className={`text-lg text-muted-foreground mb-10 max-w-2xl mx-auto transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Serving Passaic, Morris, Bergen, Essex, and Hudson Counties with spotless, professional results for homes
            and businesses.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full group"
              asChild
            >
              <a href="#contact">
                Get a Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-secondary text-lg px-8 py-6 rounded-full"
              asChild
            >
              <a href="tel:201-989-5646">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-secondary fill-secondary" />
                ))}
              </div>
              <span className="font-medium">5.0 Rating</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-medium">20+ Years</span> of Excellence
            </div>
            <div className="h-4 w-px bg-border" />
            <div>
              <span className="font-medium">1000+</span> Happy Clients
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-card"
          />
        </svg>
      </div>
    </section>
  )
}
