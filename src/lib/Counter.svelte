<script>
	import { count } from '../stores.js';
	let countValue;

	count.subscribe(value => {
		countValue = value;
	});
	function incrementCount(){
		count.update(n => n + 1);
	}
</script>

<div class="counter">
	<button on:click={incrementCount} class="counter-btn">
		Count: {countValue}
	</button>
</div>

<style>
	.counter {
		margin: 8px 0;
	}
	.counter-btn {
		padding: 8px;
	}
</style>