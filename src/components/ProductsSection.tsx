import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const products = [
  {
    id: 1,
    name: "Сентек Эконом",
    image: "https://images.unsplash.com/photo-1596121582659-a1b83afb3da8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    power: "2.5 кВт",
    noise: "24 дБ",
    price: "32 000 ₽",
    features: ["Охлаждение/обогрев", "Базовый фильтр", "LED-дисплей"]
  },
  {
    id: 2,
    name: "Сентек Комфорт",
    image: "https://images.unsplash.com/photo-1589861412787-e2a59c054773?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    power: "3.5 кВт",
    noise: "22 дБ",
    price: "45 000 ₽",
    features: ["Wi-Fi управление", "Ионизатор", "Ночной режим"]
  },
  {
    id: 3,
    name: "Сентек Премиум",
    image: "https://images.unsplash.com/photo-1628744448839-a475c64e35e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    power: "5.0 кВт",
    noise: "19 дБ",
    price: "62 000 ₽",
    features: ["Инверторная технология", "Климат-контроль", "Система самоочистки"]
  }
];

const ProductsSection = () => {
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
    <section id="products" ref={sectionRef} className="py-20 bg-sentech-bgLight section-reveal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши популярные модели</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите подходящую модель кондиционера Сентек для вашего помещения. Мы предлагаем оптимальное сочетание цены и качества.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover-scale border border-gray-100 shadow-md">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-sentech">{product.name}</CardTitle>
                <CardDescription>Современные технологии комфорта</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Мощность</p>
                    <p className="font-semibold">{product.power}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Шум</p>
                    <p className="font-semibold">{product.noise}</p>
                  </div>
                  <div className="text-center p-2 bg-sentech/5 rounded-lg">
                    <p className="text-gray-500">Цена</p>
                    <p className="font-semibold text-sentech">{product.price}</p>
                  </div>
                </div>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-sentech rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-sentech hover:bg-sentech-dark">Подробнее</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-sentech text-sentech hover:bg-sentech/10">
            Смотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
