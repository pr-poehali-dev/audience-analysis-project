import { useState } from "react";
import LandingVariant1 from "@/components/LandingVariant1";
import LandingVariant2 from "@/components/LandingVariant2";
import LandingVariant3 from "@/components/LandingVariant3";
import LandingVariant4 from "@/components/LandingVariant4";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [currentVariant, setCurrentVariant] = useState(1);

  const variants = [
    { id: 1, name: "Страх говорить", component: <LandingVariant1 /> },
    { id: 2, name: "Нет партнеров", component: <LandingVariant2 /> },
    { id: 3, name: "Нет уверенности", component: <LandingVariant3 /> },
    { id: 4, name: "Скучные методы", component: <LandingVariant4 /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Variant Selector */}
      <div className="fixed top-4 left-4 z-50 bg-white rounded-lg shadow-lg p-2 border border-gray-200">
        <div className="flex flex-col space-y-2">
          <span className="text-xs font-medium text-gray-500 px-2">
            Варианты лендингов:
          </span>
          {variants.map((variant) => (
            <Button
              key={variant.id}
              onClick={() => setCurrentVariant(variant.id)}
              variant={currentVariant === variant.id ? "default" : "ghost"}
              size="sm"
              className="text-xs justify-start"
            >
              {variant.id}. {variant.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Current Variant */}
      {variants.find((v) => v.id === currentVariant)?.component}
    </div>
  );
};

export default Index;
