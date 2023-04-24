// importing packages
const express = require("express");
const cors = require("cors");
const exp = require("constants");

//invoking packages
const app = express();

// configuring express server to use JSON object
// below is also considered middleware
app.use(express.json());
app.use(cors());


// creaing a GET endpoint
app.get("/api/users", (req, res) => {
    let friends =  ["Nitin", "Eric", "Jeddy", "Cameron", "Riley"];
    res.status(200).send(friends);
})

// // creaing a secondary GET endpoint
// app.get("/weather/:temperature", (req,res) => {
//     const phrase = '<h3>It was ${req.params.temperature} today</h3>';
//     res.status(200).send(phrase);
// })

//alternate way to write the secondary GET endpoint created in line 22
app.get("/weather/:temperature", (req,res) => {
    const{temperature} = req.params;
    const phrase = `<h3>It was ${temperature} today</h3>`;
    res.status(200).send(phrase);
});

// telling express to run our server ('or listen') on port 4000
app.listen(4000, () => console.log("Server running on port 4000"));