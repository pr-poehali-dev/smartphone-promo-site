import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';
import ParallaxBackground from '@/components/ParallaxBackground';

const Promotions = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-purple-50 to-white relative overflow-hidden">
      <ParallaxBackground 
        imageUrl="https://cdn.poehali.dev/projects/b8e3535d-5f4f-4499-9166-5f4bba62e341/files/362cbb50-22ee-411e-b573-0199e133e304.jpg"
        opacity={0.15}
        speed={0.4}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-200/30 via-purple-100/20 to-white/50" />
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ boxShadow: '0 0 100px 50px rgba(155, 135, 245, 0.3)' }} />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s', boxShadow: '0 0 120px 60px rgba(192, 132, 252, 0.3)' }} />
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gray-900">
            🎁 Акции и предложения
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Специальные подарки и розыгрыши для наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-4 border-accent shadow-2xl hover:shadow-3xl transition-shadow overflow-hidden">
            <div className="bg-gradient-to-r from-accent to-orange-600 p-6">
              <CardTitle className="text-white font-heading text-3xl flex items-center gap-3">
                <Icon name="Gift" size={32} />
                Главный подарок
              </CardTitle>
            </div>
            <CardContent className="p-8">
              <div className="space-y-4">
                <div className="text-center py-6 bg-accent/10 rounded-2xl">
                  <p className="text-5xl font-bold text-accent mb-2">2 000₽</p>
                  <p className="text-xl font-semibold text-gray-700">на связь в подарок</p>
                  <p className="text-gray-600 mt-2">Весь 2026 год говори бесплатно!</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-700">Действует для всех покупателей</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Check" className="text-green-600 mt-1" size={20} />
                  <p className="text-gray-700">Активация сразу после покупки</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-heading flex items-center gap-2">
                <Icon name="Package" size={28} />
                Подарки в комплекте
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl">📱</div>
                  <div>
                    <p className="font-semibold text-gray-900">Защитное стекло</p>
                    <p className="text-sm text-gray-600">Премиум качество</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl">🛡️</div>
                  <div>
                    <p className="font-semibold text-gray-900">Чехол для смартфона</p>
                    <p className="text-sm text-gray-600">Стильный дизайн</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300">
                  <div className="text-3xl">🎁</div>
                  <div>
                    <p className="font-semibold text-gray-900">Сувенир до 3000₽</p>
                    <p className="text-sm text-gray-600">Для заказов из Дубая и Гонконга</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-2 border-primary shadow-2xl bg-gradient-to-br from-primary/5 to-purple-100/50">
          <CardHeader>
            <div className="flex items-center justify-between flex-wrap gap-4">
              <CardTitle className="text-3xl font-heading flex items-center gap-3">
                <Icon name="Plane" size={32} className="text-primary" />
                Еженедельные розыгрыши путевок
              </CardTitle>
              <Badge className="bg-accent text-white px-4 py-2 text-base">
                Участвуй бесплатно!
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🇦🇪</div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-gray-900">Дубай</h4>
                    <p className="text-gray-600">5 путевок каждую неделю</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Путешествие в сердце роскоши и современных технологий
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🇭🇰</div>
                  <div>
                    <h4 className="font-heading font-bold text-xl text-gray-900">Гонконг</h4>
                    <p className="text-gray-600">5 путевок каждую неделю</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Открой для себя жемчужину Азии и восточную культуру
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-10 py-6">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Участвовать в розыгрыше
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                Подпишись на наш Telegram-канал и получи шанс выиграть путевку!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Promotions;