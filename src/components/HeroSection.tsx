import { Button } from "@/components/ui/button";
import { ArrowRight, Snowflake, Thermometer, Wind } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-sky-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-sentech/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-sentech-light/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Климатические системы <span className="text-sentech">Сентек</span> для вашего комфорта
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Современные сплит-системы с передовыми технологиями очистки воздуха, энергоэффективностью и бесшумной работой
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-sentech hover:bg-sentech-dark transition-colors">
                Смотреть каталог
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-sentech text-sentech hover:bg-sentech/10">
                Получить консультацию
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="bg-sentech/10 p-2 rounded-full">
                  <Snowflake className="h-5 w-5 text-sentech" />
                </div>
                <div>
                  <p className="font-medium">Эффективное охлаждение</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="bg-sentech/10 p-2 rounded-full">
                  <Thermometer className="h-5 w-5 text-sentech" />
                </div>
                <div>
                  <p className="font-medium">Теплый режим</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-white/80 backdrop-blur-sm rounded-lg shadow-sm">
                <div className="bg-sentech/10 p-2 rounded-full">
                  <Wind className="h-5 w-5 text-sentech" />
                </div>
                <div>
                  <p className="font-medium">Система очистки</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative fade-in">
            <img 
              src="https://images.unsplash.com/photo-1628413993904-94ecb60f1239?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Сплит-система Сентек" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg max-w-xs hidden md:block">
              <div className="flex items-center space-x-2">
                <div className="bg-green-100 p-2 rounded-full">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <p className="text-sm font-medium">Официальная гарантия 5 лет</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
