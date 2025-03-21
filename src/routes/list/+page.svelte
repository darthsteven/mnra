<script>
  import loadEquipment from '$lib/dataLoader.js';
  let equipmentList = [];

  loadEquipment().then(data => equipmentList = data);
</script>

<h1>Equipment List</h1>
<table>
  <tr>
    <!-- <th>Image</th> -->
    <th>Title</th>
    <th>Category</th>
  </tr>
  {#each equipmentList as item}
    <tr>
      <!-- <td><img src={item.image} alt={item.title} width="50" /></td> -->
      <td><a href={"/list/" + item.slug}>{item.title}</a></td>
      <td>{item.category}</td>
    </tr>
  {/each}
</table>
