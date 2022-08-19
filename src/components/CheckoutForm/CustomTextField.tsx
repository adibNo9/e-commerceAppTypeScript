import { Grid, TextField } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";

type FormValue = {
  name: string;
  label: string;
};

const FormInput: React.FC<FormValue> = ({ name, label }) => {
  const { register } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <TextField
        {...register("test")}
        name={name}
        label={label}
        required
        style={{ width: "100%" }}
      />
    </Grid>
  );
};

export default FormInput;
