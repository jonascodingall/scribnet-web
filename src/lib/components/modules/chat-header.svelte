<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Avatar from '$lib/components/ui/avatar/index.js';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';

	import { selectedUser } from '$lib/stores/userStore';
</script>

<header class="top-0 flex items-center gap-2 border-b bg-background p-4">
	{#if $selectedUser}
		<div class="flex gap-5">
			<Avatar.Root class="h-8 w-8 rounded-lg">
				<Avatar.Image src={$selectedUser.avatar} alt={$selectedUser.name} />
				<Avatar.Fallback class="rounded-lg">CN</Avatar.Fallback>
			</Avatar.Root>
		</div>

		<span class="truncate font-semibold">{$selectedUser.name}</span>
	{:else}
		<div class="flex gap-5">
			<Skeleton class="h-8 w-8 rounded-lg" />
			<Skeleton class="w-[250px]" />
		</div>
	{/if}
</header>
