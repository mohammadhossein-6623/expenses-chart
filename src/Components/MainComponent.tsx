import "./mainComponent.css";
import { ResponsiveBar } from "@nivo/bar";
import { useState } from "react";

interface Expense {
  day: string;
  amount: number;
}
type Props = {
  expenses: Expense[];
};

export default function MainComponent({ expenses }: Props) {
  const data = expenses.map((expense) => ({
    day: expense.day,
    amount: expense.amount,
  }));

  const currentDay = new Date()
    .toLocaleDateString("en-US", { weekday: "short" })
    .toLowerCase();

  const [hoveredBar, setHoveredBar] = useState<string | null>(null);

  const getBarColor = (day: string) => {
    if (day === currentDay) return "hsl(186, 34%, 60%)";
    if (day === hoveredBar) return "hsl(0, 100%,80%)";

    return "hsl(10, 79%, 65%)";
  };

  return (
    <main className="mainLayout">
      <h1 style={{ fontSize: 28 }}>Spending - Last 7 days</h1>
      <div style={{ height: 200, width: "100%" }}>
        <ResponsiveBar
          data={data}
          keys={["amount"]}
          indexBy="day"
          margin={{ top: 20, bottom: 50 }}
          padding={0.3}
          borderRadius={5}
          colors={(d) => getBarColor(d.data.day)}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
          }}
          axisLeft={null}
          enableLabel={false}
          gridYValues={[]}
          tooltip={({ value }) => (
            <strong className="tooltip">{`$${value}`}</strong>
          )}
          onMouseEnter={(node) => setHoveredBar(node.data.day)}
          onMouseLeave={() => setHoveredBar(null)}
        />
      </div>
      <div className="footer">
        <div className="footer-box">
          <p className="p">Totla this month</p>
          <h2 className="title">$478.33</h2>
        </div>
        <div className="last-month">
          <h5 className="title">+2.4%</h5>
          <p className="p">from last month</p>
        </div>
      </div>
    </main>
  );
}
