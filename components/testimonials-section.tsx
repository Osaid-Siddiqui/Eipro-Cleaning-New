"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Passaic County",
      rating: 5,
      text: "Elaine's team made my house spotless! They're professional, thorough, and always on time. I've been using their services for over 3 years and couldn't be happier.",
      image: "/professional-woman-smiling-headshot.png",
    },
    {
      name: "Michael Chen",
      location: "Bergen County",
      rating: 5,
      text: "Outstanding post-construction cleaning! They transformed our newly renovated home from a dusty mess to a pristine space. Highly recommend their services.",
      image: "/professional-man-smiling-headshot.png",
    },
    {
      name: "Jennifer Martinez",
      location: "Morris County",
      rating: 5,
      text: "The best cleaning service in New Jersey! Their attention to detail is incredible. Every corner sparkles after they visit. Worth every penny!",
      image: "/happy-woman-smiling-headshot.jpg",
    },
    {
      name: "David Thompson",
      location: "Essex County",
      rating: 5,
      text: "Professional, reliable, and thorough. EIPRO has been cleaning our office for 2 years. Our employees love coming to a clean workspace every morning.",
      image: "/business-man-smiling-headshot.jpg",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 bg-card relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            Testimonials
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <Card
            className={`border-2 transition-all duration-700 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-secondary fill-secondary" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-muted-foreground text-sm">{testimonials[currentIndex].location}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-8" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
