import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Анна Сергеева",
    role: "Владелец квартиры",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    content: "Установили кондиционер Сентек Комфорт в спальню. Очень тихий, прекрасно охлаждает помещение. Монтаж выполнили аккуратно и быстро, за что отдельное спасибо. Теперь думаем заказать еще один в гостиную.",
    image_work: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Дмитрий Ковалев",
    role: "Директор ресторана",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 5,
    content: "Заказывали установку трех сплит-систем для нашего ресторана. Профессиональный подход, грамотный инженер, который помог подобрать оптимальные модели. Все работает уже полгода без нареканий.",
    image_work: "https://images.unsplash.com/photo-1590756254933-2873d72a83c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Елена Новикова",
    role: "Руководитель офиса",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80",
    rating: 4,
    content: "Оборудовали климатической системой Сентек наш офис. Результатом довольны — работает бесперебойно и эффективно. Особенно понравилась возможность управления через Wi-Fi. Рекомендую данную компанию.",
    image_work: "https://images.unsplash.com/photo-1594193306461-03b5ee4c5935?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 bg-sentech-bgLight section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Мнения тех, кто уже оценил качество нашей работы и комфорт климатических систем Сентек
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-8 md:p-10">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    className={i < activeTestimonial.rating ? "fill-sentech-accent text-sentech-accent" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <blockquote className="text-lg italic text-gray-600 mb-6">
                "{activeTestimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={activeTestimonial.image} 
                  alt={activeTestimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-sentech">{activeTestimonial.name}</h4>
                  <p className="text-sm text-gray-500">{activeTestimonial.role}</p>
                </div>
              </div>
              
              <div className="flex justify-between mt-8">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handlePrev}
                  className="border-sentech text-sentech hover:bg-sentech/10 rounded-full"
                >
                  <ChevronLeft size={18} />
                </Button>
                <div className="flex space-x-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2.5 h-2.5 rounded-full ${
                        idx === activeIndex ? "bg-sentech" : "bg-gray-300"
                      }`}
                      onClick={() => setActiveIndex(idx)}
                    />
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleNext}
                  className="border-sentech text-sentech hover:bg-sentech/10 rounded-full"
                >
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
            
            <div className="h-full">
              <img 
                src={activeTestimonial.image_work} 
                alt="Установленная сплит-система" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
