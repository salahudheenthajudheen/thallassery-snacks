"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFAB() {
  return (
    <a
      href="https://wa.me/918089136402?text=Hi!%20I%20would%20like%20to%20place%20an%20order"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#22c55e] active:scale-95 transition-all"
      aria-label="Order on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  )
}
