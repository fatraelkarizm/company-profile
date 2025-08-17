const values = [
  {
    name: "Innovation First",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    icon: "💡",
  },
  {
    name: "Client Success",
    description: "Your success is our success. We measure our achievement by the growth we enable for our clients.",
    icon: "🎯",
  },
  {
    name: "Quality Excellence",
    description: "We deliver nothing less than exceptional quality in every project, every time.",
    icon: "⭐",
  },
  {
    name: "Transparent Partnership",
    description: "Open communication, honest feedback, and collaborative relationships define how we work.",
    icon: "🤝",
  },
  {
    name: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. We invest in growth and stay ahead of the curve.",
    icon: "📚",
  },
  {
    name: "Sustainable Impact",
    description: "We build solutions that not only work today but create lasting positive impact for the future.",
    icon: "🌱",
  },
];

export function ValuesSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Values
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The principles that guide everything we do
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-white text-2xl">
                  {value.icon}
                </div>
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {value.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}