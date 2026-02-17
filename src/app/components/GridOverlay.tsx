export function GridOverlay() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
      aria-hidden="true"
      style={{
        backgroundImage: `
          linear-gradient(to right, #0A0A0A 1px, transparent 1px),
          linear-gradient(to bottom, #0A0A0A 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  );
}
