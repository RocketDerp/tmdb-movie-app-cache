<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="text-skin-base mb-16 text-center ">
	<h1>{$page.status}: {$page.error?.message}</h1>
	<h2>Oops</h2>

	<a href="/">Return to the home screen</a>
</div>
