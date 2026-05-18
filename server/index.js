const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const { exec, spawn } = require("child_process");

let controller = new AbortController();
let { signal } = controller;

const app = express();
const PORT = process.env.PORT || 8081;
const urlencodedParser = bodyParser.urlencoded({ extended: false });    

app.use(express.json());
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

let cleaned = "";  
let spawnClean = null;

app.get("/", function (req, res) {
    console.log("/");
});

app.post("/params", urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
    console.log(req.body);
    p_input = req.body.p_input;
    t_input = req.body.t_input;
    p_output = req.body.p_output;
    g = req.body.g;
    alpha = req.body.alpha;
    betta = req.body.betta;
    res.status(200);
    res.redirect("http://localhost:8080/result");

    try {
        cleanSh();
    } 
    catch {
        res.send("Не удалось запустить расчет.");
    }
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

app.listen(PORT, () => console.log(`server started on port ${PORT}`));



async function cleanSh() {
    spawnClean = spawn(
    "sh /home/vboxuser/OpenFOAM/vboxuser-13/run/nozzle_1/Clean.sh",
    [],
    { shell: true, signal }
    );
    spawnClean.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });
    spawnClean.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
    });
    spawnClean.on("error", (error) => {
    cleaned = "Не удалось очистить файлы предыдущего решения.";
        console.log(`error: ${error.message}`);
    });
    spawnClean.on("spawn", () => {
    cleaned = "Файлы предыдущего решения успешно удалены.";
        console.log(`cleaned`);
    });
    spawnClean.on("close", (code) => {
        console.log(`child process CLEAN exited with code ${code}`);
    });
}