<script lang="ts">
	import type { Message } from '$lib/types/Message';
	import * as Card from '$lib/components/ui/card';

	let { message, recieved = false }: { message: Message; recieved: boolean } = $props();

	const backgroundClass = recieved ? 'bg-secondary' : 'bg-green-400';
</script>

<Card.Root class="w-fit rounded-xl">
	<Card.Content class={`rounded-xl p-2 ${backgroundClass}`}>
		{message.content}
	</Card.Content>
</Card.Root>
