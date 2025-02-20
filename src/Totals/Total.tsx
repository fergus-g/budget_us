import { Card } from "@mui/material";

import styles from "./Total.module.css";

const Total = ({ salary }) => {
  const totalExpenses = 2400;

  const card = salary - totalExpenses;
  return (
    <Card
      className={styles.card}
      variant="outlined"
      sx={{ backgroundColor: "antiquewhite" }}
    >
      {card}
    </Card>
  );
};

export default Total;
