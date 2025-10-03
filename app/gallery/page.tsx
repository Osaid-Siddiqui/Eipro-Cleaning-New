"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { X } from "lucide-react"

const categories = ["All", "Exterior", "Interior", "Ceramic Coating", "Paint Correction", "Before & After"]

const galleryItems = [
  {
    id: 1,
    category: "Exterior",
    title: "Luxury Sedan Detail",
    before: "/dirty-luxury-sedan-before-detailing.jpg",
    after: "/pristine-luxury-sedan-after-professional-detailing.jpg",
    description: "Complete exterior transformation with paint correction and ceramic coating",
  },
  {
    id: 2,
    category: "Interior",
    title: "Leather Interior Restoration",
    before: "/worn-leather-car-interior-before-cleaning.jpg",
    after: "/restored-leather-car-interior-after-professional-d.jpg",
    description: "Deep cleaning and conditioning of premium leather surfaces",
  },
  {
    id: 3,
    category: "Ceramic Coating",
    title: "Ceramic Coating Application",
    before: "/car-paint-before-ceramic-coating.jpg",
    after: "/car-paint-with-ceramic-coating-water-beading.jpg",
    description: "Professional ceramic coating with hydrophobic properties",
  },
  {
    id: 4,
    category: "Paint Correction",
    title: "Swirl Mark Removal",
    before: "/car-paint-with-swirl-marks-and-scratches.jpg",
    after: "/flawless-car-paint-after-correction-mirror-finish.jpg",
    description: "Multi-stage paint correction for mirror-like finish",
  },
  {
    id: 5,
    category: "Exterior",
    title: "Sports Car Detailing",
    before: "/dusty-sports-car-before-detailing.jpg",
    after: "/gleaming-sports-car-after-premium-detailing.jpg",
    description: "Premium exterior detailing with paint enhancement",
  },
  {
    id: 6,
    category: "Interior",
    title: "SUV Interior Deep Clean",
    before: "/dirty-suv-interior-before-cleaning.jpg",
    after: "/spotless-suv-interior-after-deep-cleaning.jpg",
    description: "Comprehensive interior detailing and sanitization",
  },
  {
    id: 7,
    category: "Ceramic Coating",
    title: "Full Vehicle Ceramic Protection",
    before: "/vehicle-before-ceramic-coating-application.jpg",
    after: "/vehicle-with-glossy-ceramic-coating-finish.jpg",
    description: "Complete ceramic coating for long-lasting protection",
  },
  {
    id: 8,
    category: "Paint Correction",
    title: "Oxidation Removal",
    before: "/placeholder.svg?height=600&width=800",
    after: "/placeholder.svg?height=600&width=800",
    description: "Paint restoration and multi-stage polishing",
  },
]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<{ before: string; after: string; title: string } | null>(null)
  const [showBefore, setShowBefore] = useState(true)

  const filteredItems =
    selectedCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(145,14,107,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-foreground"
            >
              Our Work
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Transformations
              </span>
            </h1>

            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Explore our portfolio of stunning before and after results that showcase the precision and care we bring
              to every vehicle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 sticky top-20 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-accent-2 text-foreground shadow-lg shadow-primary/30"
                    : "bg-surface/50 text-muted hover:text-foreground hover:bg-surface border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative cursor-pointer"
                  onClick={() => setLightboxImage({ before: item.before, after: item.after, title: item.title })}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-2/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-surface/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
                    {/* Before/After Slider */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.after || "/placeholder.svg"}
                        alt={`${item.title} - After`}
                        className="w-full h-full object-cover"
                      />
                      <div
                        className="absolute inset-0 overflow-hidden transition-all duration-300"
                        style={{ clipPath: "inset(0 50% 0 0)" }}
                      >
                        <img
                          src={item.before || "/placeholder.svg"}
                          alt={`${item.title} - Before`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-full bg-foreground/50" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground">
                        Before
                      </div>
                      <div className="absolute top-4 right-4 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground">
                        After
                      </div>
                    </div>
                    <div className="p-6 space-y-2">
                      <div className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-full text-xs font-semibold text-foreground">
                        {item.category}
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/98 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-surface/50 backdrop-blur-sm border border-border rounded-full flex items-center justify-center hover:bg-surface transition-colors"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="space-y-6"
              >
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-foreground">
                  {lightboxImage.title}
                </h2>

                <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
                  <img
                    src={showBefore ? lightboxImage.before : lightboxImage.after}
                    alt={lightboxImage.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex justify-center gap-4">
                  <button
                    onClick={() => setShowBefore(true)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      showBefore
                        ? "bg-gradient-to-r from-primary to-accent-2 text-foreground"
                        : "bg-surface/50 text-muted hover:text-foreground border border-border"
                    }`}
                  >
                    Before
                  </button>
                  <button
                    onClick={() => setShowBefore(false)}
                    className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                      !showBefore
                        ? "bg-gradient-to-r from-primary to-accent-2 text-foreground"
                        : "bg-surface/50 text-muted hover:text-foreground border border-border"
                    }`}
                  >
                    After
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  )
}
