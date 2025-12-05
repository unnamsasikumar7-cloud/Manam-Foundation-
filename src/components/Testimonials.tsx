import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Manam Foundation ensures our children are fed with love and dignity. They make kindness a daily habit.",
    author: "Dwarakamayee Seva Samithi",
  },
  {
    quote: "In every blanket and every meal, we feel the warmth of a community that truly cares.",
    author: "Community Volunteer",
  },
];

const Testimonials = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-accent via-white to-accent">
    <div className="container max-w-5xl mx-auto text-center space-y-10">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.3em] text-foreground/70">Voices of Impact</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground">
          Testimonials & Partners
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Stories from the people who inspire us to keep serving every single day.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="card-surface text-left">
            <Quote className="h-10 w-10 text-[hsl(var(--accent-secondary))]" />
            <p className="mt-4 text-lg text-foreground/90">{testimonial.quote}</p>
            <p className="mt-6 font-semibold text-foreground">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

