import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/updateUser";
import type { IUser } from "../types/IUser";
import { USE_QUERY_KEY_USERS } from "./useUsers";

export function useUpdateUser() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["users"],
		mutationFn: updateUser,
		onMutate: async (variables) => {
			// snapshot the previous value
			const previousUsers =
				queryClient.getQueryData<IUser[]>(USE_QUERY_KEY_USERS);

			queryClient.setQueryData<IUser[]>(USE_QUERY_KEY_USERS, (old) =>
				old?.map((user) =>
					user.id === variables.id ? { ...user, ...variables } : user,
				),
			);

			return { previousUsers };
		},
		// Rollback
		onError: async (_error, _variables, context) => {
			await queryClient.cancelQueries({ queryKey: USE_QUERY_KEY_USERS });

			queryClient.setQueryData<IUser[]>(
				USE_QUERY_KEY_USERS,
				context?.previousUsers,
			);
		},
	});

	return {
		updateUser: mutateAsync,
		isLoading: isPending,
	};
}
