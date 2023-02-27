<script>
	let count = 0;
	function incrementCount(){
		count += 1;
	}
</script>

<div class="counter">
	<button on:click={incrementCount} class="counter-btn">
		Count: {count}
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