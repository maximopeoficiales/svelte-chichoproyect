<script>
  export let title = "Sin Nombre";
  export let icon = "fas fa-laptop-code";
  export let data = [];
  export let list = false;
</script>

<section class="w-full p-4 font-montserrat">
  <div class="grid grid-cols-2 gap-2">
    <article class="flex flex-col items-center justify-center text-6xl">
      <i class={icon} />
    </article>
    <div class="p-1">
      <h6 class="p-1 my-1 text-xl font-bold">{title}</h6>
      <ul class="p-2 font-light {list && "list-disc"}">
        {#if !list}
          {#each data as l, i}
            <li>
              <span
                class="px-1 m-1 text-xs font-medium {l.color} rounded-full">{l.short}</span>{l.name}
            </li>
          {:else}
            <li>
              <span
                class="px-1 m-1 text-xs font-medium rounded-full bg-greenHunt-500">NaN</span>Undefined
            </li>
          {/each}
        {:else}
          {#each data as l, i}
            <li>{l}</li>
          {/each}
        {/if}
      </ul>
    </div>
  </div>
</section>
