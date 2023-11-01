import React from "react";
import { ContactMap } from "./ContactMap/ContactMap";
import { ContactForm } from "./ContactForm/ContactForm";

export const FormAndMap = () => {
  return (
    <div className="flex justify-around pb-8 mt-8 sm:space-y-4 sm:flex-col md:flex-row items-center">
      <ContactMap />
      <ContactForm />
    </div>
  );
};
