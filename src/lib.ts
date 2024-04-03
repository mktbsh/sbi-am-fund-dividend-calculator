import { NO_TAX, TAX } from "./data";

export type CalcDividendParams = {
  amount: number;
  dividendYield: number;
  isAfterTax: boolean;
  type: "annual" | "quarter" | "monthly";
};

export function calcDividend({
  amount,
  dividendYield,
  isAfterTax,
  type,
}: CalcDividendParams) {
  const dividend = amount * dividendYield * (isAfterTax ? TAX : NO_TAX);
  switch (type) {
    case "quarter":
      return floorValue(dividend / 4);
    case "monthly":
      return floorValue(dividend / 12);
    case "annual":
    default:
      return floorValue(dividend);
  }
}

const floorValue = (v: number) => Math.floor(v);
