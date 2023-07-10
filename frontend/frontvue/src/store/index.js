import { createStore, mapActions } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    async create({commit},heroe){
      try
      {
        const res = await fetch('http://localhost:3000/heroes',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(heroe)
        })
        window.location.href = '/'
        const resBE = await res.json()
        console.log(resBE)
      }
      catch(error)
      {
        console.log(error)
      }
    },
    async update({commit},heroe){
      try
      {
        const res = await fetch('http://localhost:3000/heroes',{
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(heroe)
        })
        window.location.href = '/'
        const resBE = await res.json()
        console.log(resBE)
      }
      catch(error)
      {
        console.log(error)
      }
    }
  },
  

  modules: {
    
  }
})
