import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { tabs } from "./CorpData";
import Image from "next/image";

export const CorporateCulture = () => {
  return (
    <div className="flex w-full mb-11 items-center  p-8 bg-primary">
      <div className="flex md:flex-row sm:flex-col items-center justify-evenly">
        <div className="md:w-[30%]">
          <Image src="/image/corprate.jpeg" alt="" width={400} height={300} />
        </div>
        <div className="md:w-[40%]" >
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
    </div>
  );
};
