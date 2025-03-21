<script>
  import { page } from '$app/stores';
  import loadEquipment from '$lib/dataLoader.js';
  import sanitizeHtml from 'sanitize-html';

  let equipmentList = [];
  let equipmentItem;
  let sanitizedHtml;

  loadEquipment().then(data => {
    equipmentList = data;
    const slug = $page.params.slug;
    equipmentItem = equipmentList.find(item => item.slug === slug);
    sanitizedHtml = sanitizeHtml(equipmentItem.description, {
      allowedTags: [ 'h2', 'p', 'strong', 'em', 'ul', 'li' ],  // You can customize which tags are allowed
      allowedAttributes: { '*': ['class', 'id'] }  // You can customize which attributes are allowed
    });
  });
</script>

{#if equipmentItem}
  <h1>{equipmentItem.title}</h1>
  <!-- <img src={equipmentItem.image} alt={equipmentItem.title} width="200" /> -->
  {@html sanitizedHtml}
  <p><strong>Category:</strong> {equipmentItem.category}</p>
{/if}
