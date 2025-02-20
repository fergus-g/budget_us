import { useState, ChangeEvent } from "react";

import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";

import styles from "./Salary.module.css";

interface SalaryProps {
  setSalary: (salary: string) => void;
  setCurrency: (currency: string) => void;
}

const Salary = ({ setSalary, setCurrency }: SalaryProps) => {
  const [value, setValue] = useState<string>("");
  const [currencySymbol, setCurrencySymbol] = useState<string>("");

  const clickHandler = (value: string) => {
    setSalary(value);
    setValue("");
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCurrencySymbol(event.target.value);
    setCurrency(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="demo-simple-select-label">Currency</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={currencySymbol}
          label="Currency"
          onChange={handleChange}
        >
          <MenuItem value={"€"}>Euro</MenuItem>
          <MenuItem value={"£"}>Pound</MenuItem>
          <MenuItem value={"$"}>Dollar</MenuItem>
        </Select>
      </FormControl>
      <TextField
        className={styles.textField}
        type="number"
        id="outlined-basic"
        value={value}
        variant="outlined"
        placeholder="Enter Monthly Income"
        onChange={handleInputChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            clickHandler(value);
          }
        }}
      />
      <Button
        className={styles.button}
        variant="contained"
        onClick={() => clickHandler(value)}
      >
        Submit
      </Button>
    </div>
  );
};

export default Salary;
