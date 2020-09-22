<script>
  let array = [];
  array.length = 6;
</script>

<style>
</style>

<div class="portada">
  <section class="container p-4 mx-auto text-white font-monse">
    <h1 class="p-2 my-2 text-6xl font-bold tracking-widest text-center">
      Mis Proyectos
    </h1>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      {#each array as a}
        <div class="transition duration-200 ease-out delay-150 card-proyect">
          <div class="shadow-lg card-proyect-content bg-blankHunt-600">
            <img
              class="img-fluid"
              src="./imgs/logofull.svg"
              alt="alt"
              loading="lazy" />
            <div class="card-proyect-hover">
              <a class="card-circle-span" href="/"><i class="fas fa-link" /></a>
            </div>
          </div>
          <div class="text-center card-proyect-name">
            <h4>Sistemas de Ventas Web</h4>
          </div>
        </div>
      {:else}
        <h2>.cargando</h2>
      {/each}
    </div>
  </section>
</div>
