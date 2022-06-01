const app =  Vue.createApp({
    
    data() {
        return {
            ism: 'Ubaydullo',
            familiya: 'Jumayev',
            son: 0,
            qiymat: true
          }
    },
    methods: {
        IsmOzgartirish() {
            this.ism = "Jamshid"
        },
        qiymatniOzgartirish() {
            this.qiymat = !this.qiymat
        }
    }

})

app.mount('#app')