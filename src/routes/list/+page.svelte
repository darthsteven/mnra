<script>
  export let data;
</script>

<h1>Equipment List</h1>

{#each data.categorizedEquipment as cat}
<table class="equipment">
                <caption>{cat.category}</caption>
                {#each cat.items as item}
                <tr>
<!-- If there's a non-blank description show a link -->
                    {#if item.description}
                    <td><a href={"/list/" + item.slug}>{item.title}</a></td>
                    {/if}
{#if !item.description}
                    <td>{item.title}</td>
{/if}
                    <td>{item.custodians}</td>
                </tr>
                {/each}
</table>
{/each}
  

