<template>
    <h1>Vista Detallada</h1>
    <div class="container">
        <div class="card">
            <div class="image-container">
                <img :src="heroe.imagen" alt="Imagen del superhéroe" class="img" />
            </div>
            <div class="card-informacion">
                <div class="informacion">
                    <h6>Nombre Superheroe: </h6>
                    <h2>{{ heroe.nombre_heroe }}</h2>
                    <h6>Alter Ego (Nombre Personaje): </h6>
                    <h3>{{ heroe.alter_ego}}</h3>
                    <h6>Nombre Editorial: </h6>
                    <h3>{{heroe.nombre_editorial}}</h3>
                    <h6>Descripcion: </h6>
                    <p>{{ heroe.descripcion }}</p>
                </div>
                <div class="card-buttons">
                    <button class="btn btn-primary" @click="editHero">Editar</button>
                    <button class="btn btn-danger" @click="returnHeroes">Volver</button>
                </div>

            </div>
        </div>

      <!-- Otros detalles del superhéroe -->
    </div>
  </template>
  
  <script>
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
        returnHeroes(){
            this.$router.push({name: 'home'})
        },
        editHero(){
            this.$router.push({name: 'editHeroe'})
        }
    }
  };
  
  </script>
  
  <style scoped>
  .container {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
  }
  .card {
    border: none;
    display: flex;
    flex-direction: row;
  }
  .image-container, .card-informacion {
    flex: 1;
    padding: 10px;
    margin: 5px;
  }
  .card-informacion{
    text-align: start;
  }

  .card-buttons {
    display: flex;
    justify-content: center;
  
  }
  
  .card-buttons button {
    padding: 5px 10px;
    margin-left: 5px;
  }
  
  
  .image-container {
    margin-bottom: 10px;
    width: 50%;
    height: 35rem;
  }
  
  .image-container img {
    width: 100%; /* Hace que la imagen sea responsive */
    height: 100%; /*Mantiene la proporción de la imagen*/
    object-fit: cover;
  }
  
  
  </style>
  