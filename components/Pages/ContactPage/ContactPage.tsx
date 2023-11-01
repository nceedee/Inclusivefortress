import React from "react";
import { ContactBackgroundImage } from "./ContactBackgroundImage/ContactBackgroundImage";
import { Address } from "./Address/Address";
import { FormAndMap } from "./FormAndMap/FormAndMap";

export const ContactPage = () => {
  return (
    <div>
      <ContactBackgroundImage />
      <Address />
      <FormAndMap />
    </div>
  );
};
