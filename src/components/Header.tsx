import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Início", href: "#inicio" },
    { label: "Modelos", href: "#modelos" },
    { label: "Manutenção", href: "#manutencao" },
    { label: "Bike Tour", href: "#biketour" },
    { label: "Contato", href: "#contato" },
  ];

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="bg-primary fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 ">
              <img src={logo} alt="Bicicletário Itapuã Logo" className="w-12 h-12 rounded-full" />
            </div>

            {/* Título Central */}
            <h1 className="text-xl md:text-2xl font-bold text-secondary absolute left-1/2 transform -translate-x-1/2">
              Bicicletário Itapuã
            </h1>

            {/* Menu Icon */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-secondary" />
              ) : (
                <Menu className="w-6 h-6 text-secondary" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={`fixed top-[73px] right-0 h-full w-64 bg-background border-l border-border z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="p-6">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="w-full text-left px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-30 top-[73px]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
