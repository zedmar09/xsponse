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
const DocumentFilter = () => {
  return (
    <>
     <GridContainer>
          <GridItem>
          <Label className="mb-2">
            Filter By Category
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Category" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="0">All Category</SelectItem>
              <SelectItem value="1">Manual</SelectItem>
              <SelectItem value="2">Marketing</SelectItem>
              <SelectItem value="3">Guides</SelectItem>
              <SelectItem value="4">Notes</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>
          <GridItem>
          <Label className="mb-2">
            Filter By Document Type
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Document Type" />
            </SelectTrigger>
            <SelectContent>
            <SelectItem value="0">All Documents</SelectItem>
              <SelectItem value="1">Document Files</SelectItem>
              <SelectItem value="2">Audio</SelectItem>
              <SelectItem value="3">Videos</SelectItem>
            </SelectContent>
          </Select>
          </GridItem>

          <GridItem>
          <Label className="mb-2">
            Filter By Viewers
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Filter by Viewers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">All Viewers</SelectItem>
              <SelectItem value="2">Customers</SelectItem>
              <SelectItem value="3">Dealers</SelectItem>
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
              <SelectItem value="1">All Status</SelectItem>
              <SelectItem value="2">Visible</SelectItem>
              <SelectItem value="3">Hidden</SelectItem>
            </SelectContent>
          </Select>
          
          </GridItem>

        </GridContainer>
    </>
  );
};

export default DocumentFilter;