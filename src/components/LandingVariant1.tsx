import RegistrationForm from "./RegistrationForm";
import Icon from "@/components/ui/icon";

const LandingVariant1 = () => {
  const benefits = [
    {
      icon: "Shield",
      title: "Безопасная среда",
      description: "Никто не будет смеяться над ошибками",
    },
    {
      icon: "Users",
      title: "Поддержка группы",
      description: "Все студенты в одной ситуации",
    },
    {
      icon: "Target",
      title: "Постепенный прогресс",
      description: "От простых фраз к уверенным диалогам",
    },
    {
      icon: "Award",
      title: "Опытные преподаватели",
      description: "Знают, как помочь заговорить",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Icon name="MessageSquare" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">SpeakUp</span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <span>📞 +7 (999) 123-45-67</span>
            <span>⏰ Ежедневно 9:00-21:00</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Zap" size={16} className="mr-2" />
              Решение страха говорить по-английски
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Преодолей страх и
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}
                заговори
              </span>
              по-английски
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Боишься говорить по-английски? Мы знаем это чувство. Наша методика
              поможет тебе преодолеть языковой барьер за 30 дней и начать
              уверенно общаться.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={benefit.icon as any}
                      size={20}
                      className="text-blue-600"
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

            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Первый результат за неделю</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckCircle" size={16} className="text-green-500" />
                <span>Гарантия возврата</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RegistrationForm
              variant="primary"
              buttonText="Преодолеть страх!"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-8">
            Более 2,500 студентов уже преодолели языковой барьер
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-8 h-8 bg-gray-300 rounded"></div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingVariant1;
