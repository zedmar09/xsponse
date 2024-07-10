"use client"
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Icon } from "@iconify/react";
import UsersDataChart from "./users-data-chart";
import UsersDataTable from "./users-data-table";
interface Users {
  id: number;
  country: string;
  count: string;
}

const UsersStat = () => {
  const usersData:Users[] = [
    {
      id: 1,
      country: "X-Communicate Ceiling Speaker",
      count: "05",
    },
    {
      id: 2,
      country: "X-Communicate Outdoor Speaker",
      count: "06",
    },
    {
      id: 3,
      country: "X-Communicate Public Address Adaptor",
      count: "06",
    },
    {
      id: 4,
      country: "X-Communicate Tile Speaker",
      count: "10",
    },
    {
      id: 5,
      country: "X-Smart Door Lock",
      count: "08",
    },
    {
      id: 6,
      country: "X-Smart Window Lock",
      count: "08",
    },
    {
      id: 7,
      country: "X-Voice Speaker",
      count: "06",
    },
    {
      id: 8,
      country: "X-Alarm Outdoor",
      count: "06",
    },
  ];
  return (
    <Card>
      <CardHeader className="border-none pb-0 mb-5">
        <div className="flex items-center gap-1">
          <div className="flex-1">
            <div className="text-xl font-semibold text-default-900"> Devices </div>
            <span className="text-xs text-default-600 ml-1">Top Selling Devices</span>
          </div>
          <div className="flex-none flex items-center gap-1">
            <span className="text-4xl font-semibold text-primary">63</span>
            <span className="text-2xl text-success">
              <Icon icon="heroicons:arrow-trending-up-16-solid" />
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="">
      
        <UsersDataChart />
        <UsersDataTable
          users={usersData}
        />
      </CardContent>
    </Card>
  );
};

export default UsersStat;