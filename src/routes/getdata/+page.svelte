<script>
// Sample #1 - EIF
const fetchImage = (async () => {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  return await response.json()
})()

// Sample #2 - 
import { onMount } from "svelte";
let isDataLoaded = false;
let posts = [];
onMount(async function () {
  const endpoint = 'https://jsonplaceholder.typicode.com/posts';
  const response = await fetch(endpoint);
  const data = await response.json();
  console.log(data);
  isDataLoaded = true;
  posts = data.slice(0,5);
});


</script>

<svelte:head>
	<title>Load Data Demo</title>
</svelte:head>

<div>
  <section>
    <h2>Demo 1</h2>
    {#await fetchImage}
      <p>...waiting</p>
    {:then data}
      <img src={data.message} alt="Dog image" />
    {:catch error}
      <p>An error occurred!</p>
    {/await}
  </section>

	<section>
    <h1>List Demo</h1>
    {#if isDataLoaded}
      <p>Items from an API</p>
      <ul style="margin-left: 16px;">
        {#each posts as article}
          <li>{article.title}</li>
        {/each}
      </ul>
    {:else}
      <p>Loading data...</p>
    {/if}
  </section>
</div>
