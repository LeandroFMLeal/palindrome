const express = require ('express')
const bodyParser = require ('body-parser')
const port = '8000'
const cors = require ('cors')
const routes = express.Router()
const app = express()

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(routes)

app.listen(port)

app.get('/', function(req, res){
    res.json({
            message: 'Horray! Welcome to Leal\'s API!'    
        })
})


function palindrome(str) {
    const removeChars = /[\W_]/g;
    
    // to lowercase
    const lowRegStr = str.toLowerCase().replace(removeChars, '');

    // reversing the word or phrase
    const reverseStr = lowRegStr.split('').reverse().join(''); 

    return reverseStr === lowRegStr; 
}

routes.post('/palindrome', function (req, res, next){
    console.log (req.body)
    let isItPalidrome
    if ( req.body.phrase ){
        isItPalidrome = palindrome(req.body.phrase)
    }
    console.log ( isItPalidrome )
    if ( isItPalidrome === true){
        res.json({
            result: 200 
        })
    }
    if ( isItPalidrome === false){
        res.json({
            result: 400
        })
    }
})

console.log( `Server started on port ${port} at ${new Date()}`)
