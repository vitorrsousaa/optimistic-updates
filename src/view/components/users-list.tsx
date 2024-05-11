import { useUpdateUser } from "@/hooks/useUpdateUser";
import { useUsers } from "@/hooks/useUsers";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { Skeleton } from "@/ui/skeleton";
import { Switch } from "@/ui/switch";
import { cn } from "@/utils/cn";
import { toast } from "sonner";

export function UsersList() {
	const { users, isLoading } = useUsers();

	const { updateUser } = useUpdateUser();

	async function handleBlockedChange(checked: boolean, id: string) {
		try {
			await updateUser({ blocked: checked, id });
		} catch {
			toast.error("Erro ao atualizar usuário");
		}
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
					className={cn(
						"border p-4 rounded-md flex items-center justify-between",
						user.status === "pending" && "opacity-50",
						user.status === "error" && "border-destructive bg-destructive/10",
					)}
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
						checked={user.blocked}
						onCheckedChange={(blocked) => handleBlockedChange(blocked, user.id)}
						disabled={user.status === "pending" || user.status === "error"}
					/>
				</div>
			))}
		</div>
	);
}
