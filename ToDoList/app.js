// //On stock les éléments HTML dans des variables
// const leButton = document.querySelector('button');
// const leinput = document.querySelector('input');
// const laListe = document.querySelector('ul');

// function ajouterTask() {
//     //Dans inputContent on stock ce que l'utilisateur tape dans l'input
//     const inputContent = leinput.value;
//     //Création d'un élément <li></li>
//     const listElement = document.createElement('li');
//     //Complétion du texte de l'élément <li></li>
//     listElement.textContent = inputContent;
//     //Ajout du <li></li> dans la <ul></ul> (laListe)
//     laListe.append(listElement);
//     //Bonus : après avoir ajouté une Task, on vide l'input
//     leinput.value = '';
// };
// leButton.addEventListener('click', ajouterTask);

//! Création d'une instance Vue c'est notre application
Vue.createApp({
    //! Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    //! Toutes les data seront contenues dans this
    data() {
        return {
        tasks: [],
        valeurDeInput: '',
    };
    },
    //! Dans cet Object methods, on va écrire nos fonctions
    methods: {
        ajouterTask() {
        this.tasks.push(this.valeurDeInput);
        this.valeurDeInput = '';
        },
    },
    //! L'application est montée sur la balise HTML qui possède l'id app
    }).mount('#app');