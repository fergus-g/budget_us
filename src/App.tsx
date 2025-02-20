import { useState } from "react";
import Header from "./Header/Header";
import Salary from "./Salary/Salary";
import Expenses from "./Expenses/Expenses";
import Total from "./Totals/Total";

import styles from "./App.module.css";

function App() {
  const [salary, setSalary] = useState<string>("");
  const [currency, setCurrency] = useState<string>("");

  return (
    <div className={styles.container}>
      <Header />
      <Salary setSalary={setSalary} setCurrency={setCurrency} />
      <Expenses />
      <Total salary={salary} currency={currency} />
    </div>
  );
}

export default App;
