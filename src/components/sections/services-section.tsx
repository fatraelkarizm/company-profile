const services = [
  {
    name: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimized"],
    icon: "💻",
  },
  {
    name: "Mobile Apps",
    description: "Native and cross-platform mobile applications for iOS and Android.",
    features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
    icon: "📱",
  },
  {
    name: "Digital Transformation",
    description: "Complete digital overhaul of your business processes and systems.",
    features: ["Process Automation", "Cloud Migration", "Digital Strategy", "System Integration"],
    icon: "🔄",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Our Services</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to succeed digitally
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer comprehensive digital solutions tailored to your business needs, from concept to deployment and beyond.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="flex flex-col">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-primary text-white text-2xl">
                  {service.icon}
                </div>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  {service.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <svg className="mr-2 h-4 w-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}