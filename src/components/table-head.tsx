import { classNames } from "../utils";

const commonStyle = "px-3 py-3.5 text-left text-sm font-semibold text-gray-900";

const headers: [string, string][] = [
	["ファンド名", classNames(commonStyle, "sm:pl-6 lg:pl-8")],
	["対象地域", commonStyle],
	["投資対象", commonStyle],
	["利回り", commonStyle],
	["投資額", commonStyle],
	["分配金/年", commonStyle],
	["分配金/4半期", commonStyle],
];

export function TableHead() {
	return (
		<thead>
			<tr>
				{headers.map(([label, css]) => (
					<th key={label} scope="col" className={css}>
						{label}
					</th>
				))}
			</tr>
		</thead>
	);
}
