module.exports = app => {
    const slider = require("../controllers/slider.controller.js");

    const router = require("express").Router();
    router.post("/", slider.insert);

    router.delete('/', slider.delete);

    // Retrieve all Tutorials
    router.get("/", slider.findAll);

    app.use('/api/slider', router);
};