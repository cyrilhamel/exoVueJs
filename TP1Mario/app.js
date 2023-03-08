//! Création d'une instance Vue c'est notre application
Vue.createApp({
//! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
//! Toutes les data seront contenues dans this
data() {
    return{
        image:'image/mario.jpg',
        nom : 'mario',
        age : 36,
    };
},
//! Dans cet Object methods, on va écrire nos fonctions
methods: {
    nbrFetich() {
        return Math.random();
        
    },
    agePlus(){
        return this.age +10;
    }

},
//! L'application est montée sur la balise HTML qui possède l'id app
}).mount('#app');
