<script>
    import { createButton } from "../core/button";
    import { onMount } from "svelte";
  
    export let text;
    export let onClick;
  
    let container;
  
    onMount(() => {
      container.appendChild(createButton(text, onClick));
    });
  </script>
  
  <div bind:this={container}></div>
  