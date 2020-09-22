<script>
  import { link } from "svelte-routing";
  export let routes;
  let menu;
  const handlerMenu = () => {
    menu.classList.toggle("hidden");
  };
</script>

<nav
  class="sticky top-0 flex flex-wrap items-center justify-between p-4 bg-black shadow-lg text-whitehunt font-monse">
  <div class="flex items-center flex-shrink-0 mr-6 text-white">
    <img src="./imgs/logofull.svg" alt="logo" class="w-12 h-12 mx-2" />
    <span class="text-xl font-bold tracking-tight">ChichoProyects</span>
  </div>
  <div class="block lg:hidden">
    <button
      on:click={handlerMenu}
      class="flex items-center px-3 py-2 text-white transition duration-700 ease-out delay-150 border-none rounded hover:bg-greenHunt-500 focus:bg-greenHunt-500 focus:outline-none">
      <svg
        class="w-3 h-3 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
    </button>
  </div>
  <div
    bind:this={menu}
    class="hidden block w-full text-center lg:flex lg:items-center lg:w-auto">
    <div class="text-lg lg:flex-grow">
      {#each routes as { path, name }}
        <a
          href={path}
          use:link
          class="block mt-4 mr-4 transition duration-700 ease-linear border-b-2 border-transparent lg:inline-block lg:mt-0 hover:border-greenHunt-500 hover:font-semibold">
          {name}
        </a>
      {/each}
    </div>
  </div>
</nav>
