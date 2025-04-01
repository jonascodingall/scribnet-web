<script lang="ts" module>
	let messages = [
		{
			senderId: 1,
			recieverId: 2,
			text: 'Hallo, wie geht es dir?'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Mir geht es gut, danke! Und dir?'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Mir geht es auch gut, danke!'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Was machst du gerade?'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Ich arbeite an einem Projekt.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das klingt spannend! Was genau machst du?'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Ich entwickle eine Chat-App mit Svelte.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Cool! Erzähl mir mehr darüber.'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		},
		{
			senderId: 1,
			recieverId: 2,
			text: 'Die App hat eine dynamische Benutzeroberfläche und nutzt moderne Features.'
		},
		{
			senderId: 2,
			recieverId: 1,
			text: 'Das hört sich super an. Viel Erfolg bei deinem Projekt!'
		}
	];
</script>

<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Input from '$lib/components/ui/input/input.svelte';
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Send from '@lucide/svelte/icons/send';
</script>

<div class="h-max">
	<ScrollArea class="h-[750px]">
		<div class="flex flex-col gap-5">
			{#each messages as message}
				<span>{message.text}</span>
			{/each}
		</div>
	</ScrollArea>
</div>

<div class="relative">
	<Input class="pr-12" placeholder="Nachricht schreiben..." />
	<Button
		variant="ghost"
		size="icon"
		class="absolute right-2 top-1/2 -translate-y-1/2 transform hover:border-transparent hover:bg-transparent hover:text-current"
	>
		<Send />
	</Button>
</div>
