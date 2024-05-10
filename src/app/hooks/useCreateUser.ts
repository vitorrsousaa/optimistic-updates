import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "../services/createUser";
import { USE_QUERY_KEY_USERS } from "./useUsers";

export const CREATE_USER_MUTATION_KEY = ["users"];

export function useCreateUser() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationKey: [CREATE_USER_MUTATION_KEY],
		mutationFn: createUsers,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [USE_QUERY_KEY_USERS],
			});
		},
	});

	return {
		createUser: mutateAsync,
		isLoading: isPending,
	};
}
