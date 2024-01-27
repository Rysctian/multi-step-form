import React from "react";
import Button from "../components/Button";
import { planOptions } from "../hooks/PlanOptions";

const Summary = ({
  goForward,
  goBackward,
  formData,
  setFormData,
  handleSubmit,
}) => {
  // DESTRUCTURE NG OBJECTS SA LOOB NG FORM DATA
  const { isOnline, isLargerStorage, isCustomizable } = formData;

  const totalPlanCost = formData.planLength
    ? planOptions[formData.selectedPlanValue].yearly
    : planOptions[formData.selectedPlanValue].monthly;

  console.log(totalPlanCost);

  const onlineServiceCost = formData.planLength
    ? planOptions.onlineServices.yearly
    : planOptions.onlineServices.monthly;

  const largerStorageCost = formData.planLength
    ? planOptions.largerStorage.yearly
    : planOptions.largerStorage.monthly;

  const customizableProfileCost = formData.planLength
    ? planOptions.customizableProfile.yearly
    : planOptions.customizableProfile.monthly;

  const addOnsCost = () => {
    let totalCost = 0;


    if (isOnline) {
      totalCost += onlineServiceCost;
    }

    if (isLargerStorage) {
      totalCost += largerStorageCost;
    }

    if (isCustomizable) {
      totalCost += customizableProfileCost;
    }
    return totalCost;
  };

  const totalAddonsCost = addOnsCost();

  const totalValue = (totalPlanCost, totalAddonsCost) => {
    return totalPlanCost + totalAddonsCost;
  };
  const totalValueResult = totalValue(totalPlanCost, totalAddonsCost);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col  ">
      <div>
        <h1 className="flex flex-col ">
          <h1 className="font-ubuntu text-primary-marineBlue text-4xl font-extrabold"> Finishing up</h1> 
          <span className="text-neutral-coolGray text-lg mb-6 hidden sm:block">Double-check everything looks OK before confirming.</span>
        </h1>
      </div>

      <div className=" bg-neutral-magnolia p-5 rounded-md ">
            <div className="plan flex justify-between items-center mb-4 border-b border-gray-400 pb-5">
            
                <h1 className="capitalize text-primary-marineBlue font-[700] text-lg">{formData.selectedPlanValue}   </h1> 
            
              <div className="text-primary-marineBlue text-lg font-[700]">+${totalPlanCost}/{formData.planLength ? "yr" : "mo"}</div>
            </div>

            <div className="ADDONS">
              {isOnline && (
                <div className="plan flex justify-between items-center mb-4">
                  <h1 className="text-neutral-coolGray font-[500]">Online service </h1>
                  <span className=" text-primary-marineBlue text-lg font-[700]">+${onlineServiceCost}/{formData.planLength ? "yr" : "mo"}</span>
                </div>
              )}
              {isLargerStorage && (
                <div className="plan flex justify-between items-center mb-4">
                  <h1 className="text-neutral-coolGray font-[500]">Larger storage </h1> 
                  <span className="text-primary-marineBlue text-lg font-[700]">+${largerStorageCost}/{formData.planLength ? "yr" : "mo"}</span>
                </div>
              )}
              {isCustomizable && (
                <div className="plan flex justify-between items-center mb-4">
                  <h1 className=" text-neutral-coolGray font-[500]">Customizable Profile</h1>  
                  <span className="text-primary-marineBlue text-lg font-[700]">+${customizableProfileCost}/{formData.planLength ? "yr" : "mo"}</span>
                </div>
              )}
            </div>
 
      </div>

      <div className=" flex justify-between p-5 ">
            <h1 className="font-[500] text-neutral-coolGray"> Total {formData.planLength ? "(per year)" : "(per month)"} </h1>
            <span className="font-[700] text-xl text-primary-purplishBlue">+${totalValueResult}</span>
      </div>

      <div className="buttons">
      <button className="h-10 w-28 rounded-lg text-neutral-coolGray font-ubuntu hover:text-primary-marineBlue font-medium" type="button" onClick={goBackward}>
          Go Back
        </button>
        <Button type="button" onClick={goForward}>
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default Summary;
