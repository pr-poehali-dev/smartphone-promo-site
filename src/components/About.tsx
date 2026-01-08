import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import ParallaxBackground from '@/components/ParallaxBackground';

const About = () => {
  const locations = [
    {
      country: 'Россия',
      flag: '🇷🇺',
      title: 'Официальные магазины',
      description: 'Новые оригиналы и восстановленные смартфоны высокого качества',
      features: [
        'Отправка день в день',
        '100% оригинальная продукция',
        'Чехол и стекло в подарок',
        'Гарантия качества'
      ],
      color: 'from-blue-500 to-blue-700'
    },
    {
      country: 'Дубай',
      flag: '🇦🇪',
      title: 'Премиум сервис',
      description: 'Оригинальные смартфоны с доставкой быстрее, чем из России',
      features: [
        'Гарантия качества и сервиса в России',
        'Доставка быстрее российских магазинов',
        'Сувенир до 3000₽ из Дубая',
        '5 путевок в Дубай еженедельно'
      ],
      color: 'from-purple-500 to-purple-700'
    },
    {
      country: 'Гонконг',
      flag: '🇭🇰',
      title: 'Азиатское качество',
      description: 'Восстановленные iPhone по регламенту Apple с полной русификацией',
      features: [
        'Восстановлены по стандартам Apple',
        'Полная русификация',
        'Гарантия 365 дней',
        'Максимально выгодные цены'
      ],
      color: 'from-red-500 to-pink-600'
    }
  ];

  return (
    <div className="py-24 bg-white relative overflow-hidden">
      <ParallaxBackground 
        imageUrl="https://cdn.poehali.dev/projects/b8e3535d-5f4f-4499-9166-5f4bba62e341/files/362cbb50-22ee-411e-b573-0199e133e304.jpg"
        opacity={0.1}
        speed={0.35}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            О бренде «Надежные Смартфоны»
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Официальная сеть магазинов с присутствием в трех странах. Мы предлагаем только оригинальную продукцию с полной гарантией качества.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="border border-purple-100 shadow-xl card-glow bg-gradient-to-br from-white to-purple-50/20 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${location.color}`} />
              <CardContent className="p-8">
                <div className="text-6xl mb-4 text-center">{location.flag}</div>
                <h3 className="font-heading font-bold text-2xl mb-2 text-center text-gray-900">
                  {location.country}
                </h3>
                <p className="text-center text-primary font-semibold mb-4">
                  {location.title}
                </p>
                <p className="text-gray-600 text-center mb-6">
                  {location.description}
                </p>
                <div className="space-y-3">
                  {location.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Icon name="CheckCircle2" className="text-green-600 flex-shrink-0 mt-0.5" size={18} />
                      <p className="text-sm text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-3xl mb-6 text-gray-900">
                Почему мы — официальный бренд?
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Сертификация</h4>
                    <p className="text-gray-600">Все смартфоны имеют официальные сертификаты качества</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="ShieldCheck" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Гарантии</h4>
                    <p className="text-gray-600">Предоставляем полную гарантию на всю продукцию</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Globe" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-1">Международное присутствие</h4>
                    <p className="text-gray-600">Магазины в России, Дубае и Гонконге</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 mb-4">
                  <Icon name="Users" className="text-white" size={36} />
                </div>
                <h3 className="font-heading font-bold text-4xl text-gray-900 mb-2">
                  1 000 000+
                </h3>
                <p className="text-xl text-gray-600">довольных клиентов</p>
              </div>
              <div className="space-y-3 pt-6 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Средний рейтинг</span>
                  <span className="font-bold text-lg">⭐ 4.9/5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Повторных покупок</span>
                  <span className="font-bold text-lg text-green-600">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Рекомендаций</span>
                  <span className="font-bold text-lg text-blue-600">92%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;