<script>
	import MessageCard from '$lib/components/modules/messageCard.svelte';
	import { Input } from '$lib/components/ui/input';
	import { ScrollArea } from '$lib/components/ui/scroll-area/index.js';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import ChatHeader from '$lib/components/modules/chat-header.svelte';
	import { userMessages } from '$lib/stores/chatStore';
	import { authUser } from '$lib/stores/userStore';
</script>

<div class="flex h-screen">
	<div class="flex flex-1 flex-col">
		<header>
			<ChatHeader />
		</header>

		<main class="flex flex-1 flex-col overflow-hidden">
			<ScrollArea class="flex-1 p-4">
				<div class="flex flex-col space-y-4">
					{#each $userMessages.messages as message}
						<div class="flex {$authUser.id === message.senderId ? 'justify-end' : 'justify-start'}">
							<MessageCard recieved={$authUser.id === message.recieverId} {message} />
						</div>
					{/each}
				</div>
			</ScrollArea>

			<Separator />

			<div class="p-4">
				<Input type="text" placeholder="Nachricht eingeben..." class="w-full" />
			</div>
		</main>
	</div>
</div>
