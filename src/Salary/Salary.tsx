import { useState } from "react";
import { TextField, Button } from "@mui/material";

import styles from "./Salary.module.css";

const Salary = ({ setSalary }) => {
  const [value, setValue] = useState("");

  const clickHandler = (value) => {
    setSalary(value);
    setValue("");
  };

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.container}>
      <TextField
        className={styles.textField}
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
