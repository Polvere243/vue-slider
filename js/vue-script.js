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
    computed:{
        isLastIndex() {
            return this.currentIndex === this.lastDestinationIndex;
        },
        isFirstIndex() {
            return this.currentIndex === 0;
        },
        lastDestinationIndex() {
            return this.destinations.lenght-1;
        }

    },
    methods: {
        slideForward() {
            if (this.isLastIndex) currentIndex === 0;
            else this.currentIndex++
        },
        slideBackward() {
            if (this.isFirstIndex) currentIndex === this.isLastIndex; 
            this.currentIndex--
        },
        autoplay() {
            onMounted(() => {
                setInterval(() => {
                    this.currentIndex++
                }, 3000)

            })
        }

    }  
})

app.mount ("#root");