"use client";
import { Button } from "@/src/components/xsponse/ui/button";
import { Icon } from "@iconify/react";
import { GridContainer } from "@/src/components/xsponse/filters/grid-container";
import { GridItem } from "@/src/components/xsponse/filters/grid-item";
import { Label } from "@/src/components/xsponse/ui/label";
import { Input } from "@/src/components/xsponse/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/xsponse/ui/select";
import { DatePickerWithRange } from "@/src/components/xsponse/ui/date-picker";
import { useList } from "@refinedev/core";

const CustomerFilters = () => {
  const { data, isLoading, error } = useList({
    resource: "/api/accounts/dealer",
  });

  return (
    <>
     <GridContainer>
          <GridItem>
          <Label className="mb-2">
            Search Customer
          </Label>
          <Input type="text" placeholder="Search Customer"  />
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Dealer 
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Dealer" />
            </SelectTrigger>
            <SelectContent>
            {data?.data.map((dealer: any) => (
  <SelectItem key={dealer?.id} value={dealer?.id}>
    {dealer?.company_name}
  </SelectItem>
))}

            </SelectContent>
          </Select>
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Date Created 
          </Label>
            <DatePickerWithRange />
          </GridItem>
          <GridItem>
        <TableActions />
          </GridItem>
        </GridContainer>
    </>
  );
};

export default CustomerFilters;

export const TableActions = () => {
  return (
    <>
      <div className="w-full flex justify-end mt-6">
        <Button className="mr-3 w-full" color="dark" size="sm">
          <Icon icon="bxs:file-export" className="w-6 h-6 mr-2  " />
          Export
        </Button>

        <Button size="sm" className="w-full">
          <Icon icon="mdi:user-plus" className="w-6 h-6 mr-2" />
          Add New Customer
        </Button>
      </div>
    </>
  );
};
