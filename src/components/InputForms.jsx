// InputForms.jsx
import React from "react";

const InputForms = ({
  name,
  email,
  phoneNumber,
  nameError,
  emailError,
  phoneError,
  handleChange,
}) => {
  return (
    <div className="flex flex-col gap-5">

      
      <div className="flex flex-col gap-4">
        <div className="input-label">
          <label htmlFor="name">Name</label>
          <p className={`font-ubuntu ${nameError ? " text-red-500" : ""}`}>
            {nameError ? nameError : ""}
          </p>
        </div>

        <input
          id="name"
          name="name"
          value={name}
          type="text"
          className={` tracking-wide font-semibold font-ubuntu
                      text-primary-marineBlue p-2 rounded-md border 
                      outline-none border-neutral-lightGray  
                      focus:outline-none focus:border-primary-purplishBlue 
                      focus:ring-primary-purplishBlue  ${
                       nameError ? " ring-1 ring-red-600 border-red-500" : " "
          }`}
          placeholder="e.g Stephen King"
          onChange={handleChange} 
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="input-label">
          <label htmlFor="email">Email</label>
          <p className={`font-ubuntu ${emailError ? " text-red-500" : ""}`}>
            {emailError ? emailError : ""}
          </p>
        </div>

        <input
          id="email"
          name="email"
          value={email}
          type="text"
          placeholder="e.g stephenking@gmail.com"
          className={`tracking-wide font-semibold font-ubuntu
                      text-primary-marineBlue p-2 rounded-md border 
                      outline-none border-neutral-lightGray  
                      focus:outline-none focus:border-primary-purplishBlue 
                      focus:ring-primary-purplishBlue ${
                        emailError ? "border-red-500" : ""
                      }`}
          onChange={handleChange} 
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="input-label">
          <label htmlFor="phoneNumber">Phone Number</label>
          <p className={`font-ubuntu ${phoneError ? " text-red-500" : ""}`}>
            {phoneError ? phoneError : ""}
          </p>
        </div>

        <input
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          type="text"
          className={` text-md tracking-wide font-semibold font-ubuntu
                    text-primary-marineBlue p-2 rounded-md border 
                    outline-none border-neutral-lightGray  
                    focus:outline-none focus:border-primary-purplishBlue 
                    focus:ring-primary-purplishBlue  ${
            phoneError ? "border-red-500" : ""
          }`}
          placeholder="e.g 09687252805"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default InputForms;

