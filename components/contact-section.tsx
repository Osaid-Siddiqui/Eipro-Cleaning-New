"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-secondary/20 text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ready for a <span className="text-primary">Spotless Space?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Contact us today for a free quote. We're here to answer your questions and schedule your cleaning service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="border-2 focus:border-primary" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="border-2 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="(201) 989-5646"
                      className="border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Type
                    </label>
                    <select
                      id="service"
                      className="w-full h-10 px-3 rounded-md border-2 border-input bg-background focus:border-primary outline-none"
                    >
                      <option>Deep Cleaning</option>
                      <option>Post-Construction</option>
                      <option>Regular Cleaning</option>
                      <option>Weekly Service</option>
                      <option>Biweekly Service</option>
                      <option>Monthly Service</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your cleaning needs..."
                    rows={5}
                    className="border-2 focus:border-primary resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email Us</h3>
                    <a
                      href="mailto:elaineprocleaning@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      elaineprocleaning@gmail.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Call Us</h3>
                    <a href="tel:201-989-5646" className="text-muted-foreground hover:text-primary transition-colors">
                      201-989-5646
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Haledon, NJ
                      <br />
                      Serving 5 Counties
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="border-2 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48377.294199999996!2d-74.18!3d40.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2ff3b0f0f0f0f%3A0x0!2sHaledon%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Haledon, NJ Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
