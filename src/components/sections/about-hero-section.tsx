export function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            About TechFlow
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We&apos;re passionate technologists dedicated to transforming businesses through innovative digital solutions. 
            Founded on the principle that technology should empower, not complicate.
          </p>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative mx-auto max-w-lg">
            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <div className="text-6xl">🏢</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}