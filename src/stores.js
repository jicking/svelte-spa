import { writable } from 'svelte/store';


// define store, will get initial val from local if it exists
export const count = writable(Number(localStorage.getItem('count')) || 0);

// subscribe to save val to local storage
count.subscribe((val) => localStorage.setItem('count', val));
