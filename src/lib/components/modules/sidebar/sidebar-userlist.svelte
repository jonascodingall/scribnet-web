<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';

	let { activeUser = $bindable(null), ...restProps } = $props();
</script>

<header class="top-0 flex items-center gap-2 border-b bg-background p-4">
	<Sidebar.Trigger class="-ml-1" />
	<Separator orientation="vertical" class="mr-2 h-4" />
	{#if activeUser}
		<div class="flex gap-5">
			<Avatar.Root class="h-8 w-8 rounded-lg">
				<Avatar.Image src={activeUser.avatar} alt={activeUser.name} />
				<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
			</Avatar.Root>
		</div>

		<span class="truncate font-semibold">{activeUser.name}</span>
	{:else}
		<div class="flex gap-5">
			<Skeleton class="h-8 w-8 rounded-lg" />
			<Skeleton class="w-[250px]" />
		</div>
	{/if}
</header>
