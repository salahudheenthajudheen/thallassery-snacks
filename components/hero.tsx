import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { ArabicBorder } from "./islamic-pattern"

export function Hero() {
  return (
    <header className="relative min-h-[100svh] flex items-center justify-center pt-20 pb-8 md:pt-20 overflow-hidden">
      <div
        className="hidden md:block absolute top-24 left-8 w-32 h-32 border-l-2 border-t-2 border-accent/30 rounded-tl-3xl"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute top-24 right-8 w-32 h-32 border-r-2 border-t-2 border-accent/30 rounded-tr-3xl"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute bottom-8 left-8 w-32 h-32 border-l-2 border-b-2 border-accent/30 rounded-bl-3xl"
        aria-hidden="true"
      />
      <div
        className="hidden md:block absolute bottom-8 right-8 w-32 h-32 border-r-2 border-b-2 border-accent/30 rounded-br-3xl"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p
            className="text-accent text-base md:text-lg font-[var(--font-body)] mb-3 md:mb-4"
            aria-label="In the name of Allah"
          >
            بِسْمِ اللَّهِ
          </p>

          <ArabicBorder className="mb-6 md:mb-8 max-w-[200px] md:max-w-md mx-auto" />

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-foreground leading-tight tracking-tight text-balance">
            Authentic Malabar Delicacies
          </h1>

          <ArabicBorder className="mt-6 mb-6 md:mt-8 md:mb-8 max-w-[200px] md:max-w-md mx-auto" />

          <p className="text-lg md:text-2xl font-[var(--font-body)] text-accent mb-2">
            Thalassery Recipes, Made Fresh in Ernakulam
          </p>

          <p className="text-base md:text-xl font-[var(--font-body)] text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed px-2">
            Order homemade Kerala snacks online — traditional banana chips, unnakkaya, Malabar halwa, and more.
            Authentic Thalassery Mappila recipes handcrafted with love in Ernakulam. Delivery available across Kochi &
            Ernakulam.
          </p>

          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 px-4 sm:px-0">
            <Link
              href="#products"
              className="group flex items-center justify-center gap-3 px-6 md:px-8 py-4 bg-primary text-primary-foreground rounded-xl font-[var(--font-body)] hover:bg-primary/90 active:scale-[0.98] transition-all text-base md:text-lg"
            >
              View Our Snacks Menu
              <ArrowRight
                className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="#about"
              className="group flex items-center justify-center gap-3 px-6 md:px-8 py-4 border-2 border-accent text-accent rounded-xl font-[var(--font-body)] hover:bg-accent hover:text-accent-foreground active:scale-[0.98] transition-all text-base md:text-lg"
            >
              Our Heritage Story
              <span className="text-lg" aria-hidden="true">
                ✦
              </span>
            </Link>
          </div>
        </div>

        <figure className="mt-10 md:mt-16 lg:mt-24 max-w-3xl mx-auto px-2 sm:px-0">
          <div className="relative">
            <div
              className="hidden sm:block absolute -inset-4 border-2 border-accent/30 rounded-3xl"
              aria-hidden="true"
            />
            <div className="hidden sm:block absolute -inset-8 border border-accent/15 rounded-3xl" aria-hidden="true" />

            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/traditional-kerala-snacks-thalassery-biryani-banan.jpg"
                alt="Assortment of traditional Thalassery Malabar snacks including banana chips, halwa, unnakkaya and Kerala delicacies arranged on a traditional brass plate"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" aria-hidden="true" />
            </div>
          </div>
          <figcaption className="sr-only">Traditional Thalassery Malabar snacks collection</figcaption>
        </figure>
      </div>
    </header>
  )
}
