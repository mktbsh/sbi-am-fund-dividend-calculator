import type { Fund } from "./types";

export const TAX = 0.20315;
export const NO_TAX = 1;

const funds: readonly Fund[] = [
	{
		name: "日本高配当株式（分配）",
		targetArea: "日本",
		assetClass: "株式",
		dividendYield: 0.0403,
	},
	{
		name: "日本国債（分配）",
		targetArea: "日本",
		assetClass: "債券",
		dividendYield: 0.0033,
	},
	{
		name: "J-REIT（分配）ファンド",
		targetArea: "日本",
		assetClass: "国内不動産投資信託",
		dividendYield: 0.0447,
	},
	{
		name: "欧州高配当株式（分配）",
		targetArea: "欧州",
		assetClass: "株式",
		dividendYield: 0.0604,
	},
	{
		name: "SPDR・S&P500高配当株式",
		targetArea: "米国",
		assetClass: "株式",
		dividendYield: 0.045,
	},
	{
		name: "V・米国高配当株式",
		targetArea: "米国",
		assetClass: "株式",
		dividendYield: 0.0283,
	},
	{
		name: "V・米国増配株式",
		targetArea: "米国",
		assetClass: "株式",
		dividendYield: 0.0178,
	},
	{
		name: "iシェアーズ・米国総合債券",
		targetArea: "米国",
		assetClass: "債券",
		dividendYield: 0.0335,
	},
	{
		name: "iシェアーズ・米国投資適格社債（1-5年）",
		targetArea: "米国",
		assetClass: "債券",
		dividendYield: 0.0349,
	},
	{
		name: "iシェアーズ・米国ハイイールド債券",
		targetArea: "米国",
		assetClass: "債券",
		dividendYield: 0.0673,
	},
] as const;

export const data = {
	recordDate: {
		activeFund: "2024-03-29",
		indexFund: "2024-04-01",
	},
	funds,
} as const;
