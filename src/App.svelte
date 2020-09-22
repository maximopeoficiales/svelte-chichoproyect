<script>
  import { Router, Route } from "svelte-routing";
  import Navbar from "./Components/Navbar.svelte";
  import Index from "./Pages/Index.svelte";
  import Proyects from "./Pages/Proyects.svelte";
  let routes = [
    {
      path: "./",
      name: "Inicio",
      component: Index,
    },
    {
      path: "./proyectos",
      name: "Proyectos",
      component: Proyects,
    },
  ];
</script>

<style global>
  @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100;200;300;400;500;600;700;800;900&display=swap");
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */
  @tailwind utilities;
  /* podemos junstar clases para crear componentes */
  .btn {
    @apply px-4 py-2 my-2 text-lg transition duration-700 ease-out delay-150 border-none rounded text-white;
  }

  .btn-black {
    @apply bg-blankHunt-500;
  }

  .btn-black:hover {
    @apply bg-greenHunt-500;
  }
  .btn-black:focus {
    @apply outline-none bg-greenHunt-500 shadow-outline;
  }

  a:hover {
    text-decoration: none;
  }
  a {
    text-decoration: none;
  }
  a:visited {
    color: white;
  }
</style>

<Router>
  <div class="">
    <Navbar {routes} />
    {#each routes as { path, name, component }}
      <Route {path} {component} />
    {/each}
  </div>
</Router>
