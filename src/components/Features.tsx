import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Features = () => {
  const features = [
    {
      icon: 'Store',
      title: 'Магазины в 3 странах',
      description: 'Россия, Дубай и Гонконг — выбирайте удобную локацию',
      color: 'from-purple-500 to-purple-700'
    },
    {
      icon: 'ShieldCheck',
      title: 'Официальный бренд',
      description: 'Сертифицированные оригиналы с полной гарантией',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: 'Zap',
      title: 'Быстрая доставка',
      description: 'Весь товар в наличии — отправляем день в день',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: 'Gift',
      title: 'Подарки в каждой покупке',
      description: 'Чехол, стекло и сувениры от 3000₽',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: 'Trophy',
      title: 'Розыгрыши путевок',
      description: 'Каждую неделю разыгрываем поездки в Дубай и Гонконг',
      color: 'from-yellow-500 to-orange-600'
    },
    {
      icon: 'Users',
      title: '1 000 000+ клиентов',
      description: 'Более миллиона довольных покупателей по всему миру',
      color: 'from-green-500 to-emerald-700'
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/b8e3535d-5f4f-4499-9166-5f4bba62e341/files/362cbb50-22ee-411e-b573-0199e133e304.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 via-white to-purple-50/30" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Официальный статус, проверенное качество и забота о каждом клиенте
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon name={feature.icon as any} className="text-white" size={32} />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;