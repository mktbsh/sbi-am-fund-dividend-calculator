import { TableHead } from "./components/table-head";
import { TableRow } from "./components/table-row";
import { data } from "./data";

function App() {
	return (
		<div className="p-4 sm:px-6 lg:px-8">
			<div className="sm:flex sm:items-center">
				<div className="sm:flex-auto">
					<h1 className="text-base font-semibold leading-6 text-gray-900">
						SBI 年4回決算ファンド分配金計算
					</h1>
					<p className="mt-2 text-sm text-gray-700">
						SBIアセットマネジメント株式会社が設定・運用する年4回決算ファンドの分配金計算用ツール
					</p>
				</div>
			</div>
			<div className="mt-8 flow-root">
				<div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle">
						<table className="min-w-full divide-y divide-gray-300">
							<TableHead />
							<tbody className="divide-y divide-gray-200 bg-white">
								{data.funds.map((fund) => (
									<TableRow key={fund.name} fund={fund} />
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
