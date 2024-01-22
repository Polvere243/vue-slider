console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp({
    name: "vue slider",
    data() {
        return {
            destinations,
            currentIndex: 0
        }
    },
    methods: {
        slideForward() {
            this.currentIndex++
        },
        slideBackward() {
            this.currentIndex--
        }
    }  
})

app.mount ("#root");