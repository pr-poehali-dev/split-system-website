import { Instagram, Facebook, Twitter } from "lucide-react";
import { Snowflake } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Snowflake className="h-6 w-6 text-sentech mr-2" />
              <h3 className="text-xl font-bold text-white">
                СЕНТЕК<span className="text-sentech-accent">КЛИМАТ</span>
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Профессиональная установка и обслуживание систем кондиционирования. Работаем с 2005 года.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Установка кондиционеров</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Обслуживание сплит-систем</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ремонт оборудования</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Продажа запчастей</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Информация</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантии</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Акции</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📱</span>
                <a href="tel:+74951234567" className="hover:text-white transition-colors">+7 (495) 123-45-67</a>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@sentec.ru" className="hover:text-white transition-colors">info@sentec.ru</a>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                <span>г. Москва, ул. Климатическая, 42</span>
              </li>
              <li className="flex items-center text-gray-400">
                <span className="mr-2">🕒</span>
                <span>Пн-Пт: 9:00 - 20:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 mb-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} СентекКлимат. Все права защищены.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Пользовательское соглашение</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Карта сайта</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
