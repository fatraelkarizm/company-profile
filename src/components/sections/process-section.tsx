const processSteps = [
  {
    step: 1,
    title: "Discovery & Planning",
    description: "We start by understanding your business goals, target audience, and technical requirements through comprehensive analysis.",
    icon: "🔍",
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize your solution.",
    icon: "🎨",
  },
  {
    step: 3,
    title: "Development & Testing",
    description: "We build your solution using agile methodologies with continuous testing and quality assurance.",
    icon: "⚡",
  },
  {
    step: 4,
    title: "Deployment & Launch",
    description: "Seamless deployment to production with monitoring, optimization, and user training.",
    icon: "🚀",
  },
  {
    step: 5,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and optimization to ensure your solution continues to perform excellently.",
    icon: "🛠️",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Development Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A proven methodology that ensures successful project delivery
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={step.step} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="absolute left-8 top-16 h-16 w-0.5 bg-primary/20" aria-hidden="true" />
                )}
                <div className="flex items-start">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white text-2xl font-bold flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="ml-6 flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">
                      Step {step.step}: {step.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}