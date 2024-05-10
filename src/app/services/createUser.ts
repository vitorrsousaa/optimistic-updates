import { delay } from "@/utils/delay";
import type { IUser } from "../types/IUser";

export interface ICreateUserDTO extends Omit<IUser, "id" | "image"> {}

export async function createUsers(createInput: ICreateUserDTO) {
	const { name, username, blocked } = createInput;
	const response = await fetch("http://localhost:3001/users", {
		method: "POST",
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
