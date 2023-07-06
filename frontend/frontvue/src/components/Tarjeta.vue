<template>
  <div class="card">
    <h1>{{ superHero.nombre_heroe }}</h1>
    <h2>{{ superHero.alter_ego}}</h2>
    <img :src="superHero.imagen" :style="{ width: '20rem'}" alt="Imagen del superhéroe" />
    <h3>{{superHero.nombre_editorial}}</h3>
    <p>{{ superHero.descripcion }}</p>
    <div class="card-buttons">
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
            window.location.reload();
            
          } else {
            throw new Error('Error al eliminar el superhéroe');
          }
        })
        .catch(error => {
          console.error(error);
          // Realiza el manejo de errores adecuado
        });
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
margin-top: 10px;
}

.card-buttons button {
  padding: 5px 10px;
}
  </style>