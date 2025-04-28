import { Card, CardContent } from "@/components/ui/card";
import { Battery, Shield, ThumbsUp, Zap, Upload, Award } from "lucide-react";

const advantages = [
  {
    icon: <Zap className="h-10 w-10 text-sentech" />,
    title: "Энергоэффективность",
    description: "Класс A+++ позволяет существенно экономить на электроэнергии даже при постоянной работе"
  },
  {
    icon: <Battery className="h-10 w-10 text-sentech" />,
    title: "Увеличенный ресурс",
    description: "Срок службы до 15 лет благодаря высококачественным компонентам и сборке"
  },
  {
    icon: <Shield className="h-10 w-10 text-sentech" />,
    title: "Гарантия 5 лет",
    description: "Официальная гарантия от производителя на все модели сплит-систем Сентек"
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-sentech" />,
    title: "Тихая работа",
    description: "Уровень шума от 22 дБ — тише шепота, не мешает спать и работать"
  },
  {
    icon: <Upload className="h-10 w-10 text-sentech" />,
    title: "Умное управление",
    description: "Приложение для смартфона с возможностью удаленного контроля и настройки расписания"
  },
  {
    icon: <Award className="h-10 w-10 text-sentech" />,
    title: "Сертифицированная техника",
    description: "Все модели прошли сертификацию и соответствуют международным стандартам качества"
  }
];

const AdvantagesSection = () => {
  return (
    <section id="advantages" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Почему выбирают <span className="text-sentech">Сентек</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Наши климатические системы сочетают в себе инновационные технологии, надежность и современный дизайн
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => (
            <AdvantageCard 
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-sentech-dark to-sentech rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Профессиональная установка с гарантией</h3>
              <p className="text-white/80 mb-6">
                Наши сертифицированные специалисты выполнят монтаж сплит-систем любой сложности с соблюдением всех технических требований
              </p>
              <ul className="space-y-3 text-white">
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Бесплатный выезд для замеров
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Монтаж в день заказа или в удобное время
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Гарантия на установку 3 года
                </li>
              </ul>
            </div>
            <div className="h-64 md:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1620465381914-445cc6cda6ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Установка сплит-систем" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sentech-dark/70 to-transparent md:bg-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AdvantageCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 bg-sentech/10 p-4 rounded-full">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvantagesSection;
