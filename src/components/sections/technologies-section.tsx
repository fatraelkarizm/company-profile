const technologies = {
  frontend: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Tailwind CSS", icon: "💨" },
    { name: "Vue.js", icon: "💚" },
    { name: "Angular", icon: "🅰️" },
  ],
  backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "Go", icon: "🐹" },
    { name: ".NET", icon: "🔷" },
    { name: "PHP", icon: "🐘" },
  ],
  mobile: [
    { name: "React Native", icon: "📱" },
    { name: "Flutter", icon: "🦋" },
    { name: "Swift", icon: "🍎" },
    { name: "Kotlin", icon: "🤖" },
    { name: "Ionic", icon: "⚡" },
    { name: "Xamarin", icon: "🔵" },
  ],
  cloud: [
    { name: "AWS", icon: "☁️" },
    { name: "Azure", icon: "🔷" },
    { name: "Google Cloud", icon: "🌤️" },
    { name: "Docker", icon: "🐳" },
    { name: "Kubernetes", icon: "⎈" },
    { name: "Terraform", icon: "🏗️" },
  ],
  database: [
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "MySQL", icon: "🐬" },
    { name: "Redis", icon: "🔴" },
    { name: "Firebase", icon: "🔥" },
    { name: "DynamoDB", icon: "📊" },
  ],
};

export function TechnologiesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technologies We Use
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Cutting-edge tools and frameworks that power modern digital solutions
          </p>
        </div>
        <div className="mx-auto mt-16 space-y-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6 capitalize">
                {category === 'frontend' ? 'Frontend Development' :
                 category === 'backend' ? 'Backend Development' :
                 category === 'mobile' ? 'Mobile Development' :
                 category === 'cloud' ? 'Cloud & DevOps' :
                 'Database & Storage'}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {techs.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-3xl mb-2">{tech.icon}</div>
                    <span className="text-sm font-medium text-gray-700 text-center">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}