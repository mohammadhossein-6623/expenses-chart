import React, { useEffect, useState } from "react";
import HeaderComponent from "../Components/HeaderComponent";
import MainComponent from "../Components/MainComponent";
import "./expensesLayout.css";

interface Expense {
  day: string;
  amount: number;
}

const ExpensesChart: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [totalExpenses, setTotalExpenses] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("../../data.json");
      const data: Expense[] = await response.json();
      setExpenses(data);
      const total = data.reduce((acc, expense) => acc + expense.amount, 0);
      setTotalExpenses(total);
    };
    fetchData();
  }, []);

  return (
    <div id="expensesLayout">
      <HeaderComponent totalExpenses={totalExpenses} />
      <MainComponent expenses={expenses} />
    </div>
  );
};

export default ExpensesChart;
