import c3 from "c3";
import "c3/c3.css";
import { useEffect } from "react";
import style from "../styles/chart.module.scss";
import Image from "next/image";
import NecessIcon from "./necessity.svg";
import SavingIcon from "./saving.svg";
import WantsIcon from "./wants.svg";

export default function Chart({ result, theme }) {
  useEffect(() => {
    const generateChart = async () => {
      const themeModule = await import(`../themes/${theme}`);
      const newTheme = themeModule.default;

      const chart = c3.generate({
        bindto: "#chart",
        size: {
          height: 240,
          width: 300,
        },
        data: {
          order: "asc",
          columns: [
            ["necess", result.necess],
            ["wants", result.wants],
            ["savings", result.savings],
          ],
          colors: {
            necess: newTheme[3],
            wants: newTheme[4],
            savings: newTheme[1],
          },
          type: "donut",
        },
        legend: {
          show: false,
        },
        tooltip: {
          show: false,
        },
        donut: {
          padAngle: 0,
          label: {
            show: false,
          },
        },
      });
    };

    if (typeof window !== "undefined") {
      generateChart();
    }
  }, [theme]);

  return (
    <>
      <div className={style.content}>
        <div className={style.necess}>
          <Image src={NecessIcon} alt="Necess" />
          50% Necessities
        </div>
        <div className={style.chart} id="chart"></div>
        <div className={style.colContent}>
          <div className={style.savings}>
            <Image src={SavingIcon} alt="Wants" />
            20% Savings & Debt Repayment
          </div>
          <div className={style.wants}>
            <Image src={WantsIcon} alt="Savings" />
            30% Wants
          </div>
        </div>
      </div>
    </>
  );
}
