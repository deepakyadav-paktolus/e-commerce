"use client";

import { useState, ReactElement } from "react";

export default function useMultiStep(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () =>
    setCurrentStep((i) => Math.min(i + 1, steps.length - 1));

  const prevStep = () =>
    setCurrentStep((i) => Math.max(i - 1, 0));

  return {
    step: steps[currentStep],
    currentStep,
    nextStep,
    prevStep,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
  };
}