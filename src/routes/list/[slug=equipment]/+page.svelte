<script>
  export let data;
  // import { page } from '$app/stores';
  // import loadEquipment from '$lib/dataLoader.js';
  import sanitizeHtml from 'sanitize-html';

  const sanitizedHtml = sanitizeHtml(data.item.description, {
    allowedTags: [ 'h2', 'p', 'strong', 'em', 'ul', 'li' ],  // You can customize which tags are allowed
    allowedAttributes: { '*': ['class', 'id'] }  // You can customize which attributes are allowed
  });

  // loadEquipment().then(data => {
  //   equipmentList = data;
  //   const slug = $page.params.slug;
  //   equipmentItem = equipmentList.find(item => item.slug === slug);
    
  // });
</script>

{#if data.item}
  <h1>{data.item.title}</h1>
  <!-- <img src={equipmentItem.image} alt={equipmentItem.title} width="200" /> -->
  {@html sanitizedHtml}
  <p><strong>Category:</strong> {data.item.category}</p>
{/if}
