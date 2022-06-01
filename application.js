const app =  Vue.createApp({
    
    data() {
        return {
            ism: 'Ubaydullo',
            familiya: 'Jumayev',
            son: 0
          }
    },
    methods: {
        IsmOzgartirish() {
            this.ism = "Jamshid"
        }
    }

})

app.mount('#app')