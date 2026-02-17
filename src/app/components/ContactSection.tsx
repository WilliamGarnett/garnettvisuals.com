import { SectionHeader } from "./SectionHeader";

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="CONTACT" index="04" />

      <div className="max-w-lg">
        {/* Primary email */}
        <a
          href="mailto:william@garnettvisuals.com"
          className="text-xl font-medium decoration-1 underline-offset-4 hover:underline md:text-2xl"
        >
          william@garnettvisuals.com
        </a>

        {/* Social links */}
        <div className="mt-8 space-y-2 text-sm">
          <p>
            <span className="text-gray-mid">github:</span>{" "}
            <a
              href="https://github.com/WilliamGarnett"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @WilliamGarnett
            </a>
          </p>
          <p>
            <span className="text-gray-mid">linkedin:</span>{" "}
            <a
              href="https://linkedin.com/in/williamgarnett"
              className="underline-offset-2 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              /williamgarnett
            </a>
          </p>
        </div>

        {/* Terminal prompt */}
        <div className="mt-16 text-sm text-gray-mid">
          <span className="text-black">&gt;</span> ready for collaboration
          <span className="ml-1 inline-block h-[1.1em] w-[0.6em] bg-black align-text-bottom" />
        </div>
      </div>
    </section>
  );
}
