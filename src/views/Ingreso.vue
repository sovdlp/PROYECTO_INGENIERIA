<template>
  <div>
    <h1>Problemas</h1>
    <Ingreso />
    <button @click="home"> Home </button>
    <button @click="cuadro"> Cuadro </button>

  </div>
</template>

<script>

import Ingreso from "../components/login.html";

export default {
  name: 'Ingreso',
  components: { 
    Ingreso 
  },
    methods:{
      home(){
        this.$router.push('/')
        
      },
      cuadro(){
        this.$router.push('/cuadrocotiza')
      }
    }
  
} 
</script>

<style>
</style>
