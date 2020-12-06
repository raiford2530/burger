const express = require('express');
const router = express.Router();
const burger = require('../models/burger');


//-------------------View Routes----------------------------
router.get("/", (req, res) => {
    burger.getAll((burgers) => {
        res.render("index", {burgers: burgers});
    })
})

//-------------------API Routes------------------------------
router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name"], [req.body.burger_name], (data) => {

        res.status(201).json(data.insertId);
    })
})

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    burger.update(req.body, condition, (data) => {      
        res.status(200).end();
    })
})

module.exports = router;