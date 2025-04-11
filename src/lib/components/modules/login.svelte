<script lang="ts">
	import { Button, buttonVariants } from '$lib/components/ui/button/';
	import * as Card from '$lib/components/ui/card';
	import Input from '$lib/components/ui/input/input.svelte';
	import Label from '$lib/components/ui/label/label.svelte';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import * as InputOTP from '$lib/components/ui/input-otp/index.js';
	let inputValue = '';
	function idkPasswort() {}
</script>

<div class="flex flex-col gap-6">
	<Card.Root>
		<Card.Header>
			<Card.Title class="text-2xl">Anmelden</Card.Title>
			<Card.Description>Geben Sie ihre Email unten an um sich anzumelden</Card.Description>
		</Card.Header>
		<Card.Content>
			<form>
				<div class="flex flex-col gap-6">
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input
							id="email"
							name="email"
							type="email"
							placeholder="m@example.com"
							bind:value={inputValue}
						/>
					</div>
					<div class="grid gap-2">
						<Label for="password">Passwort</Label>
						<Input id="password" name="password" type="password" />
					</div>
					<Dialog.Root>
						<Dialog.Trigger class="text-2xm underline">Passwort vergessen?</Dialog.Trigger>
						<Dialog.Content class="sm:max-w-[425px]">
							<Dialog.Header>
								<Dialog.Title>Sicherheitscode wird gesendet</Dialog.Title>
								<Dialog.Description>Es wird ein Code zu {inputValue} gesendet</Dialog.Description>
							</Dialog.Header>
							<div class="grid gap-4 py-4">
								<InputOTP.Root maxlength={8}>
									{#snippet children({ cells })}
										<InputOTP.Group>
											{#each cells.slice(0, 4) as cell (cell)}
												<InputOTP.Slot {cell} />
											{/each}
										</InputOTP.Group>
										<InputOTP.Separator />
										<InputOTP.Group>
											{#each cells.slice(4, 8) as cell (cell)}
												<InputOTP.Slot {cell} />
											{/each}
										</InputOTP.Group>
									{/snippet}
								</InputOTP.Root>
							</div>
							<Dialog.Footer>
								<Button type="submit">Save changes</Button>
							</Dialog.Footer>
						</Dialog.Content>
					</Dialog.Root>
					<Button type="submit" class="w-full">Anmelden</Button>
				</div>
				<div class="flex flex-col">
					<div class="mt-4 text-center text-sm">
						Kein Account?
						<a href="/register" class="underline underline-offset-4">Registrieren</a>
					</div>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
</div>
