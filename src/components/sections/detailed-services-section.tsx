const detailedServices = [
  {
    id: "web-development",
    name: "Web Development",
    description: "Modern, responsive websites and web applications built with cutting-edge technologies.",
    icon: "💻",
    features: [
      "Custom Website Development",
      "E-commerce Platforms",
      "Progressive Web Apps (PWAs)",
      "Content Management Systems",
      "API Development & Integration",
      "Performance Optimization"
    ],
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    pricing: "Starting from $5,000"
  },
  {
    id: "mobile-apps",
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms.",
    icon: "📱",
    features: [
      "iOS & Android Development",
      "Cross-platform Solutions",
      "UI/UX Design",
      "App Store Optimization",
      "Backend Integration",
      "Maintenance & Support"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Redux"],
    pricing: "Starting from $10,000"
  },
  {
    id: "digital-transformation",
    name: "Digital Transformation",
    description: "Complete business process digitization and system modernization solutions.",
    icon: "🔄",
    features: [
      "Process Automation",
      "Legacy System Migration",
      "Cloud Infrastructure",
      "Data Analytics",
      "Digital Strategy Consulting",
      "Training & Support"
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Microservices"],
    pricing: "Starting from $25,000"
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services for modern businesses.",
    icon: "☁️",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps Implementation",
      "Security & Compliance",
      "Cost Optimization",
      "24/7 Monitoring"
    ],
    technologies: ["AWS", "Azure", "GCP", "Terraform", "Docker", "Kubernetes"],
    pricing: "Starting from $15,000"
  }
];

export function DetailedServicesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Detailed Service Offerings
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions designed to meet your specific business requirements
          </p>
        </div>
        <div className="mx-auto mt-16 space-y-16">
          {detailedServices.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white text-2xl mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.name}</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm">
                        <svg className="mr-2 h-4 w-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-lg font-semibold text-primary">
                  {service.pricing}
                </div>
              </div>
              
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''} bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 flex items-center justify-center`}>
                <div className="text-8xl opacity-50">{service.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}