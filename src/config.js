requirejs.config({
    baseUrl: "./",
    paths: {
        app: "./js"
    }
});
requirejs(["js/main"]);