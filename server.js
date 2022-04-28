const express = require('express');
const app = express();
const path = require('path')
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

app.get("/*", (req, res) =>{
    res.sendFile(path.join(__dirname, 'public/assets/index.html'));
})

app.get("/notes", (req,res) =>{
    res.sendFile(path.join(__dirname, 'public/assets/notes.html'));
})

app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`);
})