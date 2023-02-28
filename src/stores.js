import { writable } from 'svelte/store';

// TODO: move to utils when needed
const getNumberFromStorage = (key) => Number(localStorage.getItem('count') || 0);

// define store, will get initial val from local if it exists
export const count = writable(getNumberFromStorage('count'));

// subscribe to save val to local storage
count.subscribe((val) => localStorage.setItem('count', val));
