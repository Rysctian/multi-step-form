import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputForms from "../components/InputForms";
import useMultiForm from "../hooks/useMultiForm";
import Button from "../components/Button";

const InfoSection = ({ formData, setFormData, goForward }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^\d{11}$/, "Phone number must be 11 digits")
      .required("Phone number is required"),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: validationSchema,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      setFormData(values); // Update the form data in the parent component
      goForward();
    },
  });
  return (
    <form
      className="flex flex-col font-ubuntu h-[30rem]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col  font-ubuntu text-primary-marineBlue text-4xl font-extrabold ">
        Personal Info
        <span className="font-ubuntu text-lg text-neutral-lightGray font-light">
          Please provide your name, email address, and phone number.
        </span>
      </div>

      <div className="flex flex-col mt-7">
        <div className="inputs flex flex-col gap-3">
          <InputForms
            name={formik.values.name}
            email={formik.values.email}
            phoneNumber={formik.values.phoneNumber}
            nameError={formik.errors.name}
            emailError={formik.errors.email}
            phoneError={formik.errors.phoneNumber}
            handleChange={formik.handleChange}
          />
        </div>

      </div>
      <div className=" place-self-end mt-20">
          <Button type="submit">Next Page</Button>
        </div>
    </form>
  );
};

export default InfoSection;

