import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const clients = [
  {
    name: "TUVA",
    logo: "/clients/TUVA.png",
    work: "Frontend Development",
  },
  {
    name: "SSL",
    logo: "/clients/SSL.png",
    work: "Video Production",
  },
  {
    name: "BIG",
    logo: "/clients/BIG.png",
    work: "Video Production",
  },
  {
    name: "EXEL",
    logo: "/clients/EXEL.png",
    work: "Content Production",
  },
  {
    name: "ALLSTAR",
    logo: "/clients/ALLSTAR.png",
    work: "Content Production",
  },
  {
    name: "RENEVATIO",
    logo: "/clients/RENEVATIO.png",
    work: "Content Production",
  },
  {
    name: "ONGOAL",
    logo: "/clients/ONGOAL.png",
    work: "Content Production",
  },
  {
    name: "OXDOG",
    logo: "/clients/OXDOG.png",
    work: "Video Production",
  },
];

export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="CLIENTS" index="03" />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-10">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col items-center gap-3 md:gap-4">
            <div className="flex h-24 w-24 items-center justify-center border border-dashed border-gray-light bg-beige-dark/30 p-4 md:h-32 md:w-32 md:p-5">
              <Image
                src={client.logo}
                alt={client.name}
                width={64}
                height={64}
                className="h-full w-full object-contain"
              />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium">{client.name}</p>
              {/* <p className="text-xs text-gray-mid">{client.work}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
