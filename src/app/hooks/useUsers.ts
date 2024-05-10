import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../services/getUsers";

export const USE_QUERY_KEY_USERS = ["users"];

export function useUsers() {
	const { data, isLoading } = useQuery({
		queryKey: [USE_QUERY_KEY_USERS],
		queryFn: getUsers,
		staleTime: Number.POSITIVE_INFINITY,
	});

	return {
		users: data || [],
		isLoading,
	};
}
