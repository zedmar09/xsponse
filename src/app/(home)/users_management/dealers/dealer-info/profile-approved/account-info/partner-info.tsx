"use client";
import * as React from "react";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/src/components/xsponse/ui/select";
  import { Card, CardContent} from "@/src/components/ui/card";


const PartnerInfo = () => {

  return (
    <Card>
      <CardContent>
      <div className="w-full flex flex-col pt-5">
        <div className="2xl:text-xl text-xl text-default-900">
          Partner Information
        </div>
      </div>

      <Separator className="my-4" />
    
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 ">

      <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Who will be your partner portal super admin? <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Name" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Super admin email? <RequiredLabel />
          </Label>
          <Input type="email" placeholder="Enter Email" required />
        </div>

        <div className="col-span-1 lg:col-span-2 mb-2">
        <Label className="mb-2">
            Who will be responsible for orders and accounts payable? <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Name" required />
        </div>

        <div className="col-span-1 lg:col-span-2 mb-1">
        <Label className="mb-2">
          Which Security Solutions are you intending on Marking and selling?
          <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select Security Solutions" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Barricaid">Barricaid</SelectItem>
              <SelectItem value="X-Connect">X-Connect</SelectItem>
              <SelectItem value="X-Detect">X-Detect</SelectItem>
              <SelectItem value="X-Display">X-Display</SelectItem>
              <SelectItem value="X-Guardian">X-Guardian</SelectItem>
              <SelectItem value="X-Integrate">X-Integrate</SelectItem>
              <SelectItem value="X-Intelligent">X-Intelligent</SelectItem>
              <SelectItem value="X-Light Strobe">X-Light Strobe</SelectItem>
              <SelectItem value="X-Protect">X-Protect</SelectItem>
              <SelectItem value="X-Shield">X-Shield</SelectItem>
              <SelectItem value="X-Wearable">X-Wearable</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="col-span-1 lg:col-span-2 mb-1"> <Label className="mb-2">
        Average Access Control Project Size
          <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select Project Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0 Readers</SelectItem>
              <SelectItem value="1-31">1-31 Readers</SelectItem>
              <SelectItem value="32-63">32-63 Readers</SelectItem>
              <SelectItem value="64-127">64-127 Readers</SelectItem>
              <SelectItem value="128-255">128-255 Readers</SelectItem>
              <SelectItem value="256">256+ Readers</SelectItem>
             
            </SelectContent>
          </Select></div>
        <div className="col-span-1 lg:col-span-2">
        <Label className="mb-2">
       Average Camera Project Size
          <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select Project Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="0">0 Channels</SelectItem>
              <SelectItem value="1-4">1-4 Channels</SelectItem>
              <SelectItem value="5-19">5-19 Channels</SelectItem>
              <SelectItem value="20-49">20-49 Channels</SelectItem>
              <SelectItem value="50-99">50-99 Channels</SelectItem>
              <SelectItem value="100-499">100-499 Channels</SelectItem>
              <SelectItem value="500">500+ Channels</SelectItem>
            </SelectContent>
          </Select>
        </div>

      

        
        </div>
      </CardContent>
        
    
    </Card>
  );
};

export default PartnerInfo;
