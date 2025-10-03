"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

export function PricingSection() {
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

  const plans = [
    {
      name: "Weekly Cleaning",
      price: "Custom",
      description: "Perfect for busy households",
      features: [
        "All rooms cleaned weekly",
        "Kitchen & bathroom deep clean",
        "Dusting & vacuuming",
        "Flexible scheduling",
        "Eco-friendly products",
      ],
      popular: false,
    },
    {
      name: "Biweekly Cleaning",
      price: "Custom",
      description: "Most popular choice",
      features: [
        "Cleaning every two weeks",
        "Complete home cleaning",
        "Kitchen & bathroom sanitization",
        "Priority scheduling",
        "Satisfaction guarantee",
      ],
      popular: true,
    },
    {
      name: "Monthly Cleaning",
      price: "Custom",
      description: "Great for maintenance",
      features: [
        "Monthly deep cleaning",
        "All areas covered",
        "Professional equipment",
        "Flexible timing",
        "Quality assurance",
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-gradient-to-b from-muted/30 to-card">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            Pricing Plans
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-balance"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Flexible Plans for Every Budget
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the cleaning schedule that works best for you. All plans include our satisfaction guarantee.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all duration-700 hover:shadow-xl ${
                plan.popular ? "border-2 border-primary shadow-lg scale-105" : "border-2 hover:border-primary/50"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground px-4 py-1 text-sm font-medium flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Most Popular
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">Contact for personalized quote</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={`w-full ${
                    plan.popular ? "bg-primary hover:bg-primary/90" : "bg-secondary hover:bg-secondary/90"
                  }`}
                  size="lg"
                  asChild
                >
                  <a href="#contact">Book Now</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground">
            Need a custom plan?{" "}
            <a href="#contact" className="text-primary hover:underline font-medium">
              Contact us
            </a>{" "}
            for a personalized quote tailored to your specific needs.
          </p>
        </div>
      </div>
    </section>
  )
}
