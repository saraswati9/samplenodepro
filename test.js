let express = require("express")
let ourApp = express()

ourApp.use(express.urlencoded({extended:false}))

ourApp.get('/', function(req, res) {
    res.send(`
    <form action="/answer" method="POST">
        <p> what color is the sky on a clear day?</p>
        <input name="skyColor" autocomplete="off">
        <button>submit answer</button>
    </form>
    `)
})

ourApp.post('/answer', function(req, res) {
    if(req.body.skyColor.toUpperCase() == "BLUE") {
        res.send(`
        <p>Congrats, that is the correct answer!</p>
        <a href="/">Back to homepage</a>
        `)
    } else {
        res.send(`
        <p>Sorry, that is incorrect</p>
        <a href="/">Back to homepage</a>
        `)
    }
})

ourApp.get('/answer', function(req, res) {
    res.send("Are you lost?")
})

ourApp.listen(3000)
