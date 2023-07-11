import Head from "next/head";
import BudgetCalc from "./budget_calculator";

export default function Home() {
  return (
    <>
      <Head>
        <title>Budget Calculator</title>
      </Head>

      <BudgetCalc />
    </>
  );
}
