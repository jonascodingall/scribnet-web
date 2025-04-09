<script lang="ts">
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button } from '$lib/components/ui/button';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { allUsers, selectedUser } from '$lib/stores/userStore';

	let { sidebarTwoRef = $bindable() } = $props();
</script>

<Sidebar.Root collapsible="none" class="hidden flex-1 md:flex">
	<Sidebar.Header class="border-b p-5">
		<span>Chats</span>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group class="px-0">
			<Sidebar.GroupContent>
				{#each $allUsers as user}
					<Button
						variant="ghost"
						class="flex w-full justify-start px-5 py-10"
						onclick={() => {
							$selectedUser = user;
						}}
					>
						<Avatar.Root class="h-12 w-12 rounded-lg">
							<Avatar.Image src={user.avatar} alt={user.name} />
							<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
						</Avatar.Root>
						<div class="flex flex-col items-start">
							<span>{user.name}</span>
							<span class="text-xs">{user.email}</span>
						</div>
					</Button>
				{/each}
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
