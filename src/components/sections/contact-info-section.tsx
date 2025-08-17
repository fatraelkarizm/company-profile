const contactInfo = [
  {
    name: "Email",
    value: "hello@techflow.solutions",
    href: "mailto:hello@techflow.solutions",
    icon: "📧",
  },
  {
    name: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    icon: "📞",
  },
  {
    name: "Address",
    value: "123 Innovation Drive, Tech City, TC 12345",
    href: "https://maps.google.com",
    icon: "📍",
  },
  {
    name: "Business Hours",
    value: "Mon-Fri: 9:00 AM - 6:00 PM PST",
    href: null,
    icon: "🕒",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity. Simple websites take 4-6 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes! We provide comprehensive maintenance and support packages to ensure your solution continues to perform optimally. This includes updates, security patches, and technical support.",
  },
  {
    question: "What's included in your pricing?",
    answer: "Our pricing includes design, development, testing, deployment, and initial training. We provide transparent quotes with no hidden fees. Ongoing maintenance and support are available separately.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely! We specialize in integrating new solutions with existing systems and can help modernize legacy applications while maintaining business continuity.",
  },
];

export function ContactInfoSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Contact Information
            </h2>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.name} className="flex items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white text-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-primary hover:text-primary/80 transition-colors"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}