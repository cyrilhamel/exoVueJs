Vue.createApp({
    data() {
        return {
            input1: '',
            input2: ''
        };
    },
    methods: {
        displayText1(event) {
            this.input1 = event.target.value;
        },
        displayText2(event) {
            this.input2 = event.target.value;
        },
        displayModal() {
            alert("Curieux !");
        }
    }
}).mount('#app');