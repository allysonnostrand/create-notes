const { json } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path')
const notes = require('./db/db.json');
const PORT = process.env.PORT || 3001;

/* middleware--------------------------------------*/
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

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
/* post request for notes---------------------*/
app.post("/api/notes"), (req,res) =>{
    fs.readFile('/db/db.json', "utf-8",(data) =>{
        JSON.parse(data);
        path.join(__dirname, '/db/db.json');
        notes.push(req.body);   
    })
}

/* listening to port--------------------------------*/
app.listen(PORT, () =>{
    console.log(`App listening at http://localhost:${PORT}`);
})