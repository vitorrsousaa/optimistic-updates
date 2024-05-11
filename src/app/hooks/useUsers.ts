import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/getUsers";
import type { IUser } from "../types/IUser";
import type { WithStatus } from "../types/utils";

export const USE_QUERY_KEY_USERS = ["users"];

export type UsersQueryData = WithStatus<IUser>[];

export function useUsers() {
	const { data, isLoading } = useQuery({
		staleTime: Number.POSITIVE_INFINITY,
		queryKey: USE_QUERY_KEY_USERS,
		queryFn: async () => {
			const response = await getUsers();

			return response as WithStatus<IUser>[];
		},
	});

	return {
		users: data || [],
		isLoading,
	};
}
