import { ArabicBorder } from "./islamic-pattern"

export function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute top-0 left-0 w-32 md:w-64 h-32 md:h-64 border-l-2 border-t-2 border-accent/20 rounded-br-[50px] md:rounded-br-[100px]"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-32 md:w-64 h-32 md:h-64 border-r-2 border-b-2 border-accent/20 rounded-tl-[50px] md:rounded-tl-[100px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-sm font-[var(--font-body)] uppercase tracking-widest text-accent mb-3 md:mb-4">
              <span aria-hidden="true">✦</span> Our Heritage <span aria-hidden="true">✦</span>
            </p>
            <ArabicBorder className="max-w-[200px] md:max-w-xs mx-auto" />
          </div>

          <h2
            id="about-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground leading-snug md:leading-tight text-balance text-center px-2"
          >
            From Thalassery to Ernakulam —
            <span className="text-muted-foreground">
              {" "}
              bringing authentic Mappila recipes from our ancestral home in Thalassery, now lovingly handcrafted in
              Ernakulam for you to enjoy.
            </span>
          </h2>

          <div className="mt-10 md:mt-16 grid md:grid-cols-2 gap-8 md:gap-12">
            <figure className="relative order-1 md:order-2">
              <div
                className="absolute -inset-2 md:-inset-3 border-2 border-accent/30 rounded-xl md:rounded-2xl"
                aria-hidden="true"
              />
              <img
                src="/kerala-grandmother-cooking-traditional-snacks-kitc.jpg"
                alt="Traditional Mappila grandmother preparing homemade Kerala snacks in a traditional kitchen using ancestral recipes"
                className="relative w-full h-64 md:h-full object-cover rounded-lg md:rounded-xl"
                loading="lazy"
              />
              <figcaption className="sr-only">
                Traditional Mappila cooking process passed down through generations
              </figcaption>
            </figure>

            <div className="space-y-4 md:space-y-6 order-2 md:order-1">
              <article className="border-l-4 border-accent pl-4 md:pl-6 py-2">
                <h3 className="text-base md:text-lg font-[var(--font-body)] font-semibold text-foreground mb-1 md:mb-2">
                  Rooted in Thalassery
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-[var(--font-body)] leading-relaxed">
                  Our recipes originate from the historic kitchens of Thalassery, passed down through generations of
                  Mappila families in Kerala.
                </p>
              </article>

              <article className="border-l-4 border-accent pl-4 md:pl-6 py-2">
                <h3 className="text-base md:text-lg font-[var(--font-body)] font-semibold text-foreground mb-1 md:mb-2">
                  Freshly Made in Ernakulam
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-[var(--font-body)] leading-relaxed">
                  Every snack is prepared fresh in our Ernakulam kitchen using the same traditional methods and 100%
                  halal, locally-sourced ingredients.
                </p>
              </article>

              <article className="border-l-4 border-accent pl-4 md:pl-6 py-2">
                <h3 className="text-base md:text-lg font-[var(--font-body)] font-semibold text-foreground mb-1 md:mb-2">
                  Handcrafted with Barakah
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-[var(--font-body)] leading-relaxed">
                  Each batch is handcrafted with prayers and care, preserving the authentic taste our grandmothers
                  perfected in Thalassery.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
