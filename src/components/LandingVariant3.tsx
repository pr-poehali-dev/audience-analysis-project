import RegistrationForm from "./RegistrationForm";
import Icon from "@/components/ui/icon";

const LandingVariant3 = () => {
  const benefits = [
    {
      icon: "TrendingUp",
      title: "Постепенный рост",
      description: "От слова к предложению, от фразы к диалогу",
    },
    {
      icon: "Award",
      title: "Система достижений",
      description: "Отмечай прогресс и получай награды",
    },
    {
      icon: "Users",
      title: "Поддержка команды",
      description: "Ментор и группа поддержки рядом",
    },
    {
      icon: "CheckCircle",
      title: "Гарантия результата",
      description: "Уверенность в разговоре за 2 месяца",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">
              ConfidentSpeak
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
            <span>🏆 15,000+ успешных студентов</span>
            <span>📈 Средний прогресс +300%</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Target" size={16} className="mr-2" />
              Построй уверенность в английском
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Стань
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {" "}
                уверенным
              </span>
              в английском за 60 дней
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              От неуверенных попыток к свободному общению. Наша программа
              развития уверенности поможет тебе поверить в себя и заговорить
              по-английски естественно.
            </p>

            <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl mb-8">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Icon
                  name="Trophy"
                  size={20}
                  className="text-orange-600 mr-2"
                />
                Твой путь к уверенности:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="text-gray-700">
                    Неделя 1-2: Преодолеваем барьеры
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="text-gray-700">
                    Неделя 3-4: Строим базовую уверенность
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="text-gray-700">
                    Неделя 5-8: Свободное общение
                  </span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={benefit.icon as any}
                      size={20}
                      className="text-orange-600"
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
                <Icon name="Flame" size={16} className="text-red-500" />
                <span>97% завершают программу</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="ThumbsUp" size={16} className="text-green-500" />
                <span>Персональный ментор</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <RegistrationForm variant="success" buttonText="Стать уверенным!" />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Истории успеха
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна, 28",
                story:
                  "За 2 месяца прошла собеседование в международной компании",
                progress: "+400%",
              },
              {
                name: "Михаил, 34",
                story: "Начал свободно общаться с зарубежными партнерами",
                progress: "+350%",
              },
              {
                name: "Елена, 25",
                story: "Переехала в Канаду и легко адаптировалась",
                progress: "+500%",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-gray-900">{story.name}</h4>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {story.progress}
                  </span>
                </div>
                <p className="text-gray-600 text-sm">{story.story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingVariant3;
