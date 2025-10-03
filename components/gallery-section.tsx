"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function GallerySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
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

  const galleryImages = [
    "/spotless-clean-modern-kitchen.jpg",
    "/pristine-clean-bathroom-with-white-tiles.jpg",
    "/clean-organized-living-room.jpg",
    "/sparkling-clean-office-space.jpg",
    "/placeholder.svg?height=400&width=600",
    "/placeholder.svg?height=400&width=600",
  ]

  return (
    <section id="gallery" ref={sectionRef} className="py-24 bg-gradient-to-b from-card to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Gallery
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Our Work in Action
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Browse through our portfolio of professionally cleaned spaces and see the quality we deliver.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer transition-all duration-700 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card hover:bg-muted flex items-center justify-center"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative w-full max-w-4xl aspect-[4/3]">
              <Image
                src={galleryImages[selectedImage] || "/placeholder.svg"}
                alt={`Gallery image ${selectedImage + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
