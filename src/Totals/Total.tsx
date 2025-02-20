import { Card } from "@mui/material";

import styles from "./Total.module.css";

interface TotalProps {
  salary: string;
  currency: string;
}

const Total = ({ salary, currency }: TotalProps) => {
  const totalExpenses = 2400;

  const card = Number(salary) - totalExpenses;
  const totalSalary = Number(salary);
  return (
    <Card
      className={styles.card}
      variant="outlined"
      sx={{
        backgroundColor: "antiquewhite",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={styles.totalContainer}>
        <p>
          Total Income: {currency}
          {totalSalary}
        </p>
        <p>
          Remaining: {currency}
          {card}
        </p>
      </div>
    </Card>
  );
};

export default Total;
