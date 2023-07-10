<template>
  <div class="create">
    <div class="container-img">
      <img alt="Vue logo" src="../assets/CrearHeroe.png">
    </div>
    <h1>Creacion de Heroe</h1>
    <form @submit.prevent="create(heroe)">
      <div class="fields">
        <input type="nombre_heroe" placeholder="Nombre Super Héroe" v-model="heroe.nombre_heroe">
        <input type="nombre_editorial" placeholder="Nombre Editorial" v-model="heroe.nombre_editorial">
        <input type="alter_ego" placeholder="Alter Ego" v-model="heroe.alter_ego">
        <input type="descripcion" placeholder="Descripcion" v-model="heroe.descripcion">
        <input type="imagen" placeholder="URL de la imagen" v-model="heroe.imagen">
      </div>
      <div class="buttons">
        <button type="submit" class="btn btn-success">Guardar</button>
        <button type="submit" class="btn btn-danger" @click="cancel">Cancelar</button>
      </div>
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
    cancel(){
      this.$router.push({name: 'home'})
    }
  }
}
</script>
<style scoped>
.container-img img{
  width: 20rem;
}
form {
 display: flex;
 flex-direction: column;
 justify-content: center;
}
.fields{
  display: flex;
  align-items: center;
  flex-direction: column;

}
.fields input{
  width: 50%;
  margin-top: 1%;
}
.buttons {
  margin-top: 3%;
}
.buttons button {
  margin: 5px;
}
</style>