<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
</script>

<div class="flex flex-col gap-6">
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-2xl">Registrieren</Card.Title>
			<Card.Description>Geben Sie ihre Email unten an um sich Registrieren</Card.Description>
		</Card.Header>
		<Card.Content>
			<form method="POST">
				<div class="flex flex-col gap-6">
					<div class="grid gap-2">
						<Label for="name">Name</Label>
						<Input id="name" name="name" placeholder="m.musterman" />
					</div>
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input id="email" name="email" type="email" placeholder="m@example.com" />
					</div>
					<div class="grid gap-2">
						<Label for="password">Passwort</Label>
						<Input id="password" name="password" type="password" />
					</div>
					<div class="grid gap-2">
						<Label for="passwordConfirm">Passwort Bestätigen</Label>
						<Input id="passwordConfirm" name="passwordConfirm" type="password" />
					</div>
					<Button type="submit" class="w-full">Registrieren</Button>
					<div class="mt-4 text-center text-sm">
						Schon ein Account?
						<a href="/login" class="underline underline-offset-4">Anmelden</a>
					</div>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
</div>
