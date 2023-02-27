<script>
import { count } from '../stores.js';

let countValue;
count.subscribe(value => {
  countValue = value;
});
</script>

<div >
	<h2>Count: {countValue}</h2>
</div>