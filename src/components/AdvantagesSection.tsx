import { Shield, Clock, Calculator, LineChart } from "lucide-react";
import { useEffect, useRef } from "react";

const advantages = [
  {
    icon: Shield,
    title: "Гарантия 3 года",
    description: "Официальная гарантия на оборудование и все монтажные работы"
  },
  {
    icon: Clock,
    title: "Монтаж за 1 день",
    description: "Быстрая и профессиональная установка сплит-системы"
  },
  {
    icon: Calculator,
    title: "Бесплатный замер",
    description: "Инженер приедет и рассчитает необходимую мощность бесплатно"
  },
  {
    icon: LineChart,
    title: "Энергоэффективность",
    description: "Системы класса А+++ с экономичным энергопотреблением"
  }
];

const AdvantagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="advantages" ref={sectionRef} className="py-20 bg-white section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши преимущества</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выбирая Сентек, вы получаете не только высококачественное оборудование, но и первоклассный сервис
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6 rounded-xl bg-sentech-bgLight hover-scale"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-sentech flex items-center justify-center mb-4">
                <item.icon size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sentech to-sentech-light rounded-2xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Как мы работаем</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-sentech flex items-center justify-center mr-4">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Заявка</h4>
                    <p className="text-white/90">Оставьте заявку на сайте или позвоните нам</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-sentech flex items-center justify-center mr-4">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Выезд инженера</h4>
                    <p className="text-white/90">Бесплатная консультация и точный расчет</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-sentech flex items-center justify-center mr-4">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Монтаж</h4>
                    <p className="text-white/90">Профессиональная установка за 1 день</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sentech-accent text-white flex items-center justify-center mr-4">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Готово!</h4>
                    <p className="text-white/90">Наслаждайтесь комфортным климатом</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Монтаж сплит-системы" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
