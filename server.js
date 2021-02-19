const express = require('express')
const app = new express()
const users = []

//serve client side files(will give them the public folder)
app.use(express.static('public'))

app.post("/login", (req, res) => {
    const user = req.body
    if (user.username.length >= 4 && user.password.length >= 4){
        //save new account on server
        users.push(user)
        console.log(users)
        res.send({
            message: "Your Account Was Succesfully Created."
        })
    }

    else {
        res.status(401)
        res.send({
            message: "Username Or Password Invalid"
        })
    }
 })
app.listen(3000, () => console.log("server started"))