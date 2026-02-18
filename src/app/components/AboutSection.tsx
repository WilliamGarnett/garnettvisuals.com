import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="ABOUT" index="02" />

      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
        {/* Photo placeholder */}
        <div className="md:col-span-4">
          <div className="flex aspect-[4/3] items-center justify-center border border-dashed border-gray-light bg-beige-dark/30">
            <Image
              src="/william-garnett.png"
              alt="Profile"
              width={500}
              height={500}
              className="h-full w-full object-cover"
            />
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
              status: <span className="text-black">Available for projects</span>
            </p>
            <p>
              experience: <span className="text-black">3+ years</span>
            </p>
            <p>
              focus:{" "}
              <span className="text-black">
                React, Svelte, Next.js, TypeScript, Figma
              </span>
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-lg space-y-4 text-sm leading-relaxed">
            <p>
              I build clean, intuitive interfaces that people genuinely enjoy
              using. Specializing in frontend development with a focus on
              usability, performance, and visual polish.
            </p>
            <p>
              Every project starts with the user and ends with an interface that
              feels effortless — whether it&apos;s presenting complex data or
              guiding someone through a seamless experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
