import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const TheAbouts = () => {
  return (
    <Accordion variant="splitted">
      <AccordionItem
        key="1"
        aria-label="About Us
"
        title="About Us
"
        className="text-primary"
      >
        <p>
          Inclusive Fortress Limited, a proudly Nigerian-owned enterprise,
          officially took root on the 27th of August 2023. Our unwavering
          mission, founded on the principles of unparalleled comfort, unwavering
          integrity, and a global vision, is the cornerstone of our existence.
          We shine in two dynamic industries, healthcare and general supplies.
          Vision: Our vision is to ascend to a global pinnacle, where we reign
          as the standard-bearers of comfort and satisfaction. We pledge to set
          the gold standard for integrity in all our endeavors. It is our
          audacious aspiration to create a profound and lasting impact on
          societies across the globe, reshaping them into more comfortable,
          harmonious, and interconnected communities, with our influence
          stretching to the farthest reaches of the Earth. Mission: At Inclusive
          Fortress Limited, our mission is to deliver a tapestry of exceptional
          comfort and satisfaction through trusted, high-quality products and
          services. Every day, we dedicate ourselves to upholding the
          unbreakable bond of integrity while believing in the transformative
          power of serving humanity. With unwavering faith and unbridled
          dedication, our aim is to touch the lives of our communities and
          extend our influence to the farthest corners of the world. Inclusive
          Fortress Limited stands as a beacon of excellence, committed to
          igniting positive change through our endeavors. We proudly traverse
          the diverse landscapes of healthcare and general supplies, driven by a
          profound dedication to making a transformative difference in the lives
          of people around the world.
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Divisions"
        title="Divisions"
        className="text-primary"
      >
        <p>
          {` Inclusive white is a generic brand with emphasis on oral health under
          Inclusive Fortress Limited. Inclusive white is a division under
          Inclusive Fortress that deals primary on Oral health products and
          services. We're a people with the vision to extend the knowledge and
          the importance of oral health to every family on earth. So we're not
          just providing products, we provide Knowledge, awareness and services.
          As insignificant as oral health seem in our societies today, the
          comfort, the confidence and the peace of the whole body depends on it.`}
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Research & Development"
        title="Research & Development"
        className="text-primary"
      >
        <p>
          {`Day by day, science continues to make discoveries and new technologies continue to emerge. We have our research team who are always up to date with information. Also we have companies, experts and bodies in and outside Nigeria that we're working with in order to keep tabs on the current emphasis so that we can be fresh, timely and efficient in our delivery. Our dedication keeps us always on the lookout.`}
        </p>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Our Reach Dream"
        title="Our Reach Dream"
        className="text-primary"
      >
        <p>
          {`Our reach dream is the ends of the Earth. Until everyone and every family not just knows us but has our product in their homes, we're not successful. Every nation, every tribe, every tongue, every color, every gender, every age, every family and every person.`}
        </p>
      </AccordionItem>
    </Accordion>
  );
};
