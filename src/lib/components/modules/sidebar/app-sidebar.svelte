<script lang="ts" module>
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import House from '@lucide/svelte/icons/house';

	// This is sample data
	const data = {
		user: {
			name: 'Jonas',
			email: 'jonas.coding.all@gmail.com',
			avatar: 'https://avatar.iran.liara.run/public/48'
		},
		users: [
			{
				name: 'VI',
				email: 'troungvinygiyen@gmail.com',
				avatar: 'https://avatar.iran.liara.run/public/47',
				isActive: false
			},
			{
				name: 'Ahmed',
				email: 'ahmed@gmail.com',
				avatar: 'https://avatar.iran.liara.run/public/46',
				isActive: false
			},
			{
				name: 'Matthew',
				email: 'matthew@gmail.com',
				avatar: 'https://avatar.iran.liara.run/public/45',
				isActive: false
			}
		],
		navMain: [
			{
				title: 'Home',
				url: '/home',
				icon: House,
				isActive: true
			},
			{
				title: 'Chats',
				url: '/chats',
				icon: MessageCircle,
				isActive: false
			}
		]
	};
</script>

<script lang="ts">
	import NavUser from '$lib/components/modules/sidebar/nav-user.svelte';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import Command from '@lucide/svelte/icons/command';
	import type { ComponentProps } from 'svelte';
	import { goto } from '$app/navigation';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import { Button } from '$lib/components/ui/button';

	let { ref = $bindable(null), activeUser = $bindable(null), ...restProps } = $props();

	let activeItem = $state(data.navMain[0]);
	let sidebar = Sidebar.useSidebar();
	activeUser = data.users[1];
</script>

<Sidebar.Root
	bind:ref
	collapsible="icon"
	class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row"
	{...restProps}
>
	<!-- This is the first sidebar -->
	<!-- We disable collapsible and adjust width to icon. -->
	<!-- This will make the sidebar appear as icons. -->
	<Sidebar.Root collapsible="none" class="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r">
		<Sidebar.Header>
			<Sidebar.Menu>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton size="lg" class="md:h-8 md:p-0">
						{#snippet child({ props })}
							<a href="##" {...props}>
								<div
									class="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
								>
									<Command class="size-4" />
								</div>
								<div class="grid flex-1 text-left text-sm leading-tight">
									<span class="truncate font-semibold">Acme Inc</span>
									<span class="truncate text-xs">Enterprise</span>
								</div>
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group>
				<Sidebar.GroupContent class="px-1.5 md:px-0">
					<Sidebar.Menu>
						{#each data.navMain as item (item.title)}
							<Sidebar.MenuItem>
								<Sidebar.MenuButton
									tooltipContentProps={{
										hidden: false
									}}
									onclick={() => {
										activeItem = item;
										sidebar.setOpen(true);
										goto(item.url, { replaceState: true });
									}}
									isActive={activeItem.title === item.title}
									class="px-2.5 md:px-2"
								>
									{#snippet tooltipContent()}
										{item.title}
									{/snippet}
									<item.icon />
									<span>{item.title}</span>
								</Sidebar.MenuButton>
							</Sidebar.MenuItem>
						{/each}
					</Sidebar.Menu>
				</Sidebar.GroupContent>
			</Sidebar.Group>
		</Sidebar.Content>
		<Sidebar.Footer>
			<NavUser user={data.user} />
		</Sidebar.Footer>
	</Sidebar.Root>

	<!-- This is the second sidebar -->
	<!-- We disable collapsible and let it fill remaining space -->
	<Sidebar.Root collapsible="none" class="hidden flex-1 md:flex">
		<Sidebar.Header class="gap-3.5 border-b p-4">
			<div class="flex w-full items-center justify-between">
				<div class="text-base font-medium text-foreground">
					{activeItem.title}
				</div>
			</div>
			<Sidebar.Input placeholder="Type to search..." />
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Group class="px-0">
				<Sidebar.GroupContent>
					{#each data.users as user}
						<Button
							variant="ghost"
							class="flex w-full justify-start px-5 py-10"
							onclick={() => (activeUser = user)}
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
</Sidebar.Root>
