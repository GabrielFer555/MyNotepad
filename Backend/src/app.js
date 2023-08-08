const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
app.use(express.json());
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()

app.use(cors());

app.listen(8080, function(req, res) {
    console.log("Listening on port 8080");

})

app.get("/cors", function(req, res) {

    return res.status(200).json({message:"Sucesso!"})
})
//!Still under development
app.post("/criarNovoTxt", async function(req, res){
    try{
        const {title} = req.body.title;
        const {content} = req.body.content;
        const newMan = await prisma.author.create({
            data:{
                titles: title,
                description: content,

            }
        })

    }catch(err){
        return res.status(500).json({message:"Error!"})
    }
})