const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

const app = express();
const PORT = process.env.PORT || 8081;

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(jsonParser);

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Max-Age", "1800");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET");
    next();
});
app.use(cors());

let p_input = "";
let t_input = "";
let p_output = "";
let g = "";
let alpha = "";
let betta = "";

app.get("/", function (req, res) {
    console.log("/");
});

app.post("/params", urlencodedParser, function (req, res) {
    if (!req.body)
         return res.sendStatus(400);
    
    console.log(req.body);
    
    p_input = req.body.p_input;
    t_input = req.body.t_input;
    p_output = req.body.p_output;
    g = req.body.g;
    alpha = req.body.alpha;
    betta = req.body.betta;
    res.status(200);
    res.redirect("http://localhost:8080/result");
});

app.get("/params", function (req, res) {
    res.json({
        p_input: `${p_input}`,
        t_input: `${t_input}`,
        p_output: `${p_output}`,
        g: `${g}`,
        alpha: `${alpha}`,
        betta: `${betta}`,
    });
});