import { useCreateUser } from "@/hooks/useCreateUser";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { useState } from "react";
import { toast } from "sonner";

export function UserForm() {
	const [name, setName] = useState("");
	const [username, setUsername] = useState("");

	const { createUser } = useCreateUser();

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();

		try {
			setName("");
			setUsername("");

			await createUser({ name, username, blocked: false });
			toast.success("Usuário criado com sucesso");
		} catch (e) {
			console.error(e);
			toast.error("Erro ao criar usuário");
		}
	}

	return (
		<form className="bg-muted/50 p-4 rounded-md" onSubmit={handleSubmit}>
			<div className="flex gap-2">
				<Input
					type="text"
					placeholder="Name"
					value={name}
					onChange={(event) => setName(event.target.value)}
				/>
				<Input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(event) => setUsername(event.target.value)}
				/>
			</div>
			<Button type="submit" className="mt-2 w-full">
				Cadastrar
			</Button>
		</form>
	);
}
