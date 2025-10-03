import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-surface border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image src="/images/logo.png" alt="Echelon Precision Detailing" fill className="object-contain" />
              </div>
              <span className="font-serif text-lg font-bold bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent">
                Echelon Precision
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed">
              Premium auto detailing services in Scottsdale, Phoenix, and Cave Creek, Arizona.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Services", "About", "Gallery", "Book", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted hover:text-accent-1 transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted">
              <li>Exterior Cleaning</li>
              <li>Interior Cleaning</li>
              <li>Ceramic Coating</li>
              <li>Paint Correction</li>
              <li>Headlight Restoration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:602-710-4211"
                  className="flex items-center gap-2 text-muted hover:text-accent-1 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  602-710-4211
                </a>
              </li>
              <li>
                <a
                  href="mailto:Zlaursen@echelonprecision.com"
                  className="flex items-center gap-2 text-muted hover:text-accent-1 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  Zlaursen@echelonprecision.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Scottsdale, Phoenix & Cave Creek, AZ</span>
              </li>
              <li>
                <a
                  href="https://facebook.com/EchelonPrecisionDetailing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted hover:text-accent-1 transition-colors text-sm"
                >
                  <Facebook className="w-4 h-4" />
                  Follow Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted text-sm">
          <p>&copy; {new Date().getFullYear()} Echelon Precision Detailing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
