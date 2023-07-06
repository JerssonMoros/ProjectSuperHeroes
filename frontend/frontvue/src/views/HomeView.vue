<template>
    <div class="home">
      <h1>Lista de personajes</h1>
      <div class="contenedor_tarjetas">
        <Tarjeta  v-for="superHero in posts" :key="superHero.id_heroe" :superHero="superHero"  />
      </div>

    </div>
  </template>
  
  <script>

import Tarjeta from "@/components/Tarjeta.vue"; 

  export default {
    components:{
        Tarjeta
    },
    data(){
        return{
            posts:[]
        }
    },
    created(){
        fetch('http://localhost:3000/heroes')
        .then(res => res.json())
        .then(json => this.posts = json)
    }
  }
  </script>

<style scoped>
.contenedor_tarjetas {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.contenedor_tarjetas .card {
  flex-basis: 33.33%;
  margin-right: 10px;
  margin-bottom: 20px;
}

</style>