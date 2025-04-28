import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake, Thermometer, Wind } from "lucide-react";
import { useEffect, useRef } from "react";

const HeroSection = () => {
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
    <section id="hero" ref={sectionRef} className="relative pt-28 pb-20 md:pt-36 md:pb-28 section-reveal">
      <div className="absolute inset-0 hero-gradient z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-white leading-tight mb-6">
              Прохлада в вашем доме за 24 часа
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-lg">
              Установка сплит-систем Сентек под ключ с гарантией 3 года. Современные технологии для комфорта вашего дома.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-sentech-green hover:bg-green-600 transition-colors hover-scale">
                Выбрать модель
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" className="bg-sentech-accent hover:bg-orange-600 transition-colors hover-scale">
                Рассчитать стоимость
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="bg-white/30 p-2 rounded-full">
                  <Snowflake className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Эффективное охлаждение</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="bg-white/30 p-2 rounded-full">
                  <Thermometer className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Теплый режим</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/20 backdrop-blur-sm rounded-lg">
                <div className="bg-white/30 p-2 rounded-full">
                  <Wind className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Система очистки</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <img 
              src="https://images.unsplash.com/photo-1631560390548-3603c98a01dc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Сплит-система Сентек" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="bg-sentech-green/20 p-2 rounded-full">
                  <svg className="h-5 w-5 text-sentech-green" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">Официальная гарантия 3 года</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
