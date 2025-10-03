import { Facebook, Instagram, Linkedin, Star } from "lucide-react"
import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/design-mode/WhatsApp%20Image%202025-10-03%20at%2012.33.38_d9d1af10.jpg"
                alt="EIPRO Logo"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <div className="text-lg font-bold text-primary">EIPRO</div>
                <div className="text-xs text-background/70">Since 2002</div>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              New Jersey's most trusted professional cleaning service for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/80 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-background/80 hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-background/80">Deep Cleaning</li>
              <li className="text-background/80">Post-Construction</li>
              <li className="text-background/80">Regular Cleaning</li>
              <li className="text-background/80">Weekly Service</li>
              <li className="text-background/80">Biweekly Service</li>
              <li className="text-background/80">Monthly Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4 text-primary">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-background/80">
                <a href="mailto:elaineprocleaning@gmail.com" className="hover:text-primary transition-colors">
                  elaineprocleaning@gmail.com
                </a>
              </li>
              <li className="text-background/80">
                <a href="tel:201-989-5646" className="hover:text-primary transition-colors">
                  201-989-5646
                </a>
              </li>
              <li className="text-background/80">Haledon, NJ</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-background/70">
          <p>© {currentYear} Elaine's Pro Cleaning Services. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-secondary fill-secondary" />
            <span>Best Rated Cleaning Service in NJ</span>
            <Star className="w-4 h-4 text-secondary fill-secondary" />
          </div>
        </div>
      </div>
    </footer>
  )
}
