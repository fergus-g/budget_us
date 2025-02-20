import { Card } from "@mui/material";

import styles from "./Expenses.module.css";

const Expenses = () => {
  const card = "Electricity €365.62";
  return (
    <div className={styles.container}>
      <Card
        className={styles.card}
        sx={{
          backgroundColor: "antiquewhite",
          alignContent: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
        }}
        variant="outlined"
      >
        {card}
      </Card>
    </div>
  );
};

export default Expenses;
