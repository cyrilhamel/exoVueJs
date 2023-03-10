const app = Vue.createApp({
    data() {
        return {
            laClasse: '',
            text1: '',
            text2: '',
            visible: true
        }
    },
    computed: {
        changeClass() {
            if(this.text1 === 'hello'){
                this.laClasse = 'hello';
            }else if(this.text1 === 'world'){
                this.laClasse = 'world';
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