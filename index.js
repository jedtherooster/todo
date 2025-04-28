import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3100;

let tasks = [];

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs", {
        tasks: tasks,
    });
});

app.post("/submit", (req, res) => {
    const task = req.body.taskInput;
    
    tasks.push(task);
    console.log(tasks);

    res.render("index.ejs", {
        tasks: tasks,
    });
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});