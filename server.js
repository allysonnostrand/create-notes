const express = require('express');
const app = express();
const path = require('path')
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;

/* middleware--------------------------------------*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('/public'));

/* homepage route---------------------------------*/
app.get("/", (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/index.html'));
})

/* notetaking route--------------------------------*/
app.get("/notes", (req, res) =>{
    res.sendFile(path.join(__dirname, '/public/notes.html'));
})

/* acessing notes database--------------------------*/
app.get("/api/notes", (req,res) =>{
    res.json(notes);
})

/* listening to port--------------------------------*/
app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`);
})