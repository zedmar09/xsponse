"use client";
import React from "react";
import { Card, CardContent } from "@/src/components/xsponse/ui/card";
import { Icon } from "@iconify/react";
import { Button } from "@/src/components/xsponse/ui/button";
import { Badge } from "@/src/components/xsponse/ui/badge";

const Billing = () => {
 

  return (
    <>
      <div className="relative w-full mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="h-[150px] flex items-center justify-between">
            <div className="flex items-center justify-center w-1/3 pl-10">
              <Icon
                icon="lets-icons:home-duotone"
                fontSize={100}
                className="text-gray-300"
              />
            </div>
            <CardContent className="flex flex-col items-end justify-center w-2/3 mt-5">
              <Button>
                Add Billing Address
              </Button>
              <p className="text-default-500 mt-2">
                Add billing address, if it doesnt exist.
              </p>
            </CardContent>
          </Card>

          <Card className="h-[150px] flex items-center justify-between">
            <CardContent className="flex flex-col justify-center items-start w-2/3 pl-10 mt-5">
              <p className="text-xl">Address Line 1 <Badge color="success" className='ml-1'>Activated</Badge></p>
              <p className="text-default-400">New York, New York, 10023</p>
              <Button variant="soft" size="xs" className="mt-3">
                Update Billing Address
              </Button>
            </CardContent>
            <div className="flex items-center justify-center w-1/3 pr-5">
              <Icon
                icon="lets-icons:home-duotone"
                fontSize={100}
                className="text-gray-300"
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Billing;
