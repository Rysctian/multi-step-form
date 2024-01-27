import React from "react";
import Button from "../components/Button";
import { useEffect } from "react";
import { planOptions } from "../hooks/PlanOptions";

const addOnsData = [
  {
    name: "isOnline",
    label: "Online Service",
    description: "Access to Multiplayer Games",
    option: planOptions.onlineServices,
  },
  {
    name: "isLargerStorage",
    label: "Larger Storage",
    description: "Extra 1 TB of cloud save",
    option: planOptions.largerStorage,
  },
  {
    name: "isCustomizable",
    label: "Customizable Options",
    description: "Custom theme of your profile",
    option: planOptions.customizableProfile,
  },
];

const AddOns = ({ goForward, goBackward, formData, setFormData, handleSubmit }) => {
  const handleAddOnsChange = (event) => {
    const addOnName = event.target.name;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [addOnName]: !prevFormData[addOnName],
    }));
  };

  return (
    <form className="h-[30rem] flex flex-col " onSubmit={handleSubmit}>
      <div className="flex flex-col font-ubuntu text-primary-marineBlue text-4xl font-extrabold ">
        Pick add-ons
        <span className="font-ubuntu text-lg text-neutral-lightGray font-light">
          Add-ons help enhance your gaming experience.
        </span>
      </div>

      <div className="flex flex-col gap-5 mt-10 place-self-center w-[32rem]">
        {addOnsData.map((addOn) => (
          <div
            key={addOn.name}
            className="border-cool-gray py-3 px-4 cursor-pointer justify-between border-[1px] rounded-lg flex items-center"
          >
            <div className="flex items-center">
            <input
              type="checkbox"
              name={addOn.name}
              id={addOn.name}
              onChange={handleAddOnsChange}
              checked={formData[addOn.name]}
              className="mr-4 border-2 h-5 w-5 text-primary-purplishBlue
              bg-gray-100 border-gray-300 focus:ring-primary-purplishBlue
                dark:focus:ring-primary-purplishBlue dark:ring-offset-gray-800 
                focus:ring-2"
            />
            <label htmlFor={addOn.name} className={`flex justify-between gap-[${addOn.label.length}rem] items-center`}>
              <h1 className="flex flex-col">
                {addOn.label}
                <span className="text-neutral-coolGray text-sm">{addOn.description}</span>
              </h1>
          
            </label>

            </div>
            <div>
            <p className="font-medium text-primary-purplishBlue">
                ${" "}
                {formData.planLength
                  ? addOn.option.yearly
                  : addOn.option.monthly}
                / {formData.planLength ? "yr" : "mo"}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons mt-16 ">
        <button
          className="h-10 w-28 rounded-lg font-ubuntu hover:text-primary-marineBlue font-medium"
          type="button"
          onClick={goBackward}
        >
          Go Back
        </button>
        <Button type="button" onClick={goForward}>
          Next Step
        </Button>
      </div>
    </form>
  );
};

export default AddOns;
