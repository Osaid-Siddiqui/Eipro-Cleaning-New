"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, Clock, MapPin, Car, User, Mail, Phone, MessageSquare, CheckCircle2 } from "lucide-react"

export default function BookPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    vehicleType: "",
    location: "",
    date: "",
    time: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          service: "",
          vehicleType: "",
          location: "",
          date: "",
          time: "",
          message: "",
        })
      }
    } catch (error) {
      console.error("Booking error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(145,14,107,0.3),transparent_50%)]" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center space-y-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-24 h-24 bg-gradient-to-br from-primary to-accent-2 rounded-full flex items-center justify-center mx-auto"
              >
                <CheckCircle2 className="w-12 h-12 text-foreground" />
              </motion.div>

              <h1 className="font-serif text-4xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                  Booking Confirmed!
                </span>
              </h1>

              <p className="text-xl text-muted leading-relaxed">
                Thank you for choosing Echelon Precision Detailing. We've received your booking request and will contact
                you shortly to confirm your appointment.
              </p>

              <div className="flex flex-wrap gap-4 justify-center pt-6">
                <a
                  href="/"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent-2 text-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
                >
                  Return Home
                </a>
                <a
                  href="/services"
                  className="px-8 py-4 bg-surface/50 backdrop-blur-sm border border-border text-foreground rounded-full font-semibold hover:bg-surface transition-all duration-300"
                >
                  View Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    )
  }

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
              Book Your Service
            </motion.div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance">
              <span className="bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Schedule Your Detail
              </span>
            </h1>

            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Fill out the form below and we'll contact you to confirm your appointment and discuss your vehicle's
              specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent-2/20 rounded-3xl blur-2xl" />
              <div className="relative bg-surface/80 backdrop-blur-sm border border-border rounded-3xl p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-3">
                      <User className="w-6 h-6 text-accent-1" />
                      Personal Information
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-semibold text-foreground flex items-center gap-2"
                        >
                          <Mail className="w-4 h-4" />
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-semibold text-foreground flex items-center gap-2"
                        >
                          <Phone className="w-4 h-4" />
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                          placeholder="(602) 555-0123"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Details */}
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-3">
                      <Car className="w-6 h-6 text-accent-1" />
                      Service Details
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-semibold text-foreground">
                          Service Type *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select a service</option>
                          <option value="exterior">Exterior Cleaning</option>
                          <option value="interior">Interior Cleaning</option>
                          <option value="full-detail">Full Detailing</option>
                          <option value="ceramic">Ceramic Coating</option>
                          <option value="paint-correction">Paint Correction</option>
                          <option value="headlight">Headlight Restoration</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="vehicleType" className="text-sm font-semibold text-foreground">
                          Vehicle Type *
                        </label>
                        <select
                          id="vehicleType"
                          name="vehicleType"
                          value={formData.vehicleType}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select vehicle type</option>
                          <option value="sedan">Sedan</option>
                          <option value="suv">SUV</option>
                          <option value="truck">Truck</option>
                          <option value="sports">Sports Car</option>
                          <option value="luxury">Luxury Vehicle</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="location"
                          className="text-sm font-semibold text-foreground flex items-center gap-2"
                        >
                          <MapPin className="w-4 h-4" />
                          Location *
                        </label>
                        <select
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select location</option>
                          <option value="scottsdale">Scottsdale, AZ</option>
                          <option value="phoenix">Phoenix, AZ</option>
                          <option value="cave-creek">Cave Creek, AZ</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Appointment Details */}
                  <div className="space-y-6">
                    <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-3">
                      <Calendar className="w-6 h-6 text-accent-1" />
                      Preferred Date & Time
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="date" className="text-sm font-semibold text-foreground">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="time" className="text-sm font-semibold text-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        >
                          <option value="">Select time</option>
                          <option value="8am">8:00 AM</option>
                          <option value="9am">9:00 AM</option>
                          <option value="10am">10:00 AM</option>
                          <option value="11am">11:00 AM</option>
                          <option value="12pm">12:00 PM</option>
                          <option value="1pm">1:00 PM</option>
                          <option value="2pm">2:00 PM</option>
                          <option value="3pm">3:00 PM</option>
                          <option value="4pm">4:00 PM</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about any specific concerns or requests for your vehicle..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Submitting..." : "Book Your Appointment"}
                  </button>

                  <p className="text-sm text-muted text-center">
                    By submitting this form, you agree to be contacted by Echelon Precision Detailing regarding your
                    booking.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
