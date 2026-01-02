import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The banana chips remind me of my grandmother's kitchen. Absolutely authentic!",
    author: "Priya Menon",
    location: "Thalassery",
  },
  {
    quote: "Best halwa I've had outside of Kozhikode. Rich, authentic, and made with love.",
    author: "Rahul Nair",
    location: "Kannur",
  },
  {
    quote: "Finally found snacks that taste like home. The achappam is perfect!",
    author: "Lakshmi Krishnan",
    location: "Bangalore",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-sm font-[var(--font-body)] uppercase tracking-widest opacity-80 mb-3 md:mb-4">
            What People Say
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold">Loved by Our Customers</h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto overflow-x-auto pb-4 md:pb-0 snap-x snap-mandatory -mx-4 px-4 md:mx-auto md:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-auto bg-primary-foreground/10 rounded-2xl p-6 md:p-0 md:bg-transparent md:rounded-none text-center snap-center"
            >
              <Quote className="w-6 h-6 md:w-8 md:h-8 mx-auto mb-4 md:mb-6 opacity-50" />
              <p className="text-base md:text-lg font-[var(--font-body)] mb-4 md:mb-6 italic leading-relaxed">{`"${testimonial.quote}"`}</p>
              <p className="font-[var(--font-body)] font-semibold">{testimonial.author}</p>
              <p className="text-sm font-[var(--font-body)] opacity-70">{testimonial.location}</p>
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-primary-foreground/30" />
          ))}
        </div>
      </div>
    </section>
  )
}
