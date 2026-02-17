export function Footer() {
  return (
    <footer className="border-t border-gray-light px-6 py-8 md:px-16 lg:px-24">
      <div className="flex flex-col justify-between text-xs text-gray-mid md:flex-row">
        <span>&copy; {new Date().getFullYear()} William Garnett</span>
        <span>last_updated: 2026.02</span>
      </div>
    </footer>
  );
}
