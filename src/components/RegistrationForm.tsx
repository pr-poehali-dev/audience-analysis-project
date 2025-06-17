import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface RegistrationFormProps {
  variant?: "primary" | "secondary" | "success" | "fun";
  buttonText?: string;
}

const RegistrationForm = ({
  variant = "primary",
  buttonText = "Начать говорить!",
}: RegistrationFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700",
    secondary:
      "bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600",
    success:
      "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600",
    fun: "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600",
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 max-w-md w-full">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="MessageCircle" size={32} className="text-blue-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Записаться на интенсив
        </h3>
        <p className="text-gray-600 text-sm">
          Бесплатно • 4 дня • Начни говорить уже сегодня
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-sm font-medium text-gray-700">
            Имя
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="mt-1 h-12 border-gray-200 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="mt-1 h-12 border-gray-200 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
            Телефон
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+7 (999) 123-45-67"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="mt-1 h-12 border-gray-200 focus:border-blue-500"
            required
          />
        </div>

        <Button
          type="submit"
          className={`w-full h-14 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 ${variantStyles[variant]}`}
        >
          {buttonText}
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>

        <p className="text-xs text-gray-500 text-center mt-4">
          Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
