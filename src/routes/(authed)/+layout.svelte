<script lang="ts">
	import AppSidebar from '$lib/components/modules/sidebar/app-sidebar.svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import SidebarUserlist from '$lib/components/modules/sidebar/sidebar-userlist.svelte';
	let { children } = $props();
	let sidebarRef = $state(null);
	let activeUser: { name: string; email: string; avatar: string } | null = $state(null);
</script>

<Sidebar.Provider style="--sidebar-width: 350px;">
	<AppSidebar bind:ref={sidebarRef} bind:activeUser />
	<Sidebar.Inset>
		<SidebarUserlist bind:activeUser />
		<div class="flex flex-1 flex-col gap-4 p-4">
			{@render children()}
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
