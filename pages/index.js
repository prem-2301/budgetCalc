import Head from "next/head";
import BudgetCalc from "./budget_calculator";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const themeid = searchParams.get("theme");
  return (
    <>
      <Head>
        <title>Budget Calculator</title>
      </Head>

      <BudgetCalc themeid={themeid} />
    </>
  );
}
