<script>
	import Header from '../lib/Header.svelte';
	import './styles.css';
</script>

<div class="page-root app">
	<Header />
	<main>
		<slot />
	</main>
	<footer>@Footer</footer>
</div>

<style></style>
