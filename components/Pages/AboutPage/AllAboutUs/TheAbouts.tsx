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
          Avila Naturalle is a leading manufacturer of 100% NATURAL body care
          products in Africa. Since inception in 2017, the company has redefined
          the Nigerian body care space by promoting the health and safety of
          Nigerians through the encouragement of the adoption of all-natural
          body care solutions comprising of skincare, hair care, mouth care,
          foot care etc. The overall vision of the company is driven by the need
          to help Nigerians break free from toxic and harmful chemical-based
          body care products by creating a culture and an enabling environment
          for natural body care solutions to thrive. At Avila, we believe that a
          body care company is only as good as the quality of its products. This
          is why we strive to ensure sustainable growth through continuous
          improvement in all our products in order to enrich the lives of our
          customers. Creating skin and hair care products that are 100% natural
          would not feel right if we did not put all our passion into it. This
          is our secret to creating products that are not only pleasant but also
          powerful and effective in enhancing skin glow naturally or providing
          solutions to skin-related challenges. We believe in providing the best
          skin care products possible. Our products are 100% natural, free of
          parabens, animal by-products, propylene glycol, sodium lauryl
          sulfates, mineral oils, colorant, petroleum and chemicals.
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
