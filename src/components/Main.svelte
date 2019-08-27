<script>
  import Widget from "./Widget.svelte";
  import WidgetEmployee from "./WidgetEmployee.svelte";

  export let pages;
</script>

<section>
  {#each pages as page}
    <div class="wrap" id={page.id}>
    <h2>{page.title}</h2>
    {#if page.description}
      <p>{page.description}</p>
    {/if}
    </div>
    <div class="wrap">
      {#each page.items as item}
        {#if item.type && item.type == 'employee'}
          <WidgetEmployee {...item} />
        {:else}
          <Widget {...item} />
        {/if}
      {/each}
    </div>
  {/each}
</section>
