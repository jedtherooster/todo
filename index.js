import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3100;

let tasks = [];
let postId = 0;

app.use(bodyParser.urlencoded());
app.use(express.static('public'));

app.get("/", (req, res) => {

    res.render("index.ejs", {
        tasks: tasks,
    });
});

app.get("/delete/:id", (req, res) => {
    postId = req.params.id;

    if (!tasks[postId]) {
        return res.status(404).send("Post not found");
    }

    tasks.splice(postId, 1);

    res.render("index.ejs", {
        postId: postId,
        tasks: tasks,
    });
});

app.post("/submit", (req, res) => {
    const task = req.body.taskInput;
    
    tasks.push(task);

    res.render("index.ejs", {
        tasks: tasks,
    });
});

app.listen(port, (req, res) => {
    console.log(`Server running on port ${port}`);
});