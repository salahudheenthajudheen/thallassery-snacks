"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-accent/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 md:w-10 md:h-10 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent text-base md:text-lg">✦</span>
            </div>
            <span className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-primary">Thalassery Snacks</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link
              href="#about"
              className="text-sm font-[var(--font-body)] text-foreground hover:text-accent transition-colors"
            >
              Our Heritage
            </Link>
            <Link
              href="#products"
              className="text-sm font-[var(--font-body)] text-foreground hover:text-accent transition-colors"
            >
              Delicacies
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-[var(--font-body)] text-foreground hover:text-accent transition-colors"
            >
              Reviews
            </Link>
            <Link
              href="#contact"
              className="text-sm font-[var(--font-body)] text-foreground hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 font-[var(--font-body)] bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            >
              <Phone className="w-4 h-4" />
              Order Now
            </Button>
          </div>

          <button
            className="md:hidden p-3 -mr-2 active:bg-accent/10 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent/30 animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-1">
              <Link
                href="#about"
                className="text-base font-[var(--font-body)] text-foreground hover:text-accent hover:bg-accent/5 transition-colors py-3 px-2 rounded-lg active:bg-accent/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Our Heritage
              </Link>
              <Link
                href="#products"
                className="text-base font-[var(--font-body)] text-foreground hover:text-accent hover:bg-accent/5 transition-colors py-3 px-2 rounded-lg active:bg-accent/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Delicacies
              </Link>
              <Link
                href="#testimonials"
                className="text-base font-[var(--font-body)] text-foreground hover:text-accent hover:bg-accent/5 transition-colors py-3 px-2 rounded-lg active:bg-accent/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Reviews
              </Link>
              <Link
                href="#contact"
                className="text-base font-[var(--font-body)] text-foreground hover:text-accent hover:bg-accent/5 transition-colors py-3 px-2 rounded-lg active:bg-accent/10"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-3 mt-2 border-t border-accent/20">
                <Button
                  variant="outline"
                  className="gap-2 font-[var(--font-body)] w-full bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground h-12"
                >
                  <Phone className="w-4 h-4" />
                  Order Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
