import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./CustomTextField";
import { commerce } from "../../lib/commerce";
import SelectInput from "./SelectInput";
import { Link } from "react-router-dom";

const AddressFrom: React.FC<{
  checkoutToken: { id: string };
  next: ({}) => void;
}> = ({ checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState<{ code: unknown }>(
    {
      code: "",
    }
  );
  const [shippingCountry, setShippingCountry] = useState<any>();
  const [shippingSubdivisions, setshippingSubdivisions] = useState({});
  const [shippingSubdivision, setshippingSubdivision] = useState();
  const [shippingOptions, setShippingOptions] = useState<
    {
      id: string;
      description: string;
      price: { formatted_with_symbol: string };
    }[]
  >([]);
  const [shippingOption, setShippingOption] = useState("");

  const methods = useForm();

  const countries: { id: string; label: string }[] = Object.entries(
    shippingCountries
  ).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const subdivisions: { id: string; label: string }[] = Object.entries(
    shippingSubdivisions
  ).map(([code, name]) => ({
    id: code,
    label: name,
  }));

  const options = shippingOptions.map((sO) => ({
    id: sO.id,
    label: `${sO.description} - (${sO.price.formatted_with_symbol})`,
  }));

  const fetchShippingCountries = async (checkoutTokenId: string) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokenId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[2]);
  };

  const fetchShippingSubdivisions = async (countryCode: any) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setshippingSubdivisions(subdivisions);
    setshippingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokenId: string,
    country: unknown,
    region: unknown
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokenId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, [checkoutToken.id]);

  useEffect(() => {
    if (shippingCountry) fetchShippingSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision)
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shippingSubdivision
      );
  }, [shippingSubdivision, checkoutToken.id, shippingCountry]);

  const onCountryChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const country: unknown = event?.target?.value;

    setShippingCountry(country);
  };

  const onSubdivisionChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const subdivision = event?.target?.value;

    setshippingSubdivision(subdivision);
  };

  const submitHandler: React.FormEventHandler<HTMLFormElement> = () => {
    methods.handleSubmit((data) =>
      next({
        ...data,
        shippingCountry,
        shippingSubdivision,
        shippingOption,
      })
    );
  };

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            <FormInput name="firstname" label="First name" />
            <FormInput name="lastname" label="Last name" />
            <FormInput name="address1" label="Address" />
            <FormInput name="email" label="Email" />
            <FormInput name="city" label="City" />
            <FormInput name="zip" label="ZIP / Postal code" />
            <SelectInput
              inputLabel="Shipping Country"
              selectValue={shippingCountry}
              onChange={onCountryChange}
              items={countries}
            />
            <SelectInput
              inputLabel="Shipping Subdivision"
              selectValue={shippingSubdivision}
              onChange={onSubdivisionChange}
              items={subdivisions}
            />
            <SelectInput
              inputLabel="Shipping Option"
              selectValue={shippingOption}
              onChange={onSubdivisionChange}
              items={options}
            />
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressFrom;
