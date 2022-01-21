<script>
  export let title, ocupation, period, location, techs, client;
</script>

<div class="widget">
  <div class="content">
    <h3>{title}</h3>
    {#if client != null}
      <p><span>CLIENTE</span>{client}</p>
    {/if}
    <p><span>CARGO</span>{ocupation}</p>
    <p><span>PERÍODO</span>{period}</p>
    <p><span>LOCAL</span>{location}</p>
    <hr>
    <p><span class="tech">TECNOLOGIA</span>
      {#each techs as tech}
        <span class="tag">{tech}</span>
      {/each}
    </p>
  </div>
</div>
