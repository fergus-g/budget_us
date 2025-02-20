import { useState } from "react";
import Header from "./Header/Header";
import Salary from "./Salary/Salary";
import Expenses from "./Expenses/Expenses";
import Total from "./Totals/Total";

import styles from "./App.module.css";

function App() {
  const [salary, setSalary] = useState("");

  return (
    <div className={styles.container}>
      <Header />
      <Salary setSalary={setSalary} />
      <Expenses />
      <Total salary={salary} />
    </div>
  );
}

export default App;
