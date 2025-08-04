import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const skills = [
    "Веб-разработка",
    "UI/UX Дизайн", 
    "React & TypeScript",
    "Консультации",
  ];

  const contacts = [
    { icon: "Mail", label: "email@example.com", href: "mailto:email@example.com" },
    { icon: "Phone", label: "+7 (999) 123-45-67", href: "tel:+79991234567" },
    { icon: "Github", label: "github.com/username", href: "https://github.com" },
    { icon: "Linkedin", label: "linkedin.com/in/username", href: "https://linkedin.com" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            {/* Avatar */}
            <div className="w-32 h-32 mx-auto mb-8 overflow-hidden rounded-full border-4 border-gray-100">
              <img 
                src="/img/588608a1-3908-4489-b706-641abdd9af0a.jpg" 
                alt="Александр Иванов"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            
            <h1 className="text-5xl font-light text-black mb-4">
              Александр <span className="font-semibold">Иванов</span>
            </h1>
            <p className="text-xl text-gray-600 mb-2">Фронтенд-разработчик</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Создаю современные веб-приложения с фокусом на пользовательский опыт и производительность
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-light text-black mb-8 text-center">Специализация</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <Card key={index} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <CardContent className="p-6 text-center">
                    <p className="text-sm font-medium text-gray-800">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="mb-16">
            <Card className="border-0 bg-gray-50">
              <CardContent className="p-8 lg:p-12">
                <h2 className="text-2xl font-light text-black mb-6">О себе</h2>
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      Более 5 лет разрабатываю веб-приложения для стартапов и крупных компаний. 
                      Специализируюсь на React, TypeScript и современных подходах к фронтенд-разработке.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Помогаю командам создавать качественные продукты, которые решают реальные 
                      задачи пользователей. Всегда открыт к новым вызовам и интересным проектам.
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Icon name="Code" size={20} className="text-black" />
                      <span className="text-gray-800">Чистый и поддерживаемый код</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Icon name="Zap" size={20} className="text-black" />
                      <span className="text-gray-800">Быстрая разработка MVP</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Icon name="Users" size={20} className="text-black" />
                      <span className="text-gray-800">Работа в команде</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Icon name="Lightbulb" size={20} className="text-black" />
                      <span className="text-gray-800">Креативные решения</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h2 className="text-2xl font-light text-black mb-8">Контакты</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="group p-6 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <Icon name={contact.icon as any} size={24} className="text-black mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-gray-600 group-hover:text-gray-800">{contact.label}</p>
                </a>
              ))}
            </div>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-gray-800 px-8 py-3 text-base"
              >
                Обсудить проект
              </Button>
              <p className="text-sm text-gray-500">
                Отвечу в течение дня
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="container mx-auto px-6">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Александр Иванов. Сделано с ❤️</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;