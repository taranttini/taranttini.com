<script>
  export let title, grade;
</script>

<div class="widget small">
  <div class="content">
    <p>
      {title}
      {#each { length: 5 } as _, i}
        {#if i < grade}
          <i class="material-icons">star</i>
        {:else}
          <i class="material-icons">star_outline</i>
        {/if}
      {/each}
    </p>
  </div>
</div>
