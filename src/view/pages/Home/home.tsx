import viteLogo from "/vite.svg";

export function Home() {
	return (
		<div className="flex flex-col items-center justify-center gap-4">
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="flex flex-col items-center">
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="uppercase font-bold">toast</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}
