import { Grid, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";

interface selectForm {
  inputLabel: string;
  selectValue: unknown;
  onChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  items: { id: string; label: string }[];
}

const SelectInput: React.FC<selectForm> = ({
  inputLabel,
  selectValue,
  onChange,
  items,
}) => {
  return (
    <Grid item xs={12} sm={6}>
      <InputLabel>{inputLabel}</InputLabel>
      <Select fullWidth value={selectValue} onChange={onChange}>
        {items.map((country) => (
          <MenuItem key={country.id} value={country.id}>
            {country.label}
          </MenuItem>
        ))}
      </Select>
    </Grid>
  );
};

export default SelectInput;
