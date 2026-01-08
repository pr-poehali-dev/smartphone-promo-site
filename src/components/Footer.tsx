import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Smartphone" className="text-white" size={20} />
              </div>
              <span className="font-heading font-bold text-lg">
                НАДЕЖНЫЕ<br />СМАРТФОНЫ
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Официальная сеть магазинов в России, Дубае и Гонконге
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-white transition-colors">
                  Главная
                </a>
              </li>
              <li>
                <a href="#promotions" className="text-gray-400 hover:text-white transition-colors">
                  Акции
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  О бренде
                </a>
              </li>
              <li>
                <a href="#contacts" className="text-gray-400 hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Локации</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <span>🇷🇺</span>
                <span>Россия</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🇦🇪</span>
                <span>Дубай</span>
              </li>
              <li className="flex items-center gap-2">
                <span>🇭🇰</span>
                <span>Гонконг</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Связь</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="MessageCircle" size={18} />
                <span>Telegram</span>
              </a>
              <a
                href="mailto:info@smartphones.ru"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Mail" size={18} />
                <span>Email</span>
              </a>
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Phone" size={18} />
                <span>+7 (495) 123-45-67</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Надежные Смартфоны. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
