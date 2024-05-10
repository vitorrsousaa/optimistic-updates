import { delay } from "@/utils/delay";
import type { IUser } from "../types/IUser";

type IUpdateUserDTO = Partial<Omit<IUser, "image">> & { id: string };

export async function updateUser(updateInput: IUpdateUserDTO) {
	const { name, username, blocked, id } = updateInput;
	const response = await fetch(`http://localhost:3001/users/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name,
			username,
			blocked,
			image: "https://i.pravatar.cc/300",
		}),
	});
	const body = await response.json();

	await delay();

	return body as IUser;
}
