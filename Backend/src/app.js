const uuid = require('uuid');
const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
app.use(express.json());
const prisma = new PrismaClient()

app.use(cors());

app.listen(8080, function(req, res) {
    const dd = new Date();
    console.log("Listening on port 8080");
    console.log(dd.toLocaleDateString("en-US"));
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



app.post("/auth", async function(req, res){
    try{
        const user = req.headers.username;
        const password = req.headers.password;
        const findingUser = await prisma.users.findFirst({
            where:{
                users:user,
                 password:password
            }
        })
        const pastKey = uuid.v4();
        if(findingUser){
            return res.status(200).json({pastKey})
        }
            
    }
    catch(err){
        return res.status(500).json({message:"Something went wrong!"})
    }
}) 


/*async function isKey(pastKey){
    const findKey = await prisma.apiKey.findFirst({
        where:{
            key: null
        }
    })
    if(findKey){
        const createKey = await prisma.apiKey.create({
            data:{
                key:pastKey,
                dataBegin: Date.now()
            }
        })
    }
}*/