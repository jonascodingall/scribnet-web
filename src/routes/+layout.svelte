<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	let { children } = $props();
</script>

<ModeWatcher />
{@render children()}
