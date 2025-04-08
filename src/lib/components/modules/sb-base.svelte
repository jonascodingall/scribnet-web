<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { authUser } from '$lib/stores/userStore.js';
	import { goto } from '$app/navigation';
	import SidebarUserMenu from '$lib/components/modules/sidebar-user-menu.svelte';
	let { data, activeItem = $bindable(), sidebarTwoRef = $bindable(), ...restProps } = $props();
</script>

<Sidebar.Root collapsible="none" class="!w-[calc(var(--sidebar-width-icon)_+_1px)] border-r">
	<Sidebar.Content>
		<Sidebar.Group>
			<Sidebar.GroupContent>
				<Sidebar.Menu>
					{#each data.navMain as item (item.title)}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								tooltipContentProps={{
									hidden: false
								}}
								onclick={() => {
									activeItem = item;
									goto(item.url, { replaceState: true });
								}}
								isActive={activeItem.title === item.title}
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
		<SidebarUserMenu user={$authUser} />
	</Sidebar.Footer>
</Sidebar.Root>
