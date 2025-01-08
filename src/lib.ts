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
}: CalcDividendParams): number {
	const dividend = amount * dividendYield * (isAfterTax ? TAX : NO_TAX);
  const divider = type === "quarter" ? 4 : type === "monthly" ? 12 : 1;
  return floorValue(dividend / divider);
}

const floorValue = (v: number) => Math.floor(v);
