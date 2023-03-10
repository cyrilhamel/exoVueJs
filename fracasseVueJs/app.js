const app = Vue.createApp({ data(){
    return {
        leNombre : 0,
        nameUser :''
}; },

    methods: {
        
        augmenter(num){
        this.leNombre += num;
        },
        reduire(num){
            this.leNombre -= num;
        },
},
computed:{
    afficherNameUser() {
    console.log('fonction exécutée');
    if(this.nameUser ===''){
        return 'test'
    }
    else{
        return 'autre Test';        
    }
    },

}
});

app.mount('#monApp');