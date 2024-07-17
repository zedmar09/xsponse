"use client";

import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
import { Separator } from "@/src/components/xsponse/ui/separator";
import { keyInterest } from "@/src/components/xsponse/data-table/data/key-interest";
import ComboBox from "@/src/components/xsponse/ui/combo-box";

interface CountryType {
  isoCode: string;
  name: string;
}

interface StateType {
  isoCode: string;
  name: string;
}

interface CityType {
  name: string;
}

const ApplicationCompany: React.FC = () => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [states, setStates] = useState<StateType[]>([]);
  const [cities, setCities] = useState<CityType[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  const handleCountryChange = (countryCode: string) => {
    setSelectedCountry(countryCode);
    setStates(State.getStatesOfCountry(countryCode));
    setCities([]);
  };

  const handleStateChange = (stateCode: string) => {
    setSelectedState(stateCode);
    setCities(City.getCitiesOfState(selectedCountry, stateCode));
  };

  return (
    <>
      <div className="w-full flex flex-col">
        <div className="2xl:text-xl text-xl text-default-900">
          Company Information
        </div>
      </div>

      <Separator className="my-4" />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Company Name <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Company Name" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Address Line 1 <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Address Line 1" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Select Country <RequiredLabel />
          </Label>
          <ComboBox
            items={countries.map((country) => ({
              value: country.isoCode,
              label: country.name,
            }))}
            placeholder="Select Country"
            onChange={handleCountryChange}
          />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            State <RequiredLabel />
          </Label>
          <ComboBox
            items={
              selectedCountry
                ? states.map((state) => ({
                    value: state.isoCode,
                    label: state.name,
                  }))
                : [{ value: "", label: "Select Country First" }]
            }
            placeholder="Select State"
            onChange={handleStateChange}
            disabled={!selectedCountry}
          />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            City <RequiredLabel />
          </Label>
          <ComboBox
            items={
              selectedState
                ? cities.map((city) => ({
                    value: city.name,
                    label: city.name,
                  }))
                : [{ value: "", label: "Select State First" }]
            }
            placeholder="Select City"
            disabled={!selectedState}
          />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Zip Code <RequiredLabel />
          </Label>
          <Input type="text" placeholder="Enter Zip Code" required />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Key Offering Interested In <RequiredLabel />
          </Label>
          <ComboBox
            items={keyInterest?.map((interest) => ({
              value: interest.value,
              label: interest.label,
            }))}
            placeholder="Select Key Interest"
          />
        </div>

        <div className="flex flex-col mb-2">
          <Label className="mb-2">
            Company Website <RequiredLabel />
          </Label>
          <Input type="url" placeholder="Enter Company Website" required />
        </div>
      </div>
    </>
  );
};

export default ApplicationCompany;
