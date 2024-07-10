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

const SystemUsersFilters = () => {
  return (
    <>
     <GridContainer>
          <GridItem>
          <Label className="mb-2">
            Search System Users
          </Label>
          <Input type="text" placeholder="Search System Users"  />
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Role 
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Dealer</SelectItem>
              <SelectItem value="2">Customer</SelectItem>
              <SelectItem value="3">Administrator</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Status
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">ACTIVE</SelectItem>
              <SelectItem value="2">IN-ACTIVE</SelectItem>
             </SelectContent>
          </Select>
          </GridItem>
          <GridItem>
        <TableActions />
          </GridItem>
        </GridContainer>
    </>
  );
};

export default SystemUsersFilters;

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
          Add System Users
        </Button>
      </div>
    </>
  );
};
