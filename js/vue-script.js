console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp({
    name: "vue slider",
    data: () => ({
        destinations,
        currentIndex: 0,
        autoplay: null
    }),
    computed:{
        isLastIndex() {
            return this.currentIndex === this.lastDestinationIndex;
        },
        isFirstIndex() {
            return this.currentIndex === 0;
        },
        lastDestinationIndex() {
            return this.destinations.length - 1;
        }

    },
    methods: {
        // metodo per impostare l'indice attuale al click dei pulsanti e delle miniature
        setCurrentIndex (target) {
            
            if (target === "next") {
                if (this.isLastIndex) this.currentIndex = 0;
                else this.currentIndex++;
            } else if (target === "prev") {
                if (this.isFirstIndex) this.currentIndex = this.lastDestinationIndex;
                else this.currentIndex--;
            } else {
                this.currentIndex = target;
            }
        },
        // metodo per interrompere l'autoplay al passaggio del mouse su un'immagine
        stopAutoplay() {
            clearInterval(this.autoplay)
        },

        startAutoplay() {
            this.autoplay = setInterval (() => {
                this.setCurrentIndex("next");
            }, 3000);
        }
    },
        mounted(){
            this.startAutoplay();
        }

    }  
)

app.mount ("#root");