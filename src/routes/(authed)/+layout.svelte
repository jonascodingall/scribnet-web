<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import AppSidebar from '$lib/components/modules/sidebar/app-sidebar.svelte';
	import SidebarHeader from '$lib/components/modules/sidebar/sidebar-header.svelte';
	let { children } = $props();
	let sidebarRef = $state(null);
</script>

<Sidebar.Provider style="--sidebar-width: 350px;">
	<AppSidebar bind:ref={sidebarRef} />
	<Sidebar.Inset>
		<div class="flex h-screen">
			<div class="flex flex-1 flex-col">
				<header>
					<SidebarHeader />
				</header>
				<main class="flex flex-1 flex-col overflow-hidden">
					{@render children()}
				</main>
			</div>
		</div>
	</Sidebar.Inset>
</Sidebar.Provider>
