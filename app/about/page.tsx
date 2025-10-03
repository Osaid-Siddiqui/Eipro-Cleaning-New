"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Award, Shield, Users, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We pursue perfection in every detail, never settling for anything less than exceptional results.",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Honest communication and transparent pricing build the trust our clients deserve.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Our love for automotive care drives us to continuously improve and innovate.",
    },
    {
      icon: Users,
      title: "Service",
      description: "Client satisfaction is our priority, and we go above and beyond to exceed expectations.",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Consultation",
      description: "We assess your vehicle's condition and discuss your specific needs and goals.",
    },
    {
      step: "02",
      title: "Preparation",
      description: "Thorough inspection and preparation ensure optimal results for every service.",
    },
    {
      step: "03",
      title: "Execution",
      description: "Our skilled technicians apply proven techniques with premium products.",
    },
    {
      step: "04",
      title: "Quality Check",
      description: "Rigorous inspection ensures every detail meets our exacting standards.",
    },
    {
      step: "05",
      title: "Delivery",
      description: "We walk you through the results and provide maintenance recommendations.",
    },
  ]

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "1000+", label: "Vehicles Detailed" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Satisfaction Rate" },
  ]

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
              Our Story
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Precision Meets Passion
              </span>
            </h1>

            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              At Echelon Precision Detailing, we transform automotive care into an art form, delivering unparalleled
              results that exceed expectations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Elevating Automotive Care in Arizona
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Founded with a vision to redefine automotive detailing, Echelon Precision Detailing has become
                  Arizona's premier choice for discerning vehicle owners who demand excellence.
                </p>
                <p>
                  Our journey began with a simple belief: every vehicle deserves meticulous care and attention to
                  detail. What started as a passion project has evolved into a trusted name in Scottsdale, Phoenix, and
                  Cave Creek, serving hundreds of satisfied clients.
                </p>
                <p>
                  We combine cutting-edge techniques with premium products and an unwavering commitment to quality. Our
                  team of skilled technicians undergoes continuous training to stay at the forefront of detailing
                  innovation, ensuring your vehicle receives the best care possible.
                </p>
                <p>
                  Whether it's a daily driver or a prized collector's piece, we treat every vehicle with the same level
                  of precision and respect it deserves.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent-2/30 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border">
                <img
                  src="/professional-car-detailing-team-working-on-luxury-.jpg"
                  alt="Echelon Precision Detailing Team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-muted font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-2/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-2 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Our Process
              </span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-primary to-accent-2 rounded-2xl flex items-center justify-center font-bold text-xl text-foreground group-hover:scale-110 transition-transform duration-300">
                    {item.step}
                  </div>
                  <div className="flex-1 bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted leading-relaxed">{item.description}</p>
                  </div>
                </div>
                {index < process.length - 1 && (
                  <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-primary to-accent-2 opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Experience the Echelon Difference
            </h2>
            <p className="text-xl text-muted leading-relaxed">
              Join hundreds of satisfied clients who trust us with their vehicles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/book"
                className="px-10 py-5 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
              >
                Book Your Service
              </Link>
              <Link
                href="/gallery"
                className="px-10 py-5 bg-surface/50 backdrop-blur-sm border-2 border-border text-foreground rounded-full font-bold text-lg hover:bg-surface transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
