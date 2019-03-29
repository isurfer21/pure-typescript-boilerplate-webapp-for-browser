requirejs.config({
    baseUrl: "./",
    paths: {
        app: "./js"
    }
});
requirejs(["main"]);