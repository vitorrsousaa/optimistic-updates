import { useMutation } from "@tanstack/react-query";
import { updateUser } from "../services/updateUser";

export function useUpdateUser() {
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["users"],
		mutationFn: updateUser,
	});

	return {
		updateUser: mutateAsync,
		isLoading: isPending,
	};
}
