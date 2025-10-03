"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Home, ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/20 to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(145,14,107,0.3),transparent_50%)]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-primary via-accent-1 to-secondary bg-clip-text text-transparent"
            >
              404
            </motion.div>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground">Page Not Found</h1>

            <p className="text-xl text-muted leading-relaxed">
              Looks like this page took a detour. Let's get you back on track.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <Link
                href="/"
                className="group px-8 py-4 bg-gradient-to-r from-primary via-accent-2 to-secondary text-foreground rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="px-8 py-4 bg-surface/50 backdrop-blur-sm border border-border text-foreground rounded-full font-semibold hover:bg-surface transition-all duration-300 flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
