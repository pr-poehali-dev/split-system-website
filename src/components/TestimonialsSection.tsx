import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Александр Петров",
    position: "Владелец квартиры",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 5,
    text: "Приобрел сплит-систему Сентек для квартиры площадью 35 кв.м. Очень доволен - быстро охлаждает помещение, работает почти бесшумно. Отдельно хочу отметить качество сборки и стильный дизайн.",
    date: "15.03.2025"
  },
  {
    id: 2,
    name: "Екатерина Иванова",
    position: "Руководитель офиса",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 5,
    text: "Установили три сплит-системы Сентек в офисе. Персонал очень доволен - в помещении поддерживается оптимальная температура даже в жару. Экономичные в плане электроэнергии, что для бизнеса важно.",
    date: "02.04.2025"
  },
  {
    id: 3,
    name: "Дмитрий Соколов",
    position: "Владелец загородного дома",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4,
    text: "Приобрели две сплит-системы для дома. Монтаж был выполнен профессионально и быстро. Система очистки воздуха работает отлично, особенно это ценно для загородного дома. Единственное - хотелось бы более детальную инструкцию на русском.",
    date: "10.04.2025"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = window.innerWidth < 768;
  const itemsPerPage = isMobile ? 1 : 3;
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= testimonials.length ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prevIndex - 1
    );
  };
  
  // Calculate visible testimonials
  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Узнайте, что говорят пользователи сплит-систем Сентек о своем опыте использования нашей техники
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full hover:bg-sentech/10 hover:text-sentech"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full hover:bg-sentech/10 hover:text-sentech"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-xl shadow-sm max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <img 
                src="https://images.unsplash.com/photo-1560546376-1683917956f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                alt="Доверие клиентов" 
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Доверие более 10 000 клиентов</h3>
            <p className="text-gray-600 mb-6">
              Мы гордимся тем, что более 10 000 клиентов уже выбрали сплит-системы Сентек для своих домов и офисов. Присоединяйтесь к ним и оцените комфорт, который создают наши климатические системы.
            </p>
            <Button className="bg-sentech hover:bg-sentech-dark">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-gray-500">{testimonial.position}</p>
          </div>
        </div>
        
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
            />
          ))}
        </div>
        
        <p className="text-gray-600 mb-4">{testimonial.text}</p>
        
        <p className="text-sm text-gray-400">{testimonial.date}</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialsSection;
