<script lang="ts">
    import { createButton } from "../core/button";
    import { onMount } from "svelte";
  
    export let text: string;
    export let onClick: () => void;
  
    let container;
  
    onMount(() => {
      container.appendChild(createButton(text, onClick));
    });
</script>
  
<div bind:this={container}></div>
  