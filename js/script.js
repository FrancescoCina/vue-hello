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
        imgLink: "./img/Logo_Vue.pn",
        imgDescription: "Logo Vue.js",
        frameworkType: "",
    },
    methods: {
        stopImg() {
            if (this.favoriteFramework === "vue" || this.favoriteFramework === "Vue") {
                this.imgLink = "./img/Logo_Vue.png"
                this.imgDescription = "Logo Vue.js"
            } else {
                this.imgLink = " "
                this.imgDescription = "Hai scelto il framework sbagliato!"
            }
        },
        changeImg() {
            switch (this.frameworkType) {
                case "vue":
                case "Vue":
                    this.imgLink = "./img/Logo_Vue.png"
                    break;
                case "react":
                case "React":
                    this.imgLink = "./img/Logo_React.png"
                    break;
                case "angular":
                case "Angular":
                    this.imgLink = "./img/Logo_Angular.png"
                    break;
                default:
                    this.imgDescription = "Hai scelto il framework sbagliato!"
                    break;
            }
        }

    }
})