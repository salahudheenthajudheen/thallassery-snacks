import Link from "next/link"
import { ArabicBorder } from "./islamic-pattern"

export function Footer() {
  return (
    <footer className="py-10 md:py-12 border-t-2 border-accent/30 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-6 md:mb-8">
          <ArabicBorder className="max-w-[200px] md:max-w-xs mx-auto mb-6" />
        </div>

        <div className="flex flex-col items-center gap-6 text-center md:text-left md:flex-row md:justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-accent flex items-center justify-center">
              <span className="text-accent text-sm">✦</span>
            </div>
            <span className="text-xl md:text-2xl font-sans font-bold text-primary">Thalassery Snacks</span>
          </Link>

          <p className="text-sm font-[var(--font-body)] text-muted-foreground order-3 md:order-2">
            Thalassery recipes, made with love & barakah in Ernakulam
          </p>

          <div className="flex items-center gap-4 order-2 md:order-3">
            <Link
              href="#"
              className="text-sm font-[var(--font-body)] text-muted-foreground hover:text-accent transition-colors px-3 py-2 rounded-lg hover:bg-accent/5 active:bg-accent/10"
            >
              Instagram
            </Link>
            <Link
              href="#"
              className="text-sm font-[var(--font-body)] text-muted-foreground hover:text-accent transition-colors px-3 py-2 rounded-lg hover:bg-accent/5 active:bg-accent/10"
            >
              WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border text-center">
          <p className="text-xs font-[var(--font-body)] text-muted-foreground">
            © 2025 Thalassery Treats. All rights reserved. ✦ الحمد لله
          </p>
        </div>
      </div>
    </footer>
  )
}
