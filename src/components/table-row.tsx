import { useState } from "react";
import { calcDividend } from "../lib";
import { Fund } from "../types";

type Props = {
  fund: Fund;
};

export function TableRow({ fund }: Props) {
  const [amount, setAmount] = useState(0);

  const annualDividend = calcDividend({
    amount,
    dividendYield: fund.dividendYield,
    isAfterTax: false,
    type: "annual",
  });
  const quarterDividend = calcDividend({
    amount,
    dividendYield: fund.dividendYield,
    isAfterTax: false,
    type: "quarter",
  });

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8">
        {fund.name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {fund.targetArea}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {fund.assetClass}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {(fund.dividendYield * 100).toFixed(2)}%
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">¥</span>
          </div>
          <input
            type="number"
            name="price"
            id="price"
            className="block rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="100"
            aria-describedby="price-currency"
            onChange={(e) => {
              setAmount(parseInt(e.currentTarget.value));
            }}
            min={0}
          />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">¥</span>
          </div>
          <input
            type="number"
            className="block rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            aria-describedby="price-currency"
            value={annualDividend}
            lang="ja"
          />
        </div>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">¥</span>
          </div>
          <input
            type="number"
            className="block rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            aria-describedby="price-currency"
            value={quarterDividend}
            lang="ja"
          />
        </div>
      </td>
    </tr>
  );
}
