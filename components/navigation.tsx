"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
              <Image src="/images/logo.png" alt="Echelon Precision Detailing" fill className="object-contain" />
            </div>
            <span className="font-serif text-xl font-bold bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
              Echelon Precision
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-accent-1 transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/book"
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent-2 text-foreground rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              Book Now
            </Link>
            <a
              href="tel:602-710-4211"
              className="flex items-center gap-2 text-foreground hover:text-accent-1 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">602-710-4211</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-accent-1 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/98 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground hover:text-accent-1 transition-colors py-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 bg-gradient-to-r from-primary to-accent-2 text-foreground rounded-full text-center hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Book Now
              </Link>
              <a
                href="tel:602-710-4211"
                className="flex items-center justify-center gap-2 text-foreground hover:text-accent-1 transition-colors py-2"
              >
                <Phone className="w-4 h-4" />
                <span>602-710-4211</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
