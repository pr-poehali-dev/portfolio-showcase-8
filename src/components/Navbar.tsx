import { Button } from "@/components/ui/button";

const Navbar = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-bold text-xl text-slate-800">Даниил.dev</div>

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Навыки
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Опыт
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-slate-600 hover:text-purple-600 transition-colors"
            >
              Портфолио
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Контакты
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              ☰
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
