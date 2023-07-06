<template>
  <div class="create">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Creacion de Heroe</h1>
    <form @submit.prevent="create(heroe)">
      <input type="nombre_heroe" placeholder="Nombre Super Héroe" v-model="heroe.nombre_heroe">
      <input type="nombre_editorial" placeholder="Nombre Editorial" v-model="heroe.nombre_editorial">
      <input type="alter_ego" placeholder="Alter Ego" v-model="heroe.alter_ego">
      <input type="descripcion" placeholder="Descripcion" v-model="heroe.descripcion">
      <input type="imagen" placeholder="URL de la imagen" v-model="heroe.imagen">
      <button type="submit">Guardar</button>
    </form>
  </div>
</template>

<script>

import {mapActions} from "vuex";
import router from "@/router";
export default {
  data(){
    return{
      heroe:{
        nombre_heroe: '',
        nombre_editorial: '',
        alter_ego: '',
        descripcion: '',
        imagen: ''
      }
    }
  },
  methods:{
    ...mapActions(['create']),
    router.push('/')
  },
  
}
</script>
