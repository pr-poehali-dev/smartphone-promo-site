import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Contacts = () => {
  const stores = [
    {
      country: 'Россия',
      flag: '🇷🇺',
      cities: [
        { name: 'Москва', address: 'ул. Тверская, 15', phone: '+7 (495) 123-45-67' },
        { name: 'Санкт-Петербург', address: 'Невский проспект, 28', phone: '+7 (812) 987-65-43' },
        { name: 'Казань', address: 'ул. Баумана, 46', phone: '+7 (843) 555-12-34' }
      ]
    },
    {
      country: 'Дубай',
      flag: '🇦🇪',
      cities: [
        { name: 'Dubai Mall', address: 'Financial Centre Road', phone: '+971 4 123 4567' },
        { name: 'Marina Mall', address: 'Dubai Marina', phone: '+971 4 987 6543' }
      ]
    },
    {
      country: 'Гонконг',
      flag: '🇭🇰',
      cities: [
        { name: 'Central District', address: 'Queen\'s Road Central, 88', phone: '+852 2123 4567' },
        { name: 'Tsim Sha Tsui', address: 'Nathan Road, 100', phone: '+852 2987 6543' }
      ]
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            📍 Наши магазины
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Выбирайте удобную локацию для покупки или получения заказа
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {stores.map((store, index) => (
            <Card key={index} className="border-2 border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b-2">
                  <div className="text-5xl">{store.flag}</div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">
                    {store.country}
                  </h3>
                </div>
                <div className="space-y-4">
                  {store.cities.map((city, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start gap-3 mb-2">
                        <Icon name="MapPin" className="text-primary flex-shrink-0 mt-1" size={18} />
                        <div>
                          <p className="font-semibold text-gray-900">{city.name}</p>
                          <p className="text-sm text-gray-600">{city.address}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-2 pl-7">
                        <Icon name="Phone" className="text-green-600" size={16} />
                        <a href={`tel:${city.phone}`} className="text-sm text-gray-700 hover:text-primary transition-colors">
                          {city.phone}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-2 border-primary shadow-xl bg-gradient-to-br from-primary/5 to-purple-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                  <Icon name="MessageCircle" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">Telegram</h3>
                  <p className="text-gray-600">Быстрые ответы и поддержка 24/7</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Присоединяйся к нашему каналу для участия в розыгрышах путевок, получения эксклюзивных предложений и новостей о новинках!
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                <Icon name="Send" size={20} className="mr-2" />
                Перейти в Telegram
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 border-gray-200 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <Icon name="Mail" className="text-white" size={32} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">Email</h3>
                  <p className="text-gray-600">Для деловых предложений</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Icon name="Mail" className="text-blue-600" size={20} />
                  <a href="mailto:info@smartphones.ru" className="text-gray-700 hover:text-primary transition-colors">
                    info@smartphones.ru
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Icon name="Globe" className="text-green-600" size={20} />
                  <a href="https://smartphones.ru" className="text-gray-700 hover:text-primary transition-colors">
                    smartphones.ru
                  </a>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                  <Icon name="Clock" className="text-purple-600" size={20} />
                  <p className="text-gray-700">Пн-Вс: 10:00 - 22:00</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
