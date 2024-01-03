import { useState } from "react";

export const useCarousel = (initialIndex: number, carouselLength: number) => {
  const [step, setStep] = useState(
    initialIndex < carouselLength ? initialIndex : 0
  );

  const prevStep = () => {
    if (step === 0) return setStep(carouselLength - 1);
    setStep(step - 1);
  };

  const nextStep = () => {
    if (step === carouselLength - 1) return setStep(0);
    setStep(step + 1);
  };

  return { step, prevStep, nextStep };
};
