<template>
  <div class="card">
    <h1>Edicion de Heroe</h1>
    <form @submit.prevent="actualizar">
      <div class="fields">
        <input type="nombre_heroe" placeholder="Nombre Super Héroe" v-model="heroe.nombre_heroe">
        <input type="nombre_editorial" placeholder="Nombre Editorial" v-model="heroe.nombre_editorial">
        <input type="alter_ego" placeholder="Alter Ego" v-model="heroe.alter_ego">
        <input type="descripcion" placeholder="Descripcion" v-model="heroe.descripcion">
        <input type="imagen" placeholder="URL de la imagen" v-model="heroe.imagen">
      </div>
      <div class="image-container">
        <img :src="heroe.imagen" alt="Imagen del superhéroe" class="img" />
      </div>
      <div class="buttons">
        <button type="submit" class="btn btn-success" @click="save">Guardar</button>
        <button type="submit" class="btn btn-danger" @click="cancel">Cancelar</button>
      </div>
    </form>
  </div>
</template>

<script>

import router from "@/router";
export default {
  data(){
    return{
      heroe:{

      }
    }
  },
  created:function(){
    this.get_heroe();
  },
  methods:{
    get_heroe(){
      fetch('http://localhost:3000/heroe/' + this.$route.params.id)
        .then(res => res.json())
        .then((datosres)=>{
          console.log(datosres)
          this.heroe = datosres[0];
        })
    },
    save(){
      fetch('http://localhost:3000/heroes/',{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(this.heroe)
        });
        window.location.href = '/';

    },
    cancel(){
      this.$router.push({name: 'home'})
    }
  }
  
}
</script>

<style scoped>
.fields{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.fields input{
  width: 50%;
  margin-top: 1%;
}

.image-container {
  display: flex;
  justify-content: center;
  margin-top: 1%;
}

.image-container img {
  max-width: 40%; /* Hace que la imagen sea responsive */
  object-fit: cover;
}

.buttons {
  margin-top: 2%;
}
.buttons button {
  margin: 5px;
}

</style>