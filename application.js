const app =  Vue.createApp({
    
    data() {
        return {
            link: 'https://susysacademy.uz',
            rasm: 'https://images.unsplash.com/photo-1654153845950-70eaf3ad3794?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            ism: 'Ubaydullo',
            familiya: 'Jumayev',
            son: 0,
            qiymat: true,
            dasturlar: [
                { nomi: "JS", asoschisi: 'Brendan Eich ', dinamikClass: true},
                { nomi: "Python", asoschisi: 'Gvido van Rossum', dinamikClass: false},
                { nomi: "Java", asoschisi: 'Sun Microsystems', dinamikClass: true}
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