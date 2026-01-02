import { ArabicBorder } from "./islamic-pattern"

const products = [
  {
    name: "Kerala Banana Chips",
    description: "Crispy, golden Nendran banana chips fried in pure coconut oil. A classic Kerala snack.",
    image: "/kerala-banana-chips-golden-crispy-snack.jpg",
    price: "₹150",
    keywords: "banana chips, Kerala chips, nendran chips",
  },
  {
    name: "Unnakkaya",
    description: "Traditional Malabar sweet - ripe banana fritters stuffed with coconut, cashews and raisins.",
    image: "/unnakkaya-kerala-banana-fritter-sweet-snack.jpg",
    price: "₹200",
    keywords: "unnakkaya, Malabar sweet, banana fritter",
  },
  {
    name: "Kozhikode Malabar Halwa",
    description: "Authentic Kozhikode halwa made with maida, ghee and premium cashews. Melt-in-mouth sweetness.",
    image: "/kerala-halwa-sweet-kozhikode-traditional-dessert.jpg",
    price: "₹250",
    keywords: "Malabar halwa, Kozhikode halwa, Kerala sweet",
  },
  {
    name: "Achappam Rose Cookies",
    description: "Traditional rose-shaped crispy Kerala snack made with rice flour and coconut milk.",
    image: "/achappam-kerala-snack-rose-cookies-traditional.jpg",
    price: "₹180",
    keywords: "achappam, rose cookies, Kerala snack",
  },
  {
    name: "Kerala Mixture",
    description: "Savory blend of fried lentils, peanuts, curry leaves and aromatic South Indian spices.",
    image: "/kerala-mixture-snack-spicy-namkeen-indian.jpg",
    price: "₹120",
    keywords: "Kerala mixture, namkeen, Indian snack mix",
  },
  {
    name: "Pazham Pori",
    description: "Golden fried ripe banana fritters in crispy batter. Kerala's favorite tea-time snack.",
    image: "/pazham-pori-kerala-banana-fritter-golden-crispy.jpg",
    price: "₹80",
    keywords: "pazham pori, banana fritters, ethakka appam",
  },
]

export function Products() {
  return (
    <section id="products" className="py-16 md:py-24 lg:py-32 relative" aria-labelledby="products-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm font-[var(--font-body)] uppercase tracking-widest text-accent mb-3 md:mb-4">
            <span aria-hidden="true">✦</span> Our Delicacies <span aria-hidden="true">✦</span>
          </p>
          <h2
            id="products-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-4"
          >
            Traditional Kerala Snacks Menu
          </h2>
          <p className="text-muted-foreground font-[var(--font-body)] max-w-xl mx-auto mb-4">
            Handcrafted Thalassery snacks made fresh with authentic Mappila recipes
          </p>
          <ArabicBorder className="max-w-[250px] sm:max-w-sm mx-auto" />
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 list-none">
          {products.map((product) => (
            <li key={product.name}>
              <article
                className="group active:scale-[0.98] transition-transform h-full"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative">
                  <div
                    className="hidden md:block absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-accent/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  <div
                    className="hidden md:block absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-accent/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  <div
                    className="hidden md:block absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-accent/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />
                  <div
                    className="hidden md:block absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-accent/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    aria-hidden="true"
                  />

                  <div className="relative aspect-square rounded-lg md:rounded-xl overflow-hidden bg-muted mb-3 md:mb-4 border border-border">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} - ${product.description}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      itemProp="image"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4">
                  <div className="min-w-0">
                    <h3
                      className="text-sm md:text-lg font-[var(--font-body)] font-semibold text-foreground truncate"
                      itemProp="name"
                    >
                      {product.name}
                    </h3>
                    <p
                      className="hidden sm:block text-xs md:text-sm text-muted-foreground font-[var(--font-body)] mt-1 line-clamp-2"
                      itemProp="description"
                    >
                      {product.description}
                    </p>
                  </div>
                  <span
                    className="text-sm md:text-lg font-[var(--font-body)] font-bold text-accent whitespace-nowrap px-2 md:px-3 py-0.5 md:py-1 bg-accent/10 rounded-full w-fit"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <meta itemProp="priceCurrency" content="INR" />
                    <span itemProp="price">{product.price}</span>
                  </span>
                </div>
                {/* Hidden keywords for SEO */}
                <meta itemProp="keywords" content={product.keywords} />
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
