import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Snowflake, ThermometerSun } from "lucide-react";

interface Product {
  id: number;
  name: string;
  model: string;
  price: number;
  image: string;
  type: string;
  features: string[];
  isPopular: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: "Сентек Оптима",
    model: "ST-09",
    price: 24990,
    image: "https://images.unsplash.com/photo-1628744404730-5e143358539b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    type: "home",
    features: ["Площадь до 25 м²", "Инверторный", "Wi-Fi управление"],
    isPopular: true
  },
  {
    id: 2,
    name: "Сентек Комфорт",
    model: "ST-12",
    price: 32990,
    image: "https://images.unsplash.com/photo-1613251806606-3c5d0e03c3bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    type: "home",
    features: ["Площадь до 35 м²", "Инверторный", "Ионизация воздуха"],
    isPopular: false
  },
  {
    id: 3,
    name: "Сентек Бизнес",
    model: "ST-18",
    price: 54990,
    image: "https://images.unsplash.com/photo-1581275682300-b47bef572e3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    type: "business",
    features: ["Площадь до 50 м²", "Инверторный", "Уровень шума 22 дБ"],
    isPopular: false
  }
];

const ProductsSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(product => product.type === activeTab);

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Каталог сплит-систем <span className="text-sentech">Сентек</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Выберите оптимальное решение для вашего дома или офиса из нашего ассортимента климатической техники
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger 
                value="all" 
                onClick={() => setActiveTab("all")}
                className="data-[state=active]:bg-sentech data-[state=active]:text-white"
              >
                Все модели
              </TabsTrigger>
              <TabsTrigger 
                value="home" 
                onClick={() => setActiveTab("home")}
                className="data-[state=active]:bg-sentech data-[state=active]:text-white"
              >
                Для дома
              </TabsTrigger>
              <TabsTrigger 
                value="business" 
                onClick={() => setActiveTab("business")}
                className="data-[state=active]:bg-sentech data-[state=active]:text-white"
              >
                Для бизнеса
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="home" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="business" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-sentech text-sentech hover:bg-sentech/10">
            Смотреть все модели
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg group">
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover transition-transform group-hover:scale-105" 
        />
        {product.isPopular && (
          <Badge className="absolute top-4 right-4 bg-sentech-accent">Популярная модель</Badge>
        )}
      </div>

      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500">Модель: {product.model}</p>
          </div>
          <div className="flex space-x-2">
            <Snowflake className="h-5 w-5 text-sentech" />
            <ThermometerSun className="h-5 w-5 text-sentech-accent" />
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <ul className="space-y-2">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm">
              <svg className="h-4 w-4 text-sentech mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <p className="font-bold text-2xl text-gray-900">{product.price.toLocaleString()} ₽</p>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button variant="outline" className="w-1/2 border-sentech text-sentech hover:bg-sentech/10">
          Подробнее
        </Button>
        <Button className="w-1/2 bg-sentech hover:bg-sentech-dark ml-2">
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductsSection;
