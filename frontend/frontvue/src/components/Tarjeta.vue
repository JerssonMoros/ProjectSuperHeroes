<template>
  <div class="card">
    <h1>{{ superHero.nombre_heroe }}</h1>
    <h2>{{ superHero.alter_ego}}</h2>
    <div class="image-container">
      <img :src="superHero.imagen" alt="Imagen del superhéroe" class="img" />
    </div>
    <h3>{{superHero.nombre_editorial}}</h3>
    <p>{{ superHero.descripcion }}</p>
    <div class="card-buttons">
      <button class="btn btn-info" @click="viewHero">Ver</button>
      <button class="btn btn-primary" @click="editHero">Editar</button>
      <button class="btn btn-danger" @click="deleteHero">Eliminar</button>
    </div>
    <!-- Otros detalles del superhéroe -->
  </div>
</template>

<script>
export default {
  props: {
    superHero: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteHero() {
      // Lógica para eliminar el superhéroe
      const heroId = this.superHero.id_heroe;
      fetch('http://localhost:3000/heroes/' + heroId, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.ok) {
            console.log('Superhéroe eliminado');
            window.location.href = '/';

          } else {
            throw new Error('Error al eliminar el superhéroe');
          }
        })
        .catch(error => {
          console.error(error);
          // Realiza el manejo de errores adecuado
        });

    },
    viewHero() {
      this.$router.push({ name: 'heroe', params: { id: this.superHero.id_heroe } });
    },
    editHero() {
      this.$router.push({ name: 'editHeroe', params: {id: this.superHero.id_heroe} });
    }
  }
};

</script>

<style scoped>
.card {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.card-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

}

.card-buttons button {
  padding: 5px 10px;
  margin: 5px;
  color: aliceblue;
}


.image-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.image-container img {
  max-width: 80%; /* Hace que la imagen sea responsive */
  height: 10rem; /*Mantiene la proporción de la imagen*/
  object-fit: cover;
}


</style>
