<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import AppSidebar from '$lib/components/modules/sidebar/app-sidebar.svelte';
	import NavUser from '$lib/components/modules/sidebar/nav-user.svelte';
	import SidebarUserlist from '$lib/components/modules/sidebar/sidebar-userlist.svelte';
	let { children } = $props();
	let sidebarRef = $state(null);
	let activeUser: { name: string; email: string; avatar: string } | null = $state(null);
</script>

<Sidebar.Provider style="--sidebar-width: 350px;">
	<AppSidebar bind:ref={sidebarRef} bind:activeUser />
	<Sidebar.Inset>
		<div class="flex h-screen">
			<div class="flex flex-1 flex-col">
				<header>
					<SidebarUserlist bind:activeUser />
				</header>
				<main class="flex-1 overflow-hidden">
					{@render children()}
				</main>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
