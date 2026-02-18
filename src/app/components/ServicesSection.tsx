import { SectionHeader } from "./SectionHeader";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript. Building clean, user-friendly interfaces with modern component-driven architecture.",
  },
  {
    id: "02",
    title: "UI/UX Implementation",
    description:
      "Turning designs into responsive, accessible experiences that feel intuitive. From Figma to polished product.",
  },
  {
    id: "03",
    title: "Performance Optimization",
    description:
      "Fast load times, smooth interactions, and optimized assets. Ensuring every interface feels instant.",
  },
  {
    id: "04",
    title: "Digital Media Production",
    description:
      "Video editing, image editing, and visual content creation. A creative edge that complements every frontend build.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="SERVICES" index="01" />

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="group border border-gray-light p-8 transition-colors duration-300 hover:border-black"
          >
            <span className="text-xs text-gray-mid">{service.id}</span>

            <h3 className="mb-3 mt-3 text-lg font-medium">{service.title}</h3>

            <p className="text-sm leading-relaxed text-gray-mid">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
