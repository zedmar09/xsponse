"use client";
import { GridContainer } from "@/src/components/xsponse/filters/grid-container";
import { GridItem } from "@/src/components/xsponse/filters/grid-item";
import { Label } from "@/src/components/xsponse/ui/label";
import { Switch } from "@/src/components/xsponse/ui/switch";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/xsponse/ui/select";
import { Button } from "@/src/components/xsponse/ui/button";

const UpdateManagerFilters = () => {
  return (
    <>
     <GridContainer>
          <GridItem>
          <Label className="mb-2">
            Filter By Type
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by By Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">IP Speaker</SelectItem>
              <SelectItem value="2">Console</SelectItem>
              <SelectItem value="3">Lock</SelectItem>
              <SelectItem value="4">Output Device</SelectItem>
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
              <SelectItem value="1">Outdated</SelectItem>
              <SelectItem value="2">Up-to-date</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          
          <GridItem>
          <Button className="w-full mt-5">Manual Update</Button>
          
          </GridItem>

          <GridItem>
          <div className="flex items-center space-x-2.5 mt-7">
      <Switch id="update" />
      <Label
        htmlFor="update"
        className="text-base text-muted-foreground  font-normal"
      >
        Set Auto Update
      </Label>
    </div>
          </GridItem>
        </GridContainer>
    </>
  );
};

export default UpdateManagerFilters;