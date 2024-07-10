import { Card, CardContent } from "@/src/components/xsponse/ui/card";
import { Button } from "@/src/components/xsponse/ui/button";
import { Icon } from "@iconify/react";
import author2 from "@/public/images/avatar/avatar-12.jpg";

import Image from "next/image";

const UserCard = ({data}:{data:any}) => {
  const userInformation = [
    {
      info_name: "Address",
      details: `${data?.billing_city} ${data?.billing_state}`,
      icon: "solar:home-smile-bold-duotone",
    },
    {
      info_name: "Contact Number",
      details: data?.user?.phone_number,
      icon: "solar:phone-bold-duotone",
    },
    {
      info_name: "Dealer",
      details: data?.dealer?.company_name,
      icon: "solar:delivery-bold-duotone",
    },
    {
      info_name: "Status",
      details: data?.status,
      icon: "solar:user-bold-duotone",
    },
  ];

  return (
    <Card>
      <CardContent>
        <div className="flex justify-center pt-10">
          <div className="flex-none w-20 h-20 rounded-full">
            <Image
              src={author2}
              alt="author image"
              className="w-full h-full  rounded-full"
              priority={true}
            />
          </div>
        </div>

        <h3 className="text-base font-semibold text-default-900 text-center mt-3">
        {data?.user?.first_name} {data?.user?.last_name}
        </h3>
        <p className="text-sm text-center text-gray-400">
          {data?.user?.email}
        </p>

        <div className="mt-4 flex justify-between">
          <Button color="dark" size="sm" className="w-full mr-2">
            Impersonate
          </Button>
          <Button color="destructive" size="sm" className="w-full">
            Set to In-Active
          </Button>
        </div>

        <div className="border border-dashed border-default-200 my-5"></div>

        {userInformation?.map((item, index) => (
          <div
            className="flex flex-wrap  gap-2 hover:bg-default-50 py-[11px] px-4"
            key={index}
          >
            <div className="flex-1 flex items-center gap-3">
              <div className="w-8 h-8 md:h-10 md:w-10 pt-3">
                <Icon icon={item?.icon} className="h-6 w-6" />
              </div>
              <div>
                <div className="text-sm font-medium text-default-600">
                  {item?.info_name}
                </div>
                <div className="text-xs text-default-500"> {item?.details}</div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default UserCard;
