import "./headerComponents.css";

type Props = {
  totalExpenses: number;
};
export default function HeaderComponent({ totalExpenses }: Props) {
  return (
    <header className="header">
      <div>
        <p className="totalExpenses">My balance</p>
        <h1 className="totalExpenses">${totalExpenses.toFixed(2)}</h1>
      </div>
      <img src="../../public/images/logo.svg" alt="logo " />
    </header>
  );
}
