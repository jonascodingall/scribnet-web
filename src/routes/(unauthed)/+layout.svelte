<script lang="ts">
	let { children } = $props();
</script>

<div class="flex h-screen items-center justify-center">
	{@render children()}
</div>
