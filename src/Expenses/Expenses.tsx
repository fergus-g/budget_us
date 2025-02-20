import { useState } from "react";
import { Card } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ExpenseModal from "./ExpenseModal";

import styles from "./Expenses.module.css";
console.log(styles);

const Expenses = () => {
  const [open, setIsOpen] = useState(false);
  const [expense, setExpense] = useState<
    Array<{ amount: string; expenseType: string; category: string }>
  >([]);

  const modalHandler = () => {
    console.log(expense);
    setIsOpen(!open);
  };

  return (
    <>
      <div className={styles.container}>
        <Card
          sx={{
            backgroundColor: "antiquewhite",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            padding: "20px",
            height: "400px",
            width: "500px",
            paddingTop: "10px",
            marginTop: "20px",
          }}
          variant="outlined"
        >
          <AddCircleOutlineIcon
            sx={{ mr: 1, cursor: "pointer" }}
            onClick={modalHandler}
          />
        </Card>
        <ExpenseModal
          open={open}
          setIsOpen={setIsOpen}
          setExpense={setExpense}
        />
      </div>
    </>
  );
};

export default Expenses;
