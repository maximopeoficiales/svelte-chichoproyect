<script>
  import Skill from "./Skill.svelte";
  let level = [
    {
      short: "E",
      color: "bg-purple-600",
    },
    {
      short: "A",
      color: "bg-blue-500",
    },
    {
      short: "I",
      color: "bg-green-400",
    },
    {
      short: "F",
      color: "bg-greenHunt-500",
    },
  ];
  const getLevel = (short) =>
    level.filter((e) => e.short == short.toUpperCase())[0];
  let lenguajes = [
    {
      name: "JAVASCRIPT",
      ...getLevel("a"),
    },
    { name: "PHP", ...getLevel("i") },
    { name: "CSS", ...getLevel("i") },
    { name: "HTML", ...getLevel("i") },
  ];
  let frameworks = [
    { name: "Laravel", ...getLevel("i") },
    { name: "Svelte", ...getLevel("i") },
    { name: "Express", ...getLevel("i") },
    { name: "Electron JS", ...getLevel("f") },
    { name: "Wordpress", ...getLevel("i") },
  ];
  let git = [{ name: "Git", ...getLevel("i") }];
  let habilidades = [
    "Autodidacta",
    "Diseños Responsivos",
    "Trabajo en Equipo",
    "Responsibilidad",
    "Analisis de Problemas",
    "Comprension de Codigo Ajeno",
    "Pasion Proactiva",
  ];
  let bds = [
    { name: "Mysql", ...getLevel("a") },
    { name: "MariaDB", ...getLevel("a") },
    { name: "MongoDB", ...getLevel("i") },
    { name: "Sql Server", ...getLevel("i") },
  ];
  let sos = [
    { name: "Windows", ...getLevel("a") },
    { name: "Linux", ...getLevel("i") },
  ];
</script>

<main class="portada">
  <div class="container p-4 mx-auto text-white">
    <h1
      class="p-2 my-2 text-4xl font-bold tracking-widest text-center md:text-6xl
        font-monse">
      Mis Conocimientos
    </h1>
    <div class="flex items-center justify-center">
      <p class="p-1 mx-0 text-xs sm:mx-1 sm:text-base">
        <span
          class="px-1 m-0 text-xs font-semibold bg-purple-600 rounded-full
            sm:font-bold sm:px-2 sm:py-1 sm:m-1">E</span> Experto
      </p>
      <p class="p-1 mx-0 text-xs sm:mx-1 sm:text-base">
        <span
          class="px-1 m-0 text-xs font-semibold bg-blue-500 rounded-full
            sm:font-bold sm:px-2 sm:py-1 sm:m-1">A</span> Avanzado
      </p>
      <p class="p-1 mx-0 text-xs sm:mx-1 sm:text-base">
        <span
          class="px-1 m-0 text-xs font-semibold bg-green-400 rounded-full
            sm:font-bold sm:px-2 sm:py-1 sm:m-1">I</span> Intermedio
      </p>
      <p class="p-1 mx-0 text-xs sm:mx-1 sm:text-base">
        <span
          class="px-1 m-0 text-xs font-semibold rounded-full sm:font-bold
            sm:px-2 sm:py-1 sm:m-1 bg-greenHunt-500">F</span> Fundamentos
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Skill title="Lenguajes" data={lenguajes} icon="fas fa-code" />
      <Skill
        title="Frameworks & CMS"
        data={frameworks}
        icon="fas fa-laptop-code" />
      <Skill title="Control de Versiones" data={git} icon="fab fa-git-alt" />
      <Skill title="Base de Datos" data={bds} icon="fas fa-database" />
      <Skill title="Sistema Operativos" data={sos} icon="fas fa-terminal" />
      <Skill
        title="Habilidades"
        data={habilidades}
        icon="far fa-lightbulb"
        list={true} />
    </div>
  </div>
</main>
