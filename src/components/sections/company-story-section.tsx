export function CompanyStorySection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
            Our Story
          </h2>
          <div className="mt-16 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Founded in 2020
                </h3>
                <p className="text-lg text-gray-600">
                  TechFlow Solutions was born from a simple observation: businesses were struggling to keep pace 
                  with rapid digital transformation. We set out to bridge that gap by creating intuitive, 
                  powerful digital solutions that actually work for people.
                </p>
              </div>
              <div className="bg-primary/10 rounded-xl p-8 flex items-center justify-center">
                <div className="text-4xl">🚀</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Growing Impact
                </h3>
                <p className="text-lg text-gray-600">
                  Today, we&apos;ve helped over 200+ businesses transform their digital presence, 
                  from startups disrupting industries to established companies embracing innovation. 
                  Our approach combines cutting-edge technology with human-centered design.
                </p>
              </div>
              <div className="lg:order-1 bg-secondary/50 rounded-xl p-8 flex items-center justify-center">
                <div className="text-4xl">📈</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Future Vision
                </h3>
                <p className="text-lg text-gray-600">
                  We envision a world where technology seamlessly integrates with business goals, 
                  where innovation drives growth, and where digital solutions truly serve humanity. 
                  We&apos;re building that future, one project at a time.
                </p>
              </div>
              <div className="bg-accent/10 rounded-xl p-8 flex items-center justify-center">
                <div className="text-4xl">🔮</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}