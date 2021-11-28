const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
app.use(express.json())
const shortid = require('shortid')
const bodyParser = require('body-parser')
const rndm = require('random-simple')
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(process.env.PORT);

let users = []
let urls = []
let shorturl;
app.post("/createuser", function (req, res) {
    users.push(req.body)
})

app.get("/login", function (req, res) {
    res.json(users);
})

app.get("/user/:id", function (req, res) {
    let username = req.params.id;
    console.log(username)
    res.json(username)
})
app.get('/language/:id1/:id2', function (req, res) {
    let lang = req.params.id1;
    let met = req.params.id2;
  var val = {
    "id": 21797,
    "username": "vivekanandanrk",
    "fullname": "Vivekanandan R K",
    "firstname": "Vivekanandan",
    "middlename": null,
    "lastname": "R K",
    "address1": "",
    "city": "",
    "state": "",
    "postalcode": "",
    "country": null,
    "work": "",
    "workext": null,
    "email": "rk.vivekanandan@tcs.com",
    "status": 0,
    "dateformat": "MM-DD-YYYY",
    "timeformat": "24",
    "language": lang,
    "defaultchartrange": 2,
    "attachedsignature": 0,
    "signature": "",
    "avator": null,
    "metric":met
  }
  res.send(val)
})
app.post("/url", function (req, res) {

    var short = require('node-url-shortener');

    short.short(req.body, function (err, url) {
        shorturl = url
        console.log(shorturl)
        res.json(url)
    });

})
const tokenGenerator = require('generate-token');
app.get("/random", function (req, res) {
    let token = tokenGenerator.generate(5);
    console.log(token);
    res.json(token)
})
