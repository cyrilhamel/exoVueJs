const app = Vue.createApp({
    data() {
        return {
            nomClasse: '',
            laCouleur: '',
            visible: true
        }
    },
    computed: {
        classDynamique() {
            return{
              hello: this.nomClasse ==='hello',
              world: this.nomClasse ==='world',
              hidden: !this.visible,
              visible: this.visible
            }
        }
    },
    methods: {
        affichage() {
            this.visible = !this.visible;
        }
    }
});

app.mount('#monApp');