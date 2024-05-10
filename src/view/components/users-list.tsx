import { CREATE_USER_MUTATION_KEY } from "@/hooks/useCreateUser";
import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useUsers } from "@/hooks/useUsers";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { Skeleton } from "@/ui/skeleton";
import { Switch } from "@/ui/switch";
import { useMutationState } from "@tanstack/react-query";

export function UsersList() {
	const { users, isLoading } = useUsers();

	const { updateUser } = useUpdateUser();

	const pendingMutations = useMutationState({
		filters: {
			status: "pending",
			mutationKey: CREATE_USER_MUTATION_KEY,
		},
		select: (mutate) => mutate.state.variables,
	});

	async function handleBlockedChange(checked: boolean, id: string) {
		await updateUser({ blocked: checked, id });
	}

	return (
		<div className="space-y-4">
			{isLoading && (
				<>
					<Skeleton className="h-[72px] " />
					<Skeleton className="h-[72px] " />
					<Skeleton className="h-[72px] " />
				</>
			)}

			{users.map((user) => (
				<div
					key={user.id}
					className="border p-4 rounded-md flex items-center justify-between"
				>
					<div className="flex items-center gap-4">
						<Avatar>
							<AvatarImage src={user.image} alt={user.name} />
							<AvatarFallback>
								{user.name.charAt(0).toUpperCase()}
							</AvatarFallback>
						</Avatar>

						<div>
							<strong className="text-lg block leading-4">{user.name}</strong>
							<small className="text-muted-foreground">@{user.username}</small>
						</div>
					</div>

					<Switch
						// checked={user.blocked}
						onCheckedChange={(blocked) => handleBlockedChange(blocked, user.id)}
					/>
				</div>
			))}
		</div>
	);
}
