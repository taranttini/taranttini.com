<script>
	import Main from './components/Main.svelte';
	export let menu = [];
	export let pages = [];
	export let data;

	menu = data.menu.main;
	pages = data.pages;
	

  let hide = true;
  const toggle = () => {

    hide = !hide;
  }

</script>

<div class="site">
  <i id="men" class="material-icons" on:click={toggle}>dehaze</i>



  <div class="menu" class:hide={hide}>
    <ul>
      <li class="t">Menu</li>
			{#each menu as item}
				<li class="i">
					<a href="#{item.id}" on:click={(e)=>{toggle();/*checar(e,this, item.id)*/}}>
          <i class="material-icons">{item.icon}</i>{item.title}</a>
      	</li>
			{/each}

    </ul>

  </div>

  <div class="main">

    <header id="navbar">

      <h1>taranttini</h1>
    </header>

    <Main pages={pages} />

    <footer>
      desenvolvido com svelte 3
    </footer>
  </div>
</div>
