import { ModeToggle } from "./mode-toggle";

export function Header() {
	return (
		<header className="flex items-center justify-between">
			<div>
				<h1 className="font-bold text-3xl -tracking-wide">theusers</h1>
				<small className="text-muted-foreground">Gerencie seus usuários</small>
			</div>

			<ModeToggle />
		</header>
	);
}
