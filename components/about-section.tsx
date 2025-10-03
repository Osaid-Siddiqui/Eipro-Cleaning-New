"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const features = ["Licensed & Insured", "Eco-Friendly Products", "Experienced Team", "Satisfaction Guaranteed"]

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image src="/professional-cleaning-team-in-uniform-with-cleanin.jpg" alt="Professional cleaning team" fill className="object-cover" />
            </div>
            {/* Accent Circle */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/20 rounded-full -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full -z-10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              About Us
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              New Jersey's Most Trusted Cleaning Company
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Elaine's Pro Cleaning Services (EIPRO) has been New Jersey's most trusted cleaning company since 2002. We
              take pride in delivering spotless, professional results for homes and businesses.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our dedicated team of cleaning professionals brings over two decades of experience, ensuring every space
              we touch sparkles with cleanliness and care.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 bg-muted/50 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-1">5.0</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
