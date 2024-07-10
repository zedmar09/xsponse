import { Button } from "@/src/components/xsponse/ui/button";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/xsponse/ui/select";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { useList } from "@refinedev/core";

const AccountInfo = ({customerData}: {customerData:any}) => {

  const { data, isLoading, error } = useList({
    resource: "/api/accounts/dealer",
  });

  return (
    <>
      <form className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-base font-semibold text-default-900">
            Account Information
          </h3>
          <div className="border border-dashed border-default-200 my-5"></div>
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            First Name <RequiredLabel />
          </Label>
          <Input type="text" value={`${customerData?.user?.first_name}`} placeholder="Enter First Name" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Last Name <RequiredLabel />
          </Label>
          <Input type="text" value={`${customerData?.user?.last_name}`} placeholder="Enter Last Name" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Email <RequiredLabel />
          </Label>
          <Input type="email" value={`${customerData?.user?.email}`} placeholder="Enter Email" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Contact Number <RequiredLabel />
          </Label>
          <Input type="tel" placeholder="Enter Contact Number" value={`${customerData?.user?.phone_number}`} required />
        </div>
        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-base font-semibold text-default-900">
            Address Information
          </h3>
          <div className="border border-dashed border-default-200 my-5"></div>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            State <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Florida</SelectItem>
              <SelectItem value="2">California</SelectItem>
              <SelectItem value="3">Texas</SelectItem>
              <SelectItem value="4">Ohio</SelectItem>
              <SelectItem value="5">North Carolina</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            City <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">New York</SelectItem>
              <SelectItem value="2">Yonkers</SelectItem>
              <SelectItem value="3">Buffalo</SelectItem>
              <SelectItem value="4">Albany</SelectItem>
              <SelectItem value="5">Utica</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Street Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Street Name" required />
        </div>
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Zip Code <RequiredLabel />
          </Label>
          <Input type="email" placeholder="Enter Zip Code" value={`${customerData?.billing_zip}`}required />
        </div>

        <div className="col-span-1 lg:col-span-2">
          <h3 className="text-base font-semibold text-default-900">
            Dealer Information
          </h3>
          <div className="border border-dashed border-default-200 my-5"></div>

          <Label className="mb-2">
            Dealer <RequiredLabel />
          </Label>
          <Select>
            <SelectTrigger size="md">
              <SelectValue placeholder="Select a Dealer" />
            </SelectTrigger>
            <SelectContent>
            {data?.data.map((dealer: any) => (
  <SelectItem key={dealer?.id} value={dealer?.id}>
    {dealer?.company_name}
  </SelectItem>
))}

            </SelectContent>

          </Select>
        </div>

        <div className="col-span-1 lg:col-span-2 flex justify-end">
          <Button color="dark" size="sm">
            Update Information
          </Button>
        </div>
      </form>
    </>
  );
};

export default AccountInfo;
