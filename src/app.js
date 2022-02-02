const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

require("./db/conn");

const port = process.env.PORT || 8080;

const static__path = path.join(__dirname, "../public");
const template__path = path.join(__dirname, "../templates/views");
const partial__path = path.join(__dirname, "../templates/partials");

app.use(express.static(static__path));
app.set("view engine", "hbs");
app.set("views", template__path);
hbs.registerPartials(partial__path);


app.get("/", (req, res)=>{
    res.render("index");
})
app.get("/login", (req, res)=>{
    res.render("login");

});
app.get("/register", (req, res)=>{
    res.render("register");

});
app.get("/blog", (req, res)=>{
    res.render("blog");

});

app.get("*", (req, res)=>{
    res.render("404error");
})
app.listen(port, (req, res)=>{
    console.log(`listening to the port ${port}`);

});