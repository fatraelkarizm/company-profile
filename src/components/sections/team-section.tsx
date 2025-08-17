const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in digital transformation. Passionate about using technology to solve real-world problems.",
    avatar: "AJ",
  },
  {
    name: "Sarah Chen",
    role: "CTO",
    bio: "Full-stack expert and architect of our technical vision. Specializes in scalable systems and emerging technologies.",
    avatar: "SC",
  },
  {
    name: "Michael Rodriguez",
    role: "Lead Designer",
    bio: "Creative force behind our user experiences. Believes great design is invisible but unforgettable.",
    avatar: "MR",
  },
  {
    name: "Emily Davis",
    role: "Project Manager",
    bio: "Orchestrates seamless project delivery. Expert in agile methodologies and client relationship management.",
    avatar: "ED",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    bio: "Code craftsman with expertise in modern web technologies. Passionate about clean, efficient, and maintainable code.",
    avatar: "DK",
  },
  {
    name: "Lisa Wang",
    role: "UX Researcher",
    bio: "User advocate and data-driven designer. Transforms user insights into intuitive digital experiences.",
    avatar: "LW",
  },
];

export function TeamSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            The talented individuals behind TechFlow&apos;s success
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {team.map((person) => (
            <li key={person.name} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white text-xl font-semibold">
                {person.avatar}
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-primary font-medium">{person.role}</p>
              <p className="mt-4 text-base leading-6 text-gray-600">{person.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}