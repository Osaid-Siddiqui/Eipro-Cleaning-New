"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"

export function BeforeAfterSection() {
  const [sliderValue, setSliderValue] = useState([50])
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

  const comparisons = [
    {
      before: "/messy-dirty-kitchen-before-cleaning.jpg",
      after: "/spotless-clean-kitchen-after-professional-cleaning.jpg",
      title: "Kitchen Deep Clean",
    },
    {
      before: "/dusty-construction-site-room.jpg",
      after: "/pristine-clean-room-after-construction-cleaning.jpg",
      title: "Post-Construction",
    },
  ]

  return (
    <section id="before-after" ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Results
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            See the <span className="text-primary">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Witness the remarkable difference our professional cleaning services make. Slide to compare before and after
            results.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {comparisons.map((comparison, index) => (
            <Card
              key={index}
              className={`overflow-hidden transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">{comparison.title}</h3>

                {/* Before/After Slider */}
                <div className="relative h-[400px] rounded-lg overflow-hidden mb-4">
                  {/* After Image (Full) */}
                  <Image
                    src={comparison.after || "/placeholder.svg"}
                    alt="After cleaning"
                    fill
                    className="object-cover"
                  />

                  {/* Before Image (Clipped) */}
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderValue[0]}% 0 0)` }}
                  >
                    <Image
                      src={comparison.before || "/placeholder.svg"}
                      alt="Before cleaning"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Slider Line */}
                  <div className="absolute top-0 bottom-0 w-1 bg-primary" style={{ left: `${sliderValue[0]}%` }}>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <div className="flex gap-1">
                        <div className="w-0.5 h-4 bg-primary-foreground" />
                        <div className="w-0.5 h-4 bg-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Labels */}
                  <div className="absolute top-4 left-4 bg-card/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    Before
                  </div>
                  <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    After
                  </div>
                </div>

                {/* Slider Control */}
                <Slider value={sliderValue} onValueChange={setSliderValue} max={100} step={1} className="w-full" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
