import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import { Switch } from "@/ui/switch";

const users = [
	{
		id: Math.random(),
		name: "John Doe",
		username: "johndoe",
		image: "https://github.com/shadcn.png",
	},
	{
		id: Math.random(),
		name: "John Doe",
		username: "johndoe",
		image: "https://github.com/shadcn.png",
	},
];

export function UsersList() {
	return (
		<div className="space-y-4">
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

					<Switch />
				</div>
			))}
		</div>
	);
}
