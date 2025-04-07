<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import { authUser } from '$lib/stores/userStore.js';
	import { goto } from '$app/navigation';
	import Command from '@lucide/svelte/icons/command';
	import NavUser from '$lib/components/modules/sidebar/nav-user.svelte';
	let { data, activeItem = $bindable(), ...restProps } = $props();
</script>

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
		<NavUser user={$authUser} />
	</Sidebar.Footer>
</Sidebar.Root>
