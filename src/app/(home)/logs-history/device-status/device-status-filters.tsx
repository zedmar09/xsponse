"use client";
import { GridContainer } from "@/src/components/xsponse/filters/grid-container";
import { GridItem } from "@/src/components/xsponse/filters/grid-item";
import { Label } from "@/src/components/xsponse/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/xsponse/ui/select";

const DeviceStatusFilters = () => {
  return (
    <>
     <GridContainer>
          
          <GridItem>
          <Label className="mb-2">
            Filter By Customer Name
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Customer Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Customer 1</SelectItem>
              <SelectItem value="2">Customer 2</SelectItem>
              <SelectItem value="3">Customer 3</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Location
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Gymnasium</SelectItem>
              <SelectItem value="2">Faculty Room</SelectItem>
              <SelectItem value="3">Principal Room</SelectItem>
              <SelectItem value="4">Auditorium</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          
          <GridItem>
          <Label className="mb-2">
            Filter By Connection Status
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Online</SelectItem>
              <SelectItem value="2">Offline</SelectItem>
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
              <SelectItem value="1">In Alarm</SelectItem>
              <SelectItem value="2">Not Alarm</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
        </GridContainer>
    </>
  );
};

export default DeviceStatusFilters;