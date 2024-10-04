//-- Hello Expresse szoveg uzenetet kuld vissza keresre
const { json } = require('express');
const express = require('express');
const app = express();
const port = 3000;
// Json adatok fogadasahoz szukseges a middleware
app.use(express.json());

var pizzak = [];

app.get('/', (req, res) => {
    res.send(`<h1>Szia Világ!</h1>`);
});
// node .\helloExpress.js

app.get('/futar', (req, res) => {
    res.send(`<h1>Futár</h1>`);
});

app.get('/pizza', (req, res) => {
    if (pizzak.length > 0) {
        res.json(pizzak);
    } else {  
        res.send(`<h1>Nincs Pizza az adatbázisban.</h1>`);
    }
    
});

app.post('/pizza', (req, res) => {
    let ujPizza = req.body;
    pizzak.push(ujPizza);
    res.send(`<h1>Új Pizza adatai: Név: ${ujPizza.nev}, Ár: ${ujPizza.ar} Ft</h1>`);
});

app.listen(port, () => {
    console.log(`Az alkalmazas a http://localhost:${port} címen elerheto!`);
});