import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Transforming Ideas into
            <span className="text-primary"> Digital Reality</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We create cutting-edge digital solutions that empower your business to thrive in the modern world. 
            From web development to mobile apps, we bring your vision to life.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-8 bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium h-10 px-8 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative mx-auto max-w-lg">
            <div className="w-full h-64 sm:h-80 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center">
              <div className="text-6xl animate-bounce">🚀</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}