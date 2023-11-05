import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { tabs } from "./CorpData";
import Image from "next/image";

export const CorporateCulture = () => {
  return (
    <div className="flex mb-11 w-full sm:space-y-4 md:space-y-0 md:flex-row bg-primary sm:flex-col items-center justify-evenly">
      <div className="md:w-[30%] sm:p-4 sm:w-[100%]">
        <Image
          src="/image/Culture.jpg"
          alt=""
          width={400}
          className="rounded object-fill w-full"
          height={300}
        />
      </div>
      <div className="md:w-[40%] sm:w-[100%]">
        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          className="sm:w-full  m-auto"
        >
          {(item) => (
            <Tab
              key={item.id}
              title={item.label}
              className="flex items-center justify-center m-auto text-center"
            >
              <Card className="sm:w-full ">
                <CardBody>{item.content}</CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </div>
  );
};
