console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp({
    name: "vue slider",
    data() {
        return {
            destinations,
            currentIndex: 0
        }
             
        
    }
})

app.mount ("#root");