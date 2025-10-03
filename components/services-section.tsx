"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Home, HardHat, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description:
        "Comprehensive cleaning that reaches every corner, perfect for seasonal refreshes or special occasions.",
      image: "/deep-cleaning-sparkling-kitchen.jpg",
    },
    {
      icon: HardHat,
      title: "Post-Construction Cleaning",
      description: "Remove dust, debris, and construction residue to reveal your beautiful new space.",
      image: "/post-construction-cleaning-new-home.jpg",
    },
    {
      icon: Home,
      title: "Regular Cleaning",
      description: "Maintain a consistently clean and healthy environment with our regular cleaning services.",
      image: "/regular-home-cleaning-living-room.jpg",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Choose from weekly, biweekly, or monthly cleaning plans that fit your lifestyle and budget.",
      image: "/cleaning-schedule-calendar-planner.jpg",
    },
  ]

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-card to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Professional Cleaning Solutions for Every Need
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From deep cleaning to regular maintenance, we offer comprehensive services tailored to your specific
            requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={`group overflow-hidden border-2 hover:border-primary transition-all duration-500 cursor-pointer ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-0">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

                    {/* Icon */}
                    <div className="absolute top-6 left-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <div
                      className={`flex items-center gap-2 text-primary font-medium transition-all duration-300 ${
                        hoveredIndex === index ? "translate-x-2" : ""
                      }`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
