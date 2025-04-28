import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">СЕНТЕК<span className="text-sentech-accent">КЛИМАТ</span></h3>
            <p className="text-gray-400 mb-6">
              Официальный дистрибьютор сплит-систем Сентек в России. Продажа, установка и обслуживание климатической техники.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-sentech transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Каталог</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для дома</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Для бизнеса</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Инверторные</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Неинверторные</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Мульти-сплит системы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Консультация</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Монтаж</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Обслуживание</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ремонт</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантийное обслуживание</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Информация</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О компании</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Доставка и оплата</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Гарантия</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 СентекКлимат. Все права защищены.</p>
          <p className="mt-2 md:mt-0">Разработка и поддержка: <a href="#" className="text-sentech hover:underline">WebDev</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
