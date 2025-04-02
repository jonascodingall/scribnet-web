<script lang="ts">
	import type { Message } from '$lib/types/Message';
	import MessageCard from '$lib/components/modules/messageCard.svelte';

	let message: Message = {
		id: 1,
		senderId: 1,
		recieverId: 2,
		content: 'Hello, this is a test message!'
	};
</script>

<div class="flex h-full items-center justify-center">
	<MessageCard recieved={false} {message} />
</div>
