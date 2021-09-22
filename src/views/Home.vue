<template>
  <div class="home">
    <h2>PRESENTACION</h2>
    <cotizacion />
    <Piedepagina />
    
  </div>
</template>

<script>


import Piedepagina from '@/components/piedepagina.vue'
import Cotizacion from '../components/Cotizacion.vue'

export default {
  name: 'Home',
  components: {
    Piedepagina,
    Cotizacion
  }

}
</script>
