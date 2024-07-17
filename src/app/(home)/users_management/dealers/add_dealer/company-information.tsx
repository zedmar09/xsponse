"use client";

import React, { useState, useEffect } from "react";
import { Country, State, City } from "country-state-city";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/src/components/xsponse/ui/card";
import { Input } from "@/src/components/xsponse/ui/input";
import { Label } from "@/src/components/xsponse/ui/label";
import { keyInterest } from "@/src/components/xsponse/data-table/data/key-interest";
import RequiredLabel from "@/src/components/xsponse/ui/required_label";
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

const CompanyInformation: React.FC = () => {
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
      <Card className="mb-5">
        <CardHeader>
          <p className="mb-2 text-lg text-default-700 font-medium">
            Company Information
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col mb-5">
            <Label className="mb-2">
              Company Name <RequiredLabel />
            </Label>
            <Input type="text" placeholder="Enter Company Name" required />
          </div>

          <div className="flex flex-col mb-5">
            <Label className="mb-2">
              Company Website <RequiredLabel />
            </Label>
            <Input type="url" placeholder="Enter Company Website" required />
          </div>

          <div className="flex flex-col">
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
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <p className="mb-2 text-lg text-default-700 font-medium">
            Address Information
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="col-span-1 lg:col-span-2 mb-2">
              <Label className="mb-2">
                Select Country
                <RequiredLabel />
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
                Address Line 1<RequiredLabel />
              </Label>
              <Input type="text" placeholder="Enter Address Line 1" required />
            </div>

            <div className="flex flex-col mb-2">
              <Label className="mb-2">Address Line 2</Label>
              <Input type="text" placeholder="Enter Address Line 2" />
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
                Street Name <RequiredLabel />
              </Label>
              <Input type="text" placeholder="Enter Street Name" required />
            </div>
            <div className="flex flex-col mb-2">
              <Label className="mb-2">
                Zip Code <RequiredLabel />
              </Label>
              <Input type="text" placeholder="Enter Zip Code" required />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default CompanyInformation;
