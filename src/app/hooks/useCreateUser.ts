import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUsers } from "../services/createUser";
import { USE_QUERY_KEY_USERS, type UsersQueryData } from "./useUsers";

export function useCreateUser() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationFn: createUsers,
		onMutate: (variables) => {
			console.log("onmutate", variables);

			const tempId = Math.random().toString(36).substr(2, 9);
			queryClient.setQueryData<UsersQueryData>(USE_QUERY_KEY_USERS, (old) =>
				old?.concat({
					...variables,
					id: tempId,
					image: "https://github.com/shadcn.png",
					status: "pending",
				}),
			);

			return { tempId };
		},
		onSuccess: async (data, _, context) => {
			await queryClient.cancelQueries({ queryKey: USE_QUERY_KEY_USERS });

			queryClient.setQueryData<UsersQueryData>(USE_QUERY_KEY_USERS, (old) =>
				old?.map((user) => (user.id === context.tempId ? data : user)),
			);
		},

		// Rollback
		onError: async (_error, _, context) => {
			await queryClient.cancelQueries({ queryKey: USE_QUERY_KEY_USERS });

			queryClient.setQueryData<UsersQueryData>(USE_QUERY_KEY_USERS, (old) =>
				old?.map((user) =>
					user.id === context?.tempId ? { ...user, status: "error" } : user,
				),
			);
		},
	});

	return {
		createUser: mutateAsync,
		isLoading: isPending,
	};
}
