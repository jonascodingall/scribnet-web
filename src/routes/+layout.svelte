<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { toggleMode } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
<Button onclick={toggleMode}>Toggle Mode</Button>
<div class="flex h-screen items-center justify-center">
	{@render children()}
</div>
