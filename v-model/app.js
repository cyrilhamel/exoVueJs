const app = Vue.createApp({
    data() {
        return {
        nameUser: '',
        
        };
    },
    methods: {
        afficherNameUser(event) {
        this.nameUser = event.target.value;
        },
        
    },
    });
    
    app.mount('#monApp');