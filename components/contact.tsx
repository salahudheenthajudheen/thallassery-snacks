"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { ArabicBorder } from "./islamic-pattern"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-card" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-sm font-[var(--font-body)] uppercase tracking-widest text-accent mb-3 md:mb-4">
              <span aria-hidden="true">✦</span> Get in Touch <span aria-hidden="true">✦</span>
            </p>
            <h2
              id="contact-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground"
            >
              Order Kerala Snacks Online
            </h2>
            <p className="text-muted-foreground font-[var(--font-body)] max-w-lg mx-auto mt-2">
              WhatsApp or call us to order fresh Thalassery-style snacks. Local delivery available across Ernakulam &
              Kochi.
            </p>
            <ArabicBorder className="max-w-[200px] md:max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <address className="space-y-4 md:space-y-6 not-italic">
              <a
                href="https://wa.me/918089136402?text=Hi%2C%20I%20would%20like%20to%20order%20Thalassery%20snacks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl hover:bg-[#25D366]/20 active:scale-[0.98] transition-all"
                aria-label="Order via WhatsApp"
              >
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-[var(--font-body)] font-semibold text-foreground">WhatsApp Order</h3>
                  <p className="text-sm text-muted-foreground font-[var(--font-body)]">Quick & Easy Snack Ordering</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-[var(--font-body)] font-semibold text-foreground">Call to Order</h3>
                  <a
                    href="tel:+918089136402"
                    className="text-muted-foreground font-[var(--font-body)] hover:text-accent"
                    aria-label="Call us at +91 98765 43210"
                  >
                    +91 8089136402
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-[var(--font-body)] font-semibold text-foreground">Our Location</h3>
                  <p className="text-muted-foreground font-[var(--font-body)]">Ernakulam, Kochi, Kerala 682001</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-[var(--font-body)] font-semibold text-foreground">Delivery Hours</h3>
                  <p className="text-muted-foreground font-[var(--font-body)]">
                    <time dateTime="17:00">5:00 PM</time> - <time dateTime="21:00">9:00 PM</time> (Mon - Sat)
                  </p>
                </div>
              </div>
            </address>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" aria-label="Snack order inquiry form">
              <div>
                <label htmlFor="name" className="sr-only">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background font-[var(--font-body)] h-12 md:h-11 text-base"
                  required
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-background font-[var(--font-body)] h-12 md:h-11 text-base"
                  required
                  autoComplete="tel"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Your Order Details
                </label>
                <Textarea
                  id="message"
                  placeholder="What Kerala snacks would you like to order? (e.g., Banana Chips, Halwa, Unnakkaya)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background font-[var(--font-body)] min-h-[120px] text-base"
                  required
                />
              </div>
              <Button type="submit" className="w-full font-[var(--font-body)] h-12 md:h-11 text-base">
                Send Order Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
