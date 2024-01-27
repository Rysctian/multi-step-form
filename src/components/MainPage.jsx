import React, { useState } from "react";
import InfoSection from "../pages/InfoSection";
import SelectPlan from "../pages/SelectPlan";
import Button from "./Button";
import StepCard from "./StepCard";
import Summary from "../pages/Summary";
import Success from "../pages/Success";
import AddOns from "../pages/AddOns";
import useMultiForm from "../hooks/useMultiForm";
import { planOptions } from "../hooks/PlanOptions";

const MainPage = () => {
  
  const formSteps = [
    <InfoSection />,
    <SelectPlan />,
    <AddOns />,
    <Summary />,
    <Success />,
  ];

  const { currentIndex, currentStep, goBackward, isFirstStep, isLastStep, goForward } = useMultiForm(formSteps);


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlanValue: "Arcade",
    planLength: false,
    isOnline: false,
    isLargerStorage: false,
    isCustomizable: false,
  });


    const updateForm = (updatedData) => {
      setFormData((prev) => {
        return { ...formData, ...updatedData };
      });
    };
  
  

  const handleSubmit = () => {
    goForward();
    console.log(formData);
  };

  return (
    <div className="relative flex items-center justify-center h-screen w-screen bg-neutral-magnolia">
      <div className="main-card flex main-container relative bg-neutral-white rounded-lg ">
        <StepCard steps={formSteps} currentIndex={currentIndex} />
        <div className="right-container flex flex-col h-fit place-self-center  ">
          {React.cloneElement(currentStep, 
            { goForward, goBackward, formData, setFormData, handleSubmit, updateForm })}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
