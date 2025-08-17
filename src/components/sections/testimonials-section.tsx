const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    content: "TechFlow transformed our digital presence completely. Their team delivered a stunning website that increased our conversion rate by 300%.",
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "The mobile app they built for us exceeded all expectations. Professional, fast, and exactly what we envisioned.",
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, DataFlow Systems",
    content: "Outstanding technical expertise and project management. They delivered our complex web platform on time and under budget.",
    avatar: "ER",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What our clients say
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-900/5"
              >
                <figure className="space-y-6">
                  <blockquote className="text-lg leading-8 text-gray-900">
                    <p>&ldquo;{testimonial.content}&rdquo;</p>
                  </blockquote>
                  <figcaption className="flex items-center gap-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm leading-6 text-gray-600">{testimonial.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}