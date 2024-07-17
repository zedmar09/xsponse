"use client";
import * as React from "react";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";
  import { Card, CardContent} from "@/src/components/ui/card";
  import { RadioGroup, RadioGroupItem } from "@/src/components/xsponse/ui/radio-group";
  import { Textarea } from "@/src/components/ui/textarea";

const OtherInfo = () => {

    const [referred, setReferred] = React.useState<string>("no");

  return (
    <Card>
      <CardContent>
      <div className="w-full flex flex-col pt-5">
        <div className="2xl:text-xl text-xl text-default-900">
          Other Information
        </div>
      </div>

      <Separator className="my-4" />
    
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">

        <div className="col-span-1 lg:col-span-2 mb-2">
          <Label className="mb-2">
            List your reasons to become a reseller.  <RequiredLabel />
          </Label>
          <Textarea rows={5} placeholder="Enter List of Reasons" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Were you referred by a Xsponse Representative? <RequiredLabel />
          </Label>
          <RadioGroup
            defaultValue="no"
            onValueChange={(value: string) => setReferred(value)}
          >
            <RadioGroupItem value="yes" id="r_1">
              Yes
            </RadioGroupItem>
            <RadioGroupItem value="no" id="r_2">
              No
            </RadioGroupItem>
          </RadioGroup>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Name of Representative <RequiredLabel />
          </Label>
          <Input 
            type="text" 
            placeholder="Enter Name of Representative" 
            required 
            disabled={referred === "no"} 
          />
        </div>
        </div>
      </CardContent>
        
    
    </Card>
  );
};

export default OtherInfo;
