const express = require("express")
const app = express()
const path = require("path")

app.use("/",require('./routes/routes'));
app.use(express.static(path.join(__dirname + "/public")))
app.use(express.json())

app.set("port", process.env.PORT || 3000);

app.listen(app.get("port"),()=>{
    console.log(`EL servidor corre en el puerto ${app.get("port")}`)
})