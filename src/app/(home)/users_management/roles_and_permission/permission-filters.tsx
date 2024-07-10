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

const PermissionFilters = () => {
  return (
    <>
     <GridContainer>
          <GridItem>
          <Label className="mb-2">
            Search Roles/Permissions
          </Label>
          <Input type="text" placeholder=" Search Roles/Permissions"  />
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Sort by No. of Users
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Sort by No. of Users" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">ASC</SelectItem>
              <SelectItem value="2">DESC</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Sort by No. of Permissions
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Sort by No. of Permissions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">ASC</SelectItem>
              <SelectItem value="2">DESC</SelectItem>
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

export default PermissionFilters;

export const TableActions = () => {
  return (
    <>
      <div className="w-full flex justify-end mt-6">
        <Button className="mr-3 w-full" color="dark" size="sm">
          <Icon icon="bxs:file-export" className="w-6 h-6 mr-2  " />
          Export
        </Button>

        <Button size="sm" className="w-full">
          <Icon icon="flowbite:grid-plus-solid" className="w-6 h-6 mr-2" />
          Add Roles/Permissions
        </Button>
      </div>
    </>
  );
};
