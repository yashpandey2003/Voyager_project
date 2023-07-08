const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

mongoose.connect('mongodb://0.0.0.0:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
    name: String,
    email: String, 
    password: String

})

const User = new mongoose.model("User", userSchema)

//Routes
app.post("/login", (req, res)=>{
    const {email, password} = req.body
    User.findOne({email: email}, (err, user)=>{
        if(user){
            if(password=== user.password){
                res.send({message: "Let's Explore " + user.name, user: user})
            }
            else{
                res.send({message: "Password didn't match"})
            }

        }
        else{
            res.send({message: "User not registered"})
        }
    })
})
app.post("/register", (req, res)=>{
    const {name, email, password} = req.body
    User.findOne({email: email}, (err, user)=>{
        if(user){
            res.send({message: "User already registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }
                else{
                    res.send({message: "Successfully registered, please login now"})

                }
            })
        }
    })
    
})
app.post("/homepage", (req, res)=>{

})
app.listen(5000, ()=>{
    console.log("Server is running on port : 5000");
})


