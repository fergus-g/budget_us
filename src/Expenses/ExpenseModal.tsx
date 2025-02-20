import {
  Modal,
  Typography,
  Box,
  TextField,
  Button,
  ToggleButton,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import { useState, ChangeEvent } from "react";
import styles from "./ExpensesModal.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: 200,
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  color: "black",
};

const ExpenseModal = ({ open, setIsOpen, setExpense }) => {
  //   const clickHandler = (value: string) => {};
  const [selected, setSelected] = useState(false);
  const [category, setCategory] = useState("");
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);

  let expenseObject = {
    type: "",
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSuccess(false);
    if (event.target.placeholder === "Enter Expense") {
      setExpenseType(event.target.value);
      console.log("Expense Type:", expenseType);
    } else {
      setAmount(event.target.value);
      console.log(amount);
    }
  };

  const handleAddExpense = () => {
    // Push the new expense object to the expenses array
    const newExpense = { amount, expenseType, category };
    setExpense((prevExpense) => [...prevExpense, newExpense]);
    console.log(newExpense);

    setSuccess(true);

    // Reset the form values
    setAmount("");
    setExpenseType("");
    setCategory("");

    if (!selected) {
      setIsOpen(false);
    }
  };

  const handleClose = () => setIsOpen(false);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add an expense
          </Typography>
          {success ? (
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Expense Successfully Added!
            </Typography>
          ) : (
            ""
          )}
          <div className={styles.expenseInput}>
            <TextField
              type="text"
              id="outlined-basic"
              variant="outlined"
              value={expenseType}
              placeholder="Enter Expense"
              onChange={handleInputChange}
            />
            <TextField
              type="number"
              id="outlined-basic"
              variant="outlined"
              placeholder="Expense Amount"
              value={amount}
              onChange={handleInputChange}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                label="Category"
              >
                <MenuItem value={"Entertainment"}>Entertainment</MenuItem>
                <MenuItem value={"Bills"}>Bills</MenuItem>
                <MenuItem value={"Food"}>Food</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" onClick={handleAddExpense}>
              Add
            </Button>
          </div>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => setSelected((prevSelected) => !prevSelected)}
          >
            Add More?
            <CheckIcon />
          </ToggleButton>
        </Box>
      </Modal>
    </>
  );
};

export default ExpenseModal;
