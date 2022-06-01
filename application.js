const app =  Vue.createApp({
    
    data() {
        return {
            ism: 'Ubaydullo',
            familiya: 'Jumayev',
            son: 0,
            qiymat: true,
            dasturlar: [
                { nomi: "JS", asoschisi: 'Brendan Eich '},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "Python", asoschisi: 'Gvido van Rossum'},
                { nomi: "JS", asoschisi: 'Sun Microsystems'}
            ]
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