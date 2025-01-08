export type Fund = {
	name: string;
	launchDate?: string;
	targetArea: "日本" | "米国" | "欧州";
	assetClass: "株式" | "債券" | "国内不動産投資信託";
	// accountingPeriod: string[];
	mainAssetClass?: string;
	commissionRate?: number;
	dividendYield: number;
};
