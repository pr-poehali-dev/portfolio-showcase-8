const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-4">Даниил Программистов</h3>
            <p className="text-slate-300 mb-4 max-w-md">
              Fullstack разработчик, создающий современные веб-приложения с
              акцентом на производительность и пользовательский опыт.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                📧
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                💼
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                🐙
              </a>
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                📱
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-white transition-colors"
                >
                  Навыки
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="hover:text-white transition-colors"
                >
                  Опыт
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Портфолио
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-2 text-slate-300">
              <li>aleksey@example.com</li>
              <li>+7 (999) 123-45-67</li>
              <li>Москва, Россия</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Даниил Программистов. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
