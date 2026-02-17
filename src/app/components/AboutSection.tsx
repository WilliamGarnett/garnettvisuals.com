import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="ABOUT" index="01" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Photo placeholder */}
        <div className="md:col-span-4">
          <div className="flex aspect-[3/4] items-center justify-center border border-dashed border-gray-light bg-beige-dark/30">
            <div className="text-center text-gray-mid">
              <div className="mb-2 text-xs uppercase tracking-widest">
                [photo]
              </div>
              <div className="text-xs">384 x 512</div>
            </div>
          </div>
        </div>

        {/* Bio content */}
        <div className="md:col-span-8">
          {/* Metadata block */}
          <div className="mb-8 space-y-1 border-l border-gray-light pl-4 text-xs text-gray-mid">
            <p>
              location: <span className="text-black">Stockholm, Sweden</span>
            </p>
            <p>
              status:{" "}
              <span className="text-black">Available for projects</span>
            </p>
            <p>
              experience: <span className="text-black">5+ years</span>
            </p>
            <p>
              focus:{" "}
              <span className="text-black">React, Next.js, TypeScript</span>
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-lg space-y-4 text-sm leading-relaxed">
            <p>
              I build interfaces where data meets clean design. Specializing in
              frontend development with a focus on performance, accessibility,
              and visual precision.
            </p>
            <p>
              Every project starts with understanding the data and ends with an
              interface that makes that data feel effortless to navigate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
