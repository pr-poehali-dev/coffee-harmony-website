import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    alert('Спасибо! Ваша бронь принята. Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', date: '', time: '', guests: '', message: '' });
  };

  const menuItems = [
    {
      name: 'Карамельный капучино',
      description: 'Авторский напиток с домашним карамельным сиропом',
      price: '250₽',
      category: 'Авторские напитки'
    },
    {
      name: 'Лавандовый латте',
      description: 'Нежный латте с экстрактом лаванды и ванили',
      price: '280₽',
      category: 'Авторские напитки'
    },
    {
      name: 'Эспрессо "Гармония"',
      description: 'Классический эспрессо из зерен собственной обжарки',
      price: '150₽',
      category: 'Классика'
    },
    {
      name: 'Раф с халвой',
      description: 'Сливочный раф с тахинной пастой и медом',
      price: '290₽',
      category: 'Авторские напитки'
    },
    {
      name: 'Матча-латте',
      description: 'Японский зеленый чай с молоком',
      price: '270₽',
      category: 'Чайные напитки'
    },
    {
      name: 'Флэт уайт',
      description: 'Двойной эспрессо с бархатистой молочной пенкой',
      price: '220₽',
      category: 'Классика'
    }
  ];

  const galleryImages = [
    'https://cdn.poehali.dev/projects/2f6d3562-7e88-4ba7-b642-5f0285fee548/files/db114dc1-248d-4c0f-a560-cc695db8101f.jpg',
    'https://cdn.poehali.dev/projects/2f6d3562-7e88-4ba7-b642-5f0285fee548/files/70fa3c63-8efa-4ccc-a4fc-a3d58581dd6f.jpg',
    'https://cdn.poehali.dev/projects/2f6d3562-7e88-4ba7-b642-5f0285fee548/files/c6f11820-d581-4681-9883-31b9e7166b97.jpg',
    'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600',
    'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600',
    'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600'
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-primary">Гармония</h1>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="hover:text-secondary transition-colors">Главная</a>
              <a href="#menu" className="hover:text-secondary transition-colors">Меню</a>
              <a href="#about" className="hover:text-secondary transition-colors">О нас</a>
              <a href="#gallery" className="hover:text-secondary transition-colors">Галерея</a>
              <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
            </div>
            <Button asChild className="hidden md:inline-flex">
              <a href="#booking">Забронировать</a>
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary leading-tight">
                Уютная кофейня с домашней атмосферой
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Авторские напитки от нашего баристы и атмосфера, в которую хочется возвращаться
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <a href="#menu">Посмотреть меню</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#booking">Забронировать столик</a>
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img
                src="https://v3b.fal.media/files/b/rabbit/7SYXgHg8a99eiHxR1Xzh2_output.png"
                alt="Coffee"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Наше меню</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Уникальные рецепты и авторские напитки от нашего баристы
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-primary">{item.name}</h3>
                    <span className="text-secondary font-bold text-lg">{item.price}</span>
                  </div>
                  <p className="text-sm text-accent font-medium mb-3">{item.category}</p>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800"
                alt="Barista"
                className="rounded-lg shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">О нас</h2>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Кофейня "Гармония" — это место, где каждый гость становится частью нашей семьи. 
                Мы создали пространство, в котором можно отдохнуть от городской суеты и насладиться 
                по-настоящему качественным кофе.
              </p>
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                Наш главный бариста разрабатывает уникальные рецепты, сочетая классические техники 
                приготовления с современными трендами. Каждый напиток — это маленькое произведение искусства, 
                созданное с любовью и вниманием к деталям.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">лет работы</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">20+</div>
                  <div className="text-sm text-muted-foreground">авторских рецептов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground">довольных гостей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Галерея</h2>
            <p className="text-lg text-muted-foreground">Атмосфера нашей кофейни</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Бронирование</h2>
              <p className="text-lg text-muted-foreground">Забронируйте столик и насладитесь уютной атмосферой</p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Иван Иванов"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Дата</label>
                      <Input
                        type="date"
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Время</label>
                      <Input
                        type="time"
                        required
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Количество гостей</label>
                    <Input
                      type="number"
                      required
                      min="1"
                      max="20"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      placeholder="2"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Пожелания (необязательно)</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Особые пожелания или комментарии..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Забронировать столик
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-primary">Контакты</h2>
            <p className="text-lg text-muted-foreground">Будем рады видеть вас в нашей кофейне</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Icon name="MapPin" size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Адрес</h3>
                <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 1</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Phone" size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Icon name="Clock" size={32} className="text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Режим работы</h3>
                <p className="text-muted-foreground">Пн-Вс: 8:00 - 22:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Гармония</h3>
              <p className="text-sm opacity-90">Кофейня с душой</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Facebook" size={24} />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <Icon name="Mail" size={24} />
              </a>
            </div>
          </div>
          <div className="text-center mt-8 text-sm opacity-75">
            © 2024 Кофейня "Гармония". Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;