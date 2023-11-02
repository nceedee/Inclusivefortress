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
          Avila Naturalle recently birthed the Avilan Naturalle Foods and
          Supplements, a sister company that is dedicated to providing the
          highest quality 100% natural, healthy and nutritious food products to
          Nigerians and Africans at large. The company is committed to enriching
          lives through natural, healthy, safe and affordable foods products
          that are necessary for a better quality of life.
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Research & Development"
        title="Research & Development"
        className="text-primary"
      >
        <p>
          Our Research and Development team are well-equipped and constantly
          focused on the future. This allows us to stay ahead of trends, latest
          development and competition. We have premium quality products that
          care for the hair, face, body, mouth, feet and intimate areas. There
          is no exception to who can use our products. We have made it possible
          to meet the needs of everyone irrespective of gender, age, race or
          religion.
        </p>
        <h3 className="mt-4 font-bold">
          This is why we remain the future of body care in Africa!
        </h3>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Our Reach"
        title="Our Reach"
        className="text-primary"
      >
        <p>
          Currently, Avila has over two thousand distributors of different cadre
          across Nigeria and other countries like Ghana, Egypt, Ivory Coast,
          Republic of Benin, Equatorial guinea and Zambia as well as Bahrain,
          the United Kingdom and the United States of America. The company hopes
          to expand its distribution channels to more countries like the United
          Arab Emirates, Singapore, Sweden and across the continents of the
          world.
        </p>
      </AccordionItem>
    </Accordion>
  );
};
