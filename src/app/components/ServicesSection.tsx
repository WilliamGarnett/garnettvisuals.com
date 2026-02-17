import { SectionHeader } from "./SectionHeader";

const services = [
  {
    id: "01",
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript. Component-driven architecture with pixel-perfect implementation.",
    level: 95,
  },
  {
    id: "02",
    title: "UI/UX Implementation",
    description:
      "Translating designs into responsive, accessible interfaces. Figma to code.",
    level: 90,
  },
  {
    id: "03",
    title: "Performance Optimization",
    description:
      "Core Web Vitals, bundle analysis, lazy loading. Making fast things faster.",
    level: 85,
  },
  {
    id: "04",
    title: "Data Visualization",
    description:
      "Charts, dashboards, interactive data displays. D3.js, Recharts, custom SVG.",
    level: 80,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="SERVICES" index="02" />

      <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="group border border-gray-light p-8 transition-colors duration-300 hover:border-black"
          >
            <span className="text-xs text-gray-mid">{service.id}</span>

            <h3 className="mb-3 mt-3 text-lg font-medium">{service.title}</h3>

            <p className="mb-6 text-sm leading-relaxed text-gray-mid">
              {service.description}
            </p>

            {/* Proficiency bar */}
            <div className="relative h-px bg-gray-light">
              <div
                className="absolute left-0 top-0 h-px bg-black transition-all duration-700"
                style={{ width: `${service.level}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between">
              <span className="text-[10px] text-gray-mid">proficiency</span>
              <span className="text-[10px] text-gray-mid">
                {service.level}/100
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
