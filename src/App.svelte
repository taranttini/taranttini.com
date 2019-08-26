<script>
	import Main from './components/Main.svelte';
	export let name;
	export let menu = [];
	export let pages = [];

	const loadData = async () => {
  let data = await fetch('./data.json');
	data = await data.json();

		menu = data.menu.main;
		pages = data.pages;


		console.log('load' ,menu, pages);
	}

  let hide = true;
  const toggle = () => {
    console.log('xxxx')
    hide = !hide;
  }

  loadData();

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 121 || document.documentElement.scrollTop > 121) {
    document.getElementById("navbar").style.height = "80px";
    document.getElementById("navbar").style.position = "fixed";
    //document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.height = "200px";
    document.getElementById("navbar").style.position = "absolute";
    //document.getElementById("logo").style.fontSize = "35px";
  }
}

const speed = 9;

function goUp(){
	x1=x;

	if (x<x2) {
		x+= speed;

		if(x!=x2) {
		  setTimeout(goUp, 1);
		  window.scrollTo(x2,x);
        }
    }
}
function goDown(){
	x1=x;

	if (x>x2) {
		x-= speed;

  if(x!=x2) {
		setTimeout(goDown, 1);
		window.scrollTo(x2,x);
        }
    }
}
function checar(event, el,t){
//document.body.scrollTop +  document.documentElement.scrollTop;

let dd=document.getElementById("experiencia");
//el.offsetTop;
console.log('s', t, dd, event, el.offsetTop,document.body.scrollTop +  document.documentElement.scrollTop);
return;
/*
	console.log(x,x1,x2)

  	if(x < x2) {
		goUp()
   	} else if (x > x2) {
		goDown();
    }
	else {
		console.log(3);
		x=x1=x2
	}
*/
};
//s()


</script>

<div class="site">
  <i id="men" class="material-icons" on:click={toggle}>dehaze</i>



  <div class="menu" class:hide={hide}>
    <ul>
      <li class="t">Menu</li>
			{#each menu as item}
				<li class="i">
					<i class="material-icons">{item.icon}</i>
					<a href="#{item.id}" on:click={(e)=>{toggle();checar(e,this, item.id)}}>{item.title}</a>
      	</li>
			{/each}

	asssssss
      <li class="i">
        <i class="material-icons">person_pin</i>
        quem sou
      </li>
      <li class="i">
        <i class="material-icons">all_inclusive</i>
        obetivo
      </li>
      <li class="i">
        <i class="material-icons">menu_book</i>
        educacao
      </li>
      <li class="i">
        <i class="material-icons">tune</i>
        habilidades
      </li>
      <li class="i">
        <i class="material-icons">business_center</i>
        empresas
      </li>

      <li class="t">Categorias</li>
      <li class="i">
        <i class="material-icons">movie</i>
        filmes que vi
      </li>
      <li class="i">
        <i class="material-icons">menu_book</i>
        livros que li
      </li>
      <li class="i">
        <i class="material-icons">import_contacts</i>
        cursos que fiz
      </li>
      <li class="i">
        <i class="material-icons">map</i>
        cidades que visitei
      </li>
      <li class="i">
        <i class="material-icons">local_hotel</i>
        hoteis que estive
      </li>
      <li class="i">
        <i class="material-icons">local_library</i>
        menu 4
      </li>
    </ul>

  </div>

  <div class="main">

    <header id="navbar">

      <h1>Taranttini.com</h1>
    </header>

    <Main pages={pages} />
  </div>
</div>
<h1>Hello {name}!</h1>
