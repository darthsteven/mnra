<script>
    export let data;
</script>

<div class="mx-auto py-8 px-2 print:py-0 px-0 sm:max-w-3xl print:max-w-none">
<h1 class="text-center font-bold text-3xl mb-4 print:hidden">MOUNT NOD RESIDENTS’ ASSOCIATION</h1>
<a name="equipment">
    <h2 class="text-center font-bold text-lg mb-1">EQUIPMENT LIST<span class="hidden print:inline">&nbsp;&mdash;&nbsp;please keep this safe</span>
    </h2>
</a>
<p class="text-center mb-1">Available for use by all members free of charge on the Mount Nod Estate only</p>
<p class="text-center mb-3">The number denotes the custodian for the item. These are listed on your membership
    card.</p>

<div class="grid sm:grid-cols-2 print:grid-cols-2 gap-4 px-4 mx-auto max-w-sm sm:max-w-full print:max-w-none">

        {#each data.categorizedEquipment as cat}
        <table class="equipment">
            <caption>{cat.category}</caption>
            {#each cat.items as item}
            <tr>
                <!-- If there's a non-blank description show a link -->
                {#if item.description}
                <td><a href={"/list/" + item.slug}>{item.title}</a>
            </td>
            {/if}
            {#if !item.description}
            <td>{item.title}</td>
            {/if}
            <td>{item.custodians}</td>
        </tr>
        {/each}
    </table>
    {/each}

</div>
        </div>