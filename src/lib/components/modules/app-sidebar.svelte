<script lang="ts">
	import House from '@lucide/svelte/icons/house';
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import NavUser from './nav-user.svelte';

	const data = {
		user: {
			name: 'Jonas',
			email: 'jonas.coding.all@gmail.com',
			avatar: 'https://avatar.iran.liara.run/public/15'
		},
		items: [
			{
				title: 'Home',
				url: '/home',
				icon: House
			},
			{
				title: 'Chats',
				url: '/chats',
				icon: MessageCircle
			}
		]
	};
</script>

<Sidebar.Root collapsible="icon">
	<Sidebar.Header>
		<NavUser user={data.user} />
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupLabel>ScribNET</Sidebar.GroupLabel>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each data.items as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton>
								{#snippet child({ props })}
									<a href={item.url} {...props}>
										<item.icon />
										<span>{item.title}</span>
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.GroupContent>
		</Sidebar.Group>
	</Sidebar.Content>
</Sidebar.Root>
