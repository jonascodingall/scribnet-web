<script lang="ts">
	import MessageCard from '$lib/components/modules/messageCard.svelte';
	import { Input } from '$lib/components/ui/input';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ChatHeader from '$lib/components/modules/chat-header.svelte';
	import { authUser } from '$lib/stores/userStore';
	import type { PageProps } from './$types';
	import type { Message } from '$lib/types/Message';

	let { data }: PageProps = $props();
	let messages = $state(data.messages);

	let inputMsg = $state('');
	let ref = $state<HTMLDivElement>();

	function addMessage(msg: Message) {
		messages = [...messages, msg];
	}

	function handleInput() {
		if (inputMsg.length < 1) return;
		let message: Message = {
			id: 10,
			senderId: 1,
			recieverId: 2,
			content: inputMsg
		};
		addMessage(message);
		inputMsg = '';
	}

	$effect(() => {
		ref?.scrollIntoView();
		messages;
	});
</script>

<div class="flex h-screen">
	<div class="flex flex-1 flex-col">
		<header>
			<ChatHeader />
		</header>

		<main class="flex flex-1 flex-col overflow-hidden">
			<ScrollArea class="flex-1 p-4">
				<div class="flex flex-col space-y-4">
					{#each messages as message}
						<div class="flex {$authUser.id === message.senderId ? 'justify-end' : 'justify-start'}">
							<MessageCard recieved={$authUser.id === message.recieverId} {message} />
						</div>
					{/each}
					<div bind:this={ref}></div>
				</div>
			</ScrollArea>

			<Separator />
			<div class="p-4">
				<Input
					bind:value={inputMsg}
					type="text"
					placeholder="Nachricht eingeben..."
					class="w-full"
					onkeydown={(e) => {
						if (e.key === 'Enter') handleInput();
					}}
				/>
			</div>
		</main>
	</div>
</div>
