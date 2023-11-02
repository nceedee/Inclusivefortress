import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { tabs } from "./CorpData";

export const CorporateCulture = () => {
  return (
    <div className="flex w-full flex-col mb-11 items-center  p-8 bg-primary">
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
  );
};
