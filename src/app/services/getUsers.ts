import { delay } from "@/utils/delay";
import type { IUser } from "../types/IUser";

export async function getUsers() {
	const response = await fetch("http://localhost:3001/users");
	const body = await response.json();

	await delay();

	return body as IUser[];
}
