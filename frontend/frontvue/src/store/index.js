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
        const resBE = await res.json()
        console.log(resBE)
      }
      catch(error)
      {
        console.log(error)
      }
    },
    async get_heroes({commit}){
      try
      {
        const res = await fetch('http://localhost:3000/heroes',{
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(heroe)
        })
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
