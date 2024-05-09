import { Button } from "@/ui/button";
import { Input } from "@/ui/input";

export function UserForm() {
	return (
		<form className="bg-muted/50 p-4 rounded-md">
			<div className="flex gap-2">
				<Input type="text" placeholder="Name" />
				<Input type="text" placeholder="Username" />
			</div>
			<Button type="submit" className="mt-2 w-full">
				Cadastrar
			</Button>
		</form>
	);
}
