"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Sparkles, Droplets, Shield, Wrench, Zap, Lightbulb, Check, ChevronRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "exterior",
    title: "Exterior Cleaning",
    icon: Sparkles,
    tagline: "Showroom Shine, Every Time",
    description:
      "Our premium exterior detailing service brings your vehicle back to showroom condition with meticulous hand washing, clay bar treatment, and paint decontamination.",
    features: [
      "pH-balanced pre-wash foam",
      "Two-bucket hand wash method",
      "Clay bar paint decontamination",
      "Wheel and tire deep cleaning",
      "Glass cleaning and treatment",
      "Trim restoration and protection",
      "Final spray wax or sealant",
    ],
    pricing: "Starting at $150",
    duration: "2-3 hours",
    image: "/luxury-car-exterior-detailing-wash.jpg",
  },
  {
    id: "interior",
    title: "Interior Cleaning",
    icon: Droplets,
    tagline: "Pristine Cabin, Refined Comfort",
    description:
      "Transform your vehicle's interior with our comprehensive cleaning service that addresses every surface, from leather seats to carpets and hard-to-reach areas.",
    features: [
      "Complete vacuum of all surfaces",
      "Steam cleaning and sanitization",
      "Leather conditioning and protection",
      "Carpet and upholstery deep cleaning",
      "Dashboard and console detailing",
      "Door jamb cleaning",
      "Air vent and crevice detailing",
    ],
    pricing: "Starting at $175",
    duration: "2-4 hours",
    image: "/luxury-car-interior-leather-seats-detailing.jpg",
  },
  {
    id: "full-detail",
    title: "Full Detailing",
    icon: Zap,
    tagline: "Complete Transformation",
    description:
      "The ultimate detailing experience combining our premium exterior and interior services for a complete vehicle transformation inside and out.",
    features: [
      "All exterior cleaning services",
      "All interior cleaning services",
      "Engine bay cleaning",
      "Trunk detailing",
      "Paint enhancement polish",
      "Tire dressing and wheel coating",
      "Complete vehicle inspection",
    ],
    pricing: "Starting at $299",
    duration: "4-6 hours",
    image: "/luxury-sports-car-full-detail-before-after.jpg",
  },
  {
    id: "ceramic",
    title: "Ceramic Coating",
    icon: Shield,
    tagline: "Ultimate Paint Protection",
    description:
      "Professional-grade ceramic coating provides years of protection with hydrophobic properties, enhanced gloss, and resistance to environmental contaminants.",
    features: [
      "Multi-stage paint correction",
      "Surface preparation and decontamination",
      "Professional ceramic coating application",
      "9H hardness protection",
      "Hydrophobic water beading",
      "UV protection and gloss enhancement",
      "3-5 year durability",
    ],
    pricing: "Starting at $899",
    duration: "2-3 days",
    image: "/ceramic-coating-water-beading-on-car-paint.jpg",
  },
  {
    id: "paint-correction",
    title: "Paint Correction",
    icon: Wrench,
    tagline: "Flawless Finish Restored",
    description:
      "Multi-stage machine polishing to remove swirl marks, scratches, oxidation, and other paint imperfections, revealing a mirror-like finish.",
    features: [
      "Paint depth measurement",
      "Single, two, or three-stage correction",
      "Swirl mark and scratch removal",
      "Oxidation removal",
      "Hologram elimination",
      "Paint enhancement and clarity",
      "Final protection application",
    ],
    pricing: "Starting at $599",
    duration: "1-2 days",
    image: "/car-paint-correction-before-after-swirl-marks.jpg",
  },
  {
    id: "headlight",
    title: "Headlight Restoration",
    icon: Lightbulb,
    tagline: "Crystal Clear Vision",
    description:
      "Restore yellowed, hazy, or oxidized headlights to like-new clarity, improving both appearance and nighttime visibility for safer driving.",
    features: [
      "Wet sanding oxidation removal",
      "Multi-stage polishing",
      "UV protection coating",
      "Improved light output",
      "Enhanced vehicle appearance",
      "Long-lasting clarity",
      "Both headlights included",
    ],
    pricing: "Starting at $149",
    duration: "1-2 hours",
    image: "/car-headlight-restoration-before-after-clear.jpg",
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(services[0].id)
  const activeService = services.find((s) => s.id === activeTab) || services[0]

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
              Premium Detailing Services
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Elevate Your Vehicle
              </span>
            </h1>

            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              From comprehensive detailing to specialized treatments, we offer a full range of services to keep your
              vehicle in pristine condition.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setActiveTab(service.id)}
                className={`group relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === service.id
                    ? "bg-gradient-to-r from-primary to-accent-2 text-foreground shadow-lg shadow-primary/30"
                    : "bg-surface/50 text-muted hover:text-foreground hover:bg-surface border border-border"
                }`}
              >
                <span className="flex items-center gap-2">
                  <service.icon className="w-4 h-4" />
                  {service.title}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl mx-auto"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-2/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
                    <img
                      src={activeService.image || "/placeholder.svg"}
                      alt={activeService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                    <activeService.icon className="w-5 h-5 text-accent-1" />
                    <span className="text-sm font-semibold text-foreground">{activeService.tagline}</span>
                  </div>

                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">{activeService.title}</h2>

                  <p className="text-lg text-muted leading-relaxed">{activeService.description}</p>

                  <div className="flex flex-wrap gap-6 py-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted">Starting Price</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-1 bg-clip-text text-transparent">
                        {activeService.pricing}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted">Duration</p>
                      <p className="text-2xl font-bold text-foreground">{activeService.duration}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-semibold text-foreground text-lg">What's Included:</h3>
                    <ul className="space-y-2">
                      {activeService.features.map((feature, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + index * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent-2 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-foreground" />
                          </div>
                          <span className="text-muted">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href="/book"
                      className="group px-8 py-4 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                      Book This Service
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="tel:602-710-4211"
                      className="px-8 py-4 bg-surface/50 backdrop-blur-sm border border-border text-foreground rounded-full font-semibold hover:bg-surface transition-all duration-300"
                    >
                      Call for Quote
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Serving Arizona's Finest
              </span>
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              We proudly serve the following areas with our premium mobile detailing services:
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              {["Scottsdale, AZ", "Phoenix, AZ", "Cave Creek, AZ"].map((location, index) => (
                <motion.div
                  key={location}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-8 py-4 bg-gradient-to-br from-primary/20 to-accent-2/20 border border-primary/30 rounded-2xl backdrop-blur-sm"
                >
                  <p className="text-lg font-semibold text-foreground">{location}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent-2/20" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">
              Ready to Experience Precision Detailing?
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              Book your service today and discover why we're Arizona's premier detailing choice.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Schedule Your Detail
              <ChevronRight className="w-6 h-6" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
