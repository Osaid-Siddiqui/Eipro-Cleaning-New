"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Sparkles, Shield, Award, ChevronRight, Star } from "lucide-react"

export default function HomePage() {
  const services = [
    {
      title: "Exterior Cleaning",
      description: "Premium hand wash and paint decontamination for a showroom finish.",
      icon: Sparkles,
    },
    {
      title: "Ceramic Coating",
      description: "Long-lasting protection with hydrophobic properties and enhanced gloss.",
      icon: Shield,
    },
    {
      title: "Paint Correction",
      description: "Multi-stage polishing to remove swirls, scratches, and imperfections.",
      icon: Award,
    },
  ]

  const testimonials = [
    {
      name: "Michael Rodriguez",
      location: "Scottsdale, AZ",
      rating: 5,
      text: "Absolutely incredible work! My Tesla looks better than the day I bought it. The ceramic coating is phenomenal.",
    },
    {
      name: "Sarah Chen",
      location: "Phoenix, AZ",
      rating: 5,
      text: "Best detailing service in Arizona. The attention to detail is unmatched. Highly recommend!",
    },
    {
      name: "David Thompson",
      location: "Cave Creek, AZ",
      rating: 5,
      text: "Professional, thorough, and the results speak for themselves. My Porsche has never looked this good.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(145,14,107,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(248,60,48,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(241,69,81,0.2),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full text-sm text-foreground"
              >
                Premium Auto Detailing in Arizona
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-serif text-5xl md:text-7xl font-bold leading-tight text-balance"
              >
                <span className="bg-gradient-to-r from-foreground via-accent-1 to-foreground bg-clip-text text-transparent">
                  Precision Detailing
                </span>
                <br />
                <span className="text-foreground">Elevated to Art</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted leading-relaxed max-w-xl"
              >
                Experience the pinnacle of automotive care with our premium detailing services. Serving Scottsdale,
                Phoenix, and Cave Creek with unmatched precision and passion.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/book"
                  className="group px-8 py-4 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-semibold hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  Book Your Detail
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 bg-surface/50 backdrop-blur-sm border border-border text-foreground rounded-full font-semibold hover:bg-surface transition-all duration-300"
                >
                  View Services
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent-1 border-2 border-background"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm text-muted mt-1">500+ Happy Clients</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Logo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent-1/30 to-secondary/30 rounded-full blur-3xl"
                />
                <Image
                  src="/images/logo.png"
                  alt="Echelon Precision Detailing"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-foreground/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Premium Services
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive detailing solutions tailored to your vehicle's needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-2/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent-2 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted leading-relaxed mb-6">{service.description}</p>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-accent-1 hover:text-secondary transition-colors group/link"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent-2 text-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              View All Services
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-surface" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Client Testimonials
              </span>
            </h2>
            <p className="text-muted text-lg">What our clients say about us</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent-2/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(145,14,107,0.3),transparent_70%)]" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-balance">Ready to Transform Your Vehicle?</h2>
            <p className="text-xl text-muted leading-relaxed">
              Experience the Echelon difference. Book your premium detailing service today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="px-10 py-5 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Book Your Appointment
              </Link>
              <a
                href="tel:602-710-4211"
                className="px-10 py-5 bg-surface/50 backdrop-blur-sm border-2 border-border text-foreground rounded-full font-bold text-lg hover:bg-surface transition-all duration-300"
              >
                Call 602-710-4211
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
