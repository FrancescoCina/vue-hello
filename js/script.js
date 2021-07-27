console.log("Vue OK", Vue);

Vue.config.devtools = true;

const root = new Vue({
    el: "#root",
    data: {
        name: "Francesco",
        surname: "Cina",
        fontSizeClass: "fs-5",
        colorClass: "red",
        howOldAreYou: "",
        favoriteFramework: "",
        imgLink: "./img/Logo_Vue.png",
        imgDescription: "Logo Vue.js",
    },
    methods: {
        changeImg() {
            if (this.favoriteFramework === "vue" || this.favoriteFramework === "Vue") {
                this.imgLink = "./img/Logo_Vue.png"
                this.imgDescription = "Logo Vue.js"
            } else {
                this.imgLink = " "
                this.imgDescription = "Hai scelto il framework sbagliato!"
            }
        }
    }
})