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
    }
})