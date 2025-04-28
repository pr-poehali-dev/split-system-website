import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacts" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Оставьте заявку или свяжитесь с нами любым удобным способом для консультации или заказа сплит-системы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Заполните форму</h3>
            
            <div className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Ваше имя"
                  className="rounded-lg border-gray-300 focus:border-sentech focus:ring-sentech"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Ваш телефон"
                  className="rounded-lg border-gray-300 focus:border-sentech focus:ring-sentech"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Ваш email"
                  className="rounded-lg border-gray-300 focus:border-sentech focus:ring-sentech"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Ваше сообщение"
                  className="rounded-lg border-gray-300 focus:border-sentech focus:ring-sentech min-h-[150px]"
                />
              </div>
              
              <div>
                <Button className="w-full bg-sentech hover:bg-sentech-dark">
                  Отправить заявку
                </Button>
              </div>
              
              <p className="text-sm text-gray-500 text-center">
                Нажимая кнопку «Отправить заявку», вы соглашаетесь с нашей политикой конфиденциальности
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <ContactCard 
                icon={<Phone className="h-5 w-5 text-sentech" />}
                title="Телефон"
                content={<a href="tel:+74951234567" className="hover:text-sentech">+7 (495) 123-45-67</a>}
              />
              
              <ContactCard 
                icon={<Mail className="h-5 w-5 text-sentech" />}
                title="Email"
                content={<a href="mailto:info@sentech.ru" className="hover:text-sentech">info@sentech.ru</a>}
              />
              
              <ContactCard 
                icon={<MapPin className="h-5 w-5 text-sentech" />}
                title="Адрес"
                content="г. Москва, ул. Климатическая, д. 10"
              />
              
              <ContactCard 
                icon={<Clock className="h-5 w-5 text-sentech" />}
                title="Режим работы"
                content="Пн-Пт: 9:00 - 20:00, Сб: 10:00 - 18:00"
              />
            </div>
            
            <div className="rounded-lg overflow-hidden shadow h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.7831268504914!2d37.617676515946364!3d55.755763880557536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2sru!4v1650532547062!5m2!1sru!2sru" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: React.ReactNode }) => {
  return (
    <Card>
      <CardContent className="p-4 flex items-start space-x-4">
        <div className="bg-sentech/10 p-2 rounded-full">
          {icon}
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <div className="text-gray-600">{content}</div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactSection;
