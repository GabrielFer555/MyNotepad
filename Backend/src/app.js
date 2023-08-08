const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
app.use(express.json());
const {PrismaClient} = require("@prisma/client")
const prima = new PrismaClient()

app.use(cors());

app.listen(8080, function(req, res) {
    console.log("Listening on port 8080");

})

app.get("/cors", function(req, res) {

    return res.status(200).json({messsage:"Sucesso!"})
})

app.post("/criarNovoTxt", function(req, res){
    
})