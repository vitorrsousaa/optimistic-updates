import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../services/updateUser";
import { USE_QUERY_KEY_USERS } from "./useUsers";

export function useUpdateUser() {
	const queryClient = useQueryClient();

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["users"],
		mutationFn: updateUser,
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: [USE_QUERY_KEY_USERS],
			});
		},
	});

	return {
		updateUser: mutateAsync,
		isLoading: isPending,
	};
}
