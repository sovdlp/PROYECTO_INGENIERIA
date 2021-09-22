<template>
  <div>
    <div class="items">
      <div v-for="items in items" :key="items.item">
        <p>
          {{ items.item }}-{{ items.descripcion }}-{{ items.unidad }}-{{
            items.cantidad
          }}-{{ items.valorunit }}-{{ items.valortotal }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store/tbl_items.js";

export default {
  data() {
    return {
      items: store.items,
    };
  },
};
</script>

