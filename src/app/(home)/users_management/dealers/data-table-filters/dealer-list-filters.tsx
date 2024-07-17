"use client";
import Link from "next/link";
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

  interface DealerListFiltersProps {
    withPricingLevel: boolean;
  }

  const DealerListFilters: React.FC<DealerListFiltersProps> = ({ withPricingLevel }) => {
  return (
    <>
     <GridContainer>
          <GridItem>
          <Label className="mb-2">
            Search Dealer
          </Label>
          <Input type="text" placeholder="Search Dealer"  />
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Key Interest 
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Key Interest" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">X-Display</SelectItem>
              <SelectItem value="2">X-Sensor</SelectItem>
              <SelectItem value="3">X-Detect</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          {withPricingLevel && 
            <GridItem>
            <Label className="mb-2">
              Filter By Pricing Level
            </Label>
            <Select>
              <SelectTrigger size="md">
                <SelectValue placeholder="Filter by Pricing Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">SILVER</SelectItem>
                <SelectItem value="2">GOLD</SelectItem>
                <SelectItem value="3">DIAMOND</SelectItem>
              </SelectContent>
            </Select>
            </GridItem>
          }
          <GridItem>
        <TableActions />
          </GridItem>
        </GridContainer>
    </>
  );
};

export default DealerListFilters;


export const TableActions = () => {
    return (
      <>
        <div className="w-full flex justify-end mt-6">
          <Button className="mr-1 w-full" color="secondary" size="sm" >
            <Icon icon="mdi:file-csv" className="w-6 h-6 mr-2  " />
             CSV
          </Button>

          <Button className="mr-1 w-full" color="secondary" size="sm">
            <Icon icon="ant-design:file-pdf-filled" className="w-6 h-6 mr-2  " />
             PDF
          </Button>
  
          <Link href="/users_management/dealers/add_dealer/">
          <Button size="sm" className="w-full" variant='soft'>
            <Icon icon="flowbite:grid-plus-solid" className="w-6 h-6 mr-2  " />
            Add  Dealer
          </Button>
          </Link>
        </div>
      </>
    );
  };
