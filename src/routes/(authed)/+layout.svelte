<script lang="ts" module>
	import MessageCircle from '@lucide/svelte/icons/message-circle';
	import House from '@lucide/svelte/icons/house';

	const data = {
		navMain: [
			{
				title: 'Home',
				url: '/home',
				icon: House,
				sidebar: null,
				isActive: true
			},
			{
				title: 'Chats',
				url: '/chats',
				icon: MessageCircle,
				sidebar: SbChats,
				isActive: false
			}
		]
	};
</script>

<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import SbBase from '$lib/components/modules/sb-base.svelte';
	import SbChats from '$lib/components/modules/sb-chats.svelte';
	let { children } = $props();

	let activeItem = $state(data.navMain[1]);
</script>

<Sidebar.Provider
	style="--sidebar-width: {activeItem.sidebar ? '350px' : '0px'};"
	class="transition-all"
>
	<Sidebar.Root collapsible="icon" class="[&>[data-sidebar=sidebar]]:flex-row">
		<SbBase {data} bind:activeItem />
		{#if activeItem.sidebar}
			<activeItem.sidebar />
		{/if}
	</Sidebar.Root>
	<Sidebar.Inset>
		{@render children()}
	</Sidebar.Inset>
</Sidebar.Provider>
