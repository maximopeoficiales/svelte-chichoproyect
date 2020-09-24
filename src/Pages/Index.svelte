<script>
  import { onMount } from "svelte";

  let data = [];

  // onMount(async () => {
  //   data = await (
  //     await fetch("https://api.github.com/users/maximopeoficiales")
  //   ).json();
  //   console.log(data);
  // });
</script>

<style>
</style>

<div class="portada">
  <div class="container p-2 mx-auto">
    <header
      class="flex flex-col items-center justify-center w-full h-screen text-center text-white font-monse">
      <img
        src="./imgs/logofull.svg"
        alt="logo"
        class="w-56 h-56 p-2 my-2 md:w-64 md:h-64" />
      <h1
        class="p-1 my-1 text-4xl font-extrabold tracking-widest md:p-2 md:my-2 md:text-6xl">
        ChichoProyects
      </h1>
      <h2
        class="p-1 my-1 text-3xl font-extrabold tracking-normal md:p-2 md:my-2 md:text-5xl">
        Contruyendo Aplicaciones para un Mundo Inteligente
      </h2>
    </header>
  </div>
</div>
<section class="text-white portada font-monse">
  <div
    class="container flex flex-col items-center justify-between w-full p-2 mx-auto md:flex-row">
    <div class="flex items-center justify-center w-full p-2 md:w-1/2">
      <div class="md:p-0">
        <img
          class="object-cover w-64 h-64 rounded-lg md:w-full md:h-auto "
          src="./imgs/foto2.jpg"
          alt="foto" />
      </div>
    </div>
    <div class="w-full md:w-1/2">
      <div class="flex flex-col justify-center w-auto p-4">
        <h6
          class="text-xl font-medium tracking-wider transition duration-700 ease-out delay-150 border-b-2 border-transparent hover:border-greenHunt-500">
          Acerca de Mi
        </h6>
        <h4 class="text-4xl font-extrabold">Soy Programador JS</h4>
        <p class="text-xl font-light text-gray-200 font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          consequatur repudiandae ab fuga saepe dicta in nihil incidunt sint,
          provident nisi id aut itaque quis! Voluptatibus atque ea porro
          dignissimos?
        </p>
      </div>
      <div class="p-4"><button class="btn btn-black font-montserrat">Conoceme</button></div>
    </div>
  </div>
</section>
