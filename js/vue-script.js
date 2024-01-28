console.log("Vue Ok", Vue);

const {createApp} = Vue;
const app = createApp({
    name: "vue slider",
    data: () => ({
        destinations,
        currentIndex: 0
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
        }

            
             
            
    
       
        },
        mounted(){
            setInterval (() => {
                this.setCurrentIndex("next");
            }, 3000);
        }

    }  
)

app.mount ("#root");