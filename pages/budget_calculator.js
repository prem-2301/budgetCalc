import { applyTheme } from "@/themes";
import NextHead from "next/head";
import style from "../styles/budget_calculator.module.scss";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import dynamic from "next/dynamic";
import Recalc from "./recalculate.svg";
import InfoIcon from "./info.svg";
import Image from "next/image";
import Logo from "./logo.svg";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const DynamicChart = dynamic(() => import("./Chart"), {
  ssr: false,
});

const schema = yup.object().shape({
  income: yup
    .number()
    .min(1, "Please enter a number more than 1")
    .required("Please enter a number more than 1"),
});

const defaultValues = {
  income: 5000,
};

export default function BudgetCalc({ themeid }) {
  console.log(themeid);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [result, setResult] = useState({
    showResult: false,
    necess: null,
    wants: null,
    savings: null,
  });

  //Theme change
  const theme = themeid || "theme3";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues,
  });

  function onSubmit(data) {
    setButtonStatus(false);
    setResult({
      showResult: true,
      necess: (0.5 * data.income).toFixed(0),
      wants: (0.3 * data.income).toFixed(0),
      savings: (0.2 * data.income).toFixed(0),
      necessAnnual: (data.income * 0.5 * 12).toFixed(0),
      wantsAnnual: (0.3 * data.income * 12).toFixed(0),
      savingsAnnual: (0.2 * data.income * 12).toFixed(0),
    });
    console.log(data.income);
  }

  return (
    <>
      <NextHead>
        <style>{`${applyTheme(theme)}`}</style>
      </NextHead>
      <div className={style.page}>
        {theme === "theme3" ? (
          <div className={style.usatHeader}>
            <p className={style.usatHeadTitle}>Budget Calculator</p>
            <p className={style.usatHeadContent}>
              Enter your monthly after-tax income into this free budget
              calculator to create a suggested budget.
            </p>
          </div>
        ) : (
          <div className={style.header}>
            <div className={style.headTitle}>
              <p className={style.headTitleTitle}>Budget Calculator</p>
              <p className={style.headTitleContent}>
                Enter your monthly after-tax income into this free budget
                calculator to create a suggested budget.
              </p>
            </div>

            <div className={style.headerImg}>
              <Image src={Logo} alt="Logo" />
            </div>
          </div>
        )}

        <div className={style.content}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.form}>
              <div className={style.inputfield}>
                <label>
                  Monthly After-Tax Income{"  "}
                  <Popup
                    trigger={<Image src={InfoIcon} alt="Info" />}
                    keepTooltipInside="body"
                    on={["hover", "click"]}
                    position={["top center", "bottom center"]}
                  >
                    The total amount of money you take home each month after
                    taxes. If you have automatic deductions for retirement
                    contributions, add them back in to include them in this
                    total.
                  </Popup>
                </label>
                <div className={style.inputInside}>
                  <div className={style.currencySign}>$</div>
                  <input {...register("income")} />
                </div>
                {errors.income && (
                  <div className={style.errorMessage}>
                    {errors.income.message}
                  </div>
                )}
              </div>

              <div className={style.calculate}>
                <button type="submit">
                  {!buttonStatus ? (
                    <>
                      {theme === "theme3" ? "RECALCULATE" : "Recalculate"}
                      <Image
                        className={style.recalc}
                        src={Recalc}
                        alt="Recalculate"
                      />
                    </>
                  ) : theme === "theme3" ? (
                    "CALCULATE"
                  ) : (
                    "Calculate"
                  )}
                </button>
              </div>
            </div>
          </form>
          {result.showResult && (
            <div className={style.result}>
              <div className={style.chart}>
                <DynamicChart result={result} theme={theme} />
              </div>
              <div className={style.resultHeading}>
                Your 50/30/20 Budget Allocation
              </div>
              <div className={style.resultRow}>
                <div className={[style.rowBox, style.necess].join(" ")}>
                  <div>
                    Necessities (50%){" "}
                    <Popup
                      trigger={
                        <Image
                          className={style.resultCat}
                          src={InfoIcon}
                          alt="Info"
                        />
                      }
                      keepTooltipInside="body"
                      on={["hover", "click"]}
                      position={["top center", "bottom center"]}
                    >
                      The amount you pay, in total, each month for things like
                      your mortgage/rent, utilities, insurance premiums, student
                      loans, alimony, groceries, etc.
                    </Popup>
                  </div>{" "}
                  <div className={style.amountText}>${result.necess}</div>
                </div>
                <div className={[style.rowBox, style.wants].join(" ")}>
                  <div>
                    {" "}
                    Wants (30%){" "}
                    <Popup
                      trigger={
                        <Image
                          className={style.resultCat}
                          src={InfoIcon}
                          alt="Info"
                        />
                      }
                      keepTooltipInside="body"
                      on={["hover", "click"]}
                      position={["top center", "bottom center"]}
                    >
                      The amount you pay, in total, each month for things like
                      dining out, shopping, entertainment, etc.
                    </Popup>
                  </div>
                  <div className={style.amountText}>${result.wants}</div>
                </div>
                <div className={[style.rowBox, style.saves].join(" ")}>
                  <div>
                    Savings & Debt Repayment (20%){" "}
                    <Popup
                      trigger={
                        <Image
                          className={style.resultCat}
                          src={InfoIcon}
                          alt="Info"
                        />
                      }
                      keepTooltipInside="body"
                      on={["hover", "click"]}
                      position={["top center", "bottom center"]}
                    >
                      The amount you pay, in total, each month for things like
                      building an emergency fund, retirement contributions,
                      paying off credit cards, etc.
                    </Popup>
                  </div>
                  <div className={style.amountText}>${result.savings}</div>
                </div>
              </div>
              <div className={style.resultHeading}>
                Your 50/30/20 Annual Allocation
              </div>
              <div className={style.resultRow}>
                <div className={[style.rowBox, style.necess].join(" ")}>
                  <div>Necessities (50%) </div>{" "}
                  <div className={style.amountText}>${result.necessAnnual}</div>
                </div>
                <div className={[style.rowBox, style.wants].join(" ")}>
                  <div> Wants (30%) </div>
                  <div className={style.amountText}>${result.wantsAnnual}</div>
                </div>
                <div className={[style.rowBox, style.saves].join(" ")}>
                  <div>Savings & Debt Repayment (20%) </div>
                  <div className={style.amountText}>
                    ${result.savingsAnnual}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
