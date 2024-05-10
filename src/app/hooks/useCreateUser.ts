import { useMutation } from "@tanstack/react-query";
import { createUsers } from "../services/createUser";

export function useCreateUser() {
	const { mutateAsync, isPending } = useMutation({
		mutationKey: ["users"],
		mutationFn: createUsers,
	});

	return {
		createUser: mutateAsync,
		isLoading: isPending,
	};
}
