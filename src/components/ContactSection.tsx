import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRef, useEffect } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
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
    <section id="contacts" ref={sectionRef} className="py-20 bg-white section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Связаться с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку, и наш менеджер свяжется с вами в ближайшее время для консультации
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="bg-sentech text-white rounded-2xl overflow-hidden shadow-lg">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-6 text-white">Контактная информация</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Телефон</p>
                    <a href="tel:+74951234567" className="text-xl font-medium hover:underline">+7 (495) 123-45-67</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <a href="mailto:info@sentec.ru" className="text-xl font-medium hover:underline">info@sentec.ru</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-white/20 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Адрес</p>
                    <p className="text-xl font-medium">г. Москва, ул. Климатическая, 42</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <p className="mb-4 text-white/80">Режим работы:</p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Пн-Пт:</span>
                    <span className="font-medium">9:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Сб-Вс:</span>
                    <span className="font-medium">10:00 - 18:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-sentech-bgLight p-8 md:p-10 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-sentech">Форма обратной связи</h3>
            
            <form>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    placeholder="Иван Петров"
                    className="border-gray-300 focus:border-sentech"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Телефон*
                  </label>
                  <Input
                    id="phone"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="border-gray-300 focus:border-sentech"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@mail.ru"
                    className="border-gray-300 focus:border-sentech"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Опишите ваш запрос"
                    rows={4}
                    className="border-gray-300 focus:border-sentech"
                  />
                </div>
                
                <Button className="w-full bg-sentech-accent hover:bg-orange-600 hover-scale">
                  <Send className="mr-2 h-4 w-4" />
                  Отправить заявку
                </Button>
                
                <p className="text-xs text-gray-500 mt-2">
                  Нажимая на кнопку, вы соглашаетесь с нашей политикой конфиденциальности
                </p>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg h-[400px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.3876508492277!2d37.617765!3d55.755826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1588888888888!5m2!1sru!2sru" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
