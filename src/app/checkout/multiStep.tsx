import { ReactElement, useState } from "react"

const multiStep = (steps: ReactElement[]) => {
    const [currentStep, setCurrentStep] = useState(0);

    function nextStep() {
        setCurrentStep((i:number)=>{
            if(i < steps.length - 1) {
                return i + 1;
            }
            return i;
        });
    }

    function prevStep() {
        setCurrentStep((i:number)=>{
            if(i > 0) {
                return i - 1;
            }
            return i;
        });
    }
  return{
    currentStep,
    nextStep,
    prevStep,
    step:steps[currentStep],
    totalSteps:steps.length,
    isFirstStep:currentStep === 0,
    isLastStep:currentStep === steps.length - 1
  }
}

export default multiStep