Vue.createApp({ data(){
    return {
        leNombre : 0
}; },
methods: {
    ajouter(nbr) {
        this.leNombre += nbr;
    },
    soustraire(nbr) {
        this.leNombre -= nbr;

},
capterInput(event){
    console.log(event);
    this.uneString = event.target.value;
},
capterEventClick(event){
    console.log(event)
},
capterEventInput(event){
    console.log(event);
    this.uneString = event.target.value
},
},
 }).mount('#monApp');