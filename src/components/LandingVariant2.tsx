import RegistrationForm from "./RegistrationForm";
import Icon from "@/components/ui/icon";

const LandingVariant2 = () => {
  const benefits = [
    {
      icon: "Users",
      title: "Разговорная практика каждый день",
      description: "4 часа живого общения на английском",
    },
    {
      icon: "Clock",
      title: "Удобное время",
      description: "Вечерние занятия после работы 19:00-20:30",
    },
    {
      icon: "CheckCircle",
      title: "Без домашних заданий",
      description: "Все изучаем и отрабатываем прямо на уроке",
    },
    {
      icon: "Heart",
      title: "Поддерживающая атмосфера",
      description: "Никто не смеется над ошибками - все учатся",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Icon name="Users" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              TalkTogether
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <span>🌍 Международное сообщество</span>
            <span>👥 24/7 разговорные клубы</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Найди партнеров для разговорной практики
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Получи 4 дня
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                {" "}
                интенсивной практики
              </span>
              английского языка
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Нет времени на долгие курсы? Хочешь быстрый результат? Интенсив
              поможет тебе активировать пассивный словарь и начать говорить
              уверенно всего за 4 дня.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={benefit.icon as any}
                      size={20}
                      className="text-green-600"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl mb-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-400 rounded-full border-2 border-white"
                    ></div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Сейчас онлайн: 247 студентов
                  </p>
                  <p className="text-sm text-gray-600">
                    Присоединяйся к разговору!
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-yellow-500" />
                <span>4.9/5 рейтинг сообщества</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-green-500" />
                <span>Безопасная среда</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RegistrationForm
              variant="secondary"
              buttonText="Найти партнеров!"
            />
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">
                5,000+
              </div>
              <p className="text-gray-600">Активных студентов</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">Носителей языка</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24/7
              </div>
              <p className="text-gray-600">Разговорные клубы</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">95%</div>
              <p className="text-gray-600">Находят партнеров</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingVariant2;
