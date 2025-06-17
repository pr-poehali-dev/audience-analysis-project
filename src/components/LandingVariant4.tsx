import RegistrationForm from "./RegistrationForm";
import Icon from "@/components/ui/icon";

const LandingVariant4 = () => {
  const benefits = [
    {
      icon: "Clock",
      title: "Всего 4 дня",
      description: "Не месяцы учебы - быстрый интенсивный результат",
    },
    {
      icon: "DollarSign",
      title: "Бесплатно",
      description: "Никаких скрытых платежей - полностью бесплатный интенсив",
    },
    {
      icon: "Users",
      title: "Малые группы",
      description: "До 12 человек - каждому уделяем внимание",
    },
    {
      icon: "Award",
      title: "Опытные преподаватели",
      description: "Эксперты по преодолению языкового барьера",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">FunEnglish</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <span>🎮 Игровое обучение</span>
            <span>🚀 Результат за 7 дней</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-gradient-to-r from-pink-100 to-yellow-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="PartyPopper" size={16} className="mr-2" />
              Забудь о скучных учебниках навсегда
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Бесплатный интенсив:
              <span className="bg-gradient-to-r from-pink-600 to-yellow-600 bg-clip-text text-transparent">
                {" "}
                "Как заговорить"
              </span>
              на английском за 4 дня
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Устал тратить деньги на курсы без результата? Попробуй наш
              бесплатный интенсив! 4 дня интенсивной практики, после которых ты
              наконец заговоришь или вернем время.
            </p>

            <div className="bg-gradient-to-r from-pink-100 to-yellow-100 p-6 rounded-2xl mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Icon
                  name="Gamepad2"
                  size={20}
                  className="text-pink-600 mr-2"
                />
                Что тебя ждет:
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎭</span>
                  <span className="text-gray-700">Ролевые игры</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-gray-700">Квесты и челленджи</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🥽</span>
                  <span className="text-gray-700">VR погружение</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🤖</span>
                  <span className="text-gray-700">AI собеседники</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={benefit.icon as any}
                      size={20}
                      className="text-pink-600"
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

            <div className="flex items-center space-x-8 text-sm text-gray-600 mb-8">
              <div className="flex items-center space-x-2">
                <Icon name="Timer" size={16} className="text-yellow-500" />
                <span>Всего 15 минут в день</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Smile" size={16} className="text-pink-500" />
                <span>99% говорят "весело!"</span>
              </div>
            </div>

            <div className="bg-yellow-100 border border-yellow-200 p-4 rounded-xl">
              <p className="text-yellow-800 font-medium flex items-center">
                <Icon name="Gift" size={16} className="mr-2" />
                Бонус: Игровой стартовый набор в подарок! 🎁
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <RegistrationForm variant="fun" buttonText="Начать играть!" />
          </div>
        </div>
      </section>

      {/* Fun Stats */}
      <section className="bg-gradient-to-r from-pink-100 to-yellow-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Почему это работает?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-4">🧠</div>
              <div className="text-2xl font-bold text-pink-600 mb-2">85%</div>
              <p className="text-gray-600">Лучше запоминание через игру</p>
            </div>
            <div>
              <div className="text-4xl mb-4">⚡</div>
              <div className="text-2xl font-bold text-yellow-600 mb-2">3x</div>
              <p className="text-gray-600">Быстрее традиционных методов</p>
            </div>
            <div>
              <div className="text-4xl mb-4">😊</div>
              <div className="text-2xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600">Студентов получают удовольствие</p>
            </div>
            <div>
              <div className="text-4xl mb-4">🎯</div>
              <div className="text-2xl font-bold text-purple-600 mb-2">90%</div>
              <p className="text-gray-600">Завершают полный курс</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingVariant4;
