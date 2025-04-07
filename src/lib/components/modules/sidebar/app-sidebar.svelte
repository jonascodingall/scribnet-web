<script lang="ts" module>
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import House from '@lucide/svelte/icons/house';

	const data = {
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
	import { Button } from '$lib/components/ui/button';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Command from '@lucide/svelte/icons/command';

	import { goto } from '$app/navigation';
	import { allUsers, authUser, selectedUser } from '$lib/stores/userStore';
	import UserSidebar from './user-sidebar.svelte';
	import IconSidebar from './icon-sidebar.svelte';

	let activeItem = $state(data.navMain[0]);
</script>

<Sidebar.Root collapsible="icon" class="overflow-hidden [&>[data-sidebar=sidebar]]:flex-row">
	<IconSidebar {data} />
	<UserSidebar {data} />
</Sidebar.Root>
