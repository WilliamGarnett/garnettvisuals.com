import Image from "next/image";
import { SectionHeader } from "./SectionHeader";

const clients = [
  {
    name: "Acme Corp",
    logo: "/clients/acme.png",
    work: "Frontend Development",
  },
  {
    name: "Northlight",
    logo: "/clients/northlight.png",
    work: "Video Production",
  },
  {
    name: "Streamline",
    logo: "/clients/streamline.png",
    work: "UI/UX Implementation",
  },
  {
    name: "Verdant",
    logo: "/clients/verdant.png",
    work: "Frontend Development",
  },
];

export function ClientsSection() {
  return (
    <section id="clients" className="px-6 py-24 md:px-16 lg:px-24">
      <SectionHeader label="CLIENTS" index="03" />

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {clients.map((client) => (
          <div key={client.name} className="flex flex-col items-center gap-3">
            <div className="flex h-24 w-24 items-center justify-center border border-dashed border-gray-light bg-beige-dark/30 p-4">
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
              <p className="text-xs text-gray-mid">{client.work}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
