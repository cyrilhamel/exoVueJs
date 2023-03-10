const app = Vue.createApp({ data(){
    return {
        leNombre : 0,
        nameUser :''
}; },

    methods: {
        
        augmenter(num){
        this.leNombre += num;
        },
},
computed:{
    nombreMystere() {
    
    if(this.leNombre === 17){
        return this.leNombre +'vous avez trouvez';
    }
    else if (this.leNombre > 17){
        return 'Vous avez dépacez le nombre';        
    }else{
        return 'le nombre est plus grand';
    }
    },

},

watch:{
    leNombre(value){
        console.log('le watcher en action...');
        setTimeout(() =>{
            this.leNombre = 0;
    },5000);
    },

}
});

app.mount('#monApp');