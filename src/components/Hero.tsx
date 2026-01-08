import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import ParallaxBackground from '@/components/ParallaxBackground';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <ParallaxBackground 
        imageUrl="https://cdn.poehali.dev/projects/b8e3535d-5f4f-4499-9166-5f4bba62e341/files/362cbb50-22ee-411e-b573-0199e133e304.jpg"
        opacity={0.3}
        speed={0.5}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-purple-400/30 to-purple-200/20" />
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/40 rounded-full blur-3xl animate-pulse" style={{ boxShadow: '0 0 100px 50px rgba(155, 135, 245, 0.4)' }} />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/40 rounded-full blur-3xl animate-pulse" style={{ boxShadow: '0 0 120px 60px rgba(168, 85, 247, 0.4)', animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ boxShadow: '0 0 150px 80px rgba(192, 132, 252, 0.3)', animationDelay: '0.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center animate-fade-in relative">
          <div className="absolute -left-32 top-20 hidden xl:block animate-bounce">
            <img 
              src="https://cdn.poehali.dev/files/photo_2025-08-14_19-38-37.jpg" 
              alt="Маскот NTS" 
              className="w-64 h-auto drop-shadow-2xl"
            />
          </div>
          <div className="inline-block mb-6 px-6 py-2 bg-accent/10 border-2 border-accent rounded-full" style={{ boxShadow: '0 0 30px rgba(249, 115, 22, 0.4)' }}>
            <span className="text-accent font-bold text-lg drop-shadow-lg">🎁 Праздничное предложение!</span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent glow-text">
              НАДЕЖНЫЕ СМАРТФОНЫ
            </span>
          </h1>

          <div className="mb-8 p-8 bg-gradient-to-r from-accent via-orange-500 to-accent rounded-3xl shadow-2xl transform hover:scale-105 transition-transform" style={{ boxShadow: '0 20px 60px rgba(249, 115, 22, 0.5), 0 0 60px rgba(249, 115, 22, 0.3)' }}>
            <p className="text-white font-heading font-bold text-3xl md:text-4xl drop-shadow-lg">
              🔥 Дарим 2 000₽ на связь
            </p>
            <p className="text-white text-xl mt-2 font-semibold">
              Весь 2026 год говори бесплатно!
            </p>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Официальные магазины в России, Дубае и Гонконге. Оригинальные смартфоны с гарантией качества.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 glow-button">
              <Icon name="Gift" size={20} className="mr-2" />
              Выбрать смартфон
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 glow-button">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 card-glow border border-purple-100">
              <div className="text-3xl mb-2">✅</div>
              <p className="font-semibold text-gray-800">100% Оригинал</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 card-glow border border-purple-100">
              <div className="text-3xl mb-2">🚚</div>
              <p className="font-semibold text-gray-800">Отправка день в день</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 card-glow border border-purple-100">
              <div className="text-3xl mb-2">🎁</div>
              <p className="font-semibold text-gray-800">Чехол + Стекло</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 card-glow border border-purple-100">
              <div className="text-3xl mb-2">🛡️</div>
              <p className="font-semibold text-gray-800">Гарантия качества</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;