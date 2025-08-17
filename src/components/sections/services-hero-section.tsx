export function ServicesHeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary/30 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive digital solutions tailored to your business needs. From conception to deployment, 
            we handle every aspect of your digital transformation journey.
          </p>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative mx-auto max-w-lg">
            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <div className="text-6xl">🛠️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}