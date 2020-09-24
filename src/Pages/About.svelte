<script>
  import Skills from "./../Components/Skills.svelte";
</script>

<main>
  <article class="portada">
    <div class="container p-4 mx-auto text-white">
      <h1
        class="p-2 my-2 text-4xl font-bold tracking-widest text-center md:text-6xl font-monse">
        Sobre Mi
      </h1>
      <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <section class="p-2">
          <h6
            class="p-2 my-2 text-2xl font-bold tracking-widest md:text-3xl font-monse">
            Una breve descripcion...
          </h6>
          <p class="p-2">
            Soy un joven <b>muy responsable</b>, feliz e interesante de conocer.
            Mi mayor caracteristica es mi curiosidad por aprender cosas nuevas y
            eso me dado muchos beneficios. Soy desarrollador web, me fascina la
            programacion y la informatica <b>desde los 16 años</b>. Me encanta
            investigar sobre tecnologias nuevas y todo lo relacionando con el
            internet. Me gusta compartir mis conocimientos enseñando a lo demas
            de esa manera uno repasa indirectamente.
          </p>
        </section>
        <section class="flex items-center p-2">
          <div class="flex flex-col justify-center p-2 text-xl">
            <p>
              <i class="fas fa-user-tie color-principal" aria-hidden="true" />
              <b>Edad Actual :</b>
              <span>{new Date().getFullYear() - 2001}</span>
            </p>
            <p>
              <i
                class="fas fa-map-marked-alt color-principal"
                aria-hidden="true" />
              <b>Ubicación :</b> Lima, Perú
            </p>
            <p>
              <i
                class="fas fa-laptop-code color-principal"
                aria-hidden="true" />
              <b>Stack :</b> Svelte,Mysql,NodeJS,Express
            </p>
            <p>
              <i
                class="fas fa-grin-hearts color-principal"
                aria-hidden="true" />
              <b>Intereses :</b> Programacion,Videojuegos
            </p>
          </div>
        </section>
      </div>
    </div>
  </article>
  <Skills />
</main>
