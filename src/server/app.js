const express = require ('express')
const bodyParser = require ('body-parser')
const port = '8000'
const router = express.Router()

const app = express()


function palindrome(str) {
    const removeChars = /[\W_]/g;
    
    // to lowercase
    const lowRegStr = str.toLowerCase().replace(removeChars, '');

    // reversing the word or phrase
    const reverseStr = lowRegStr.split('').reverse().join(''); 

    return reverseStr === lowRegStr; 
  }

app.listen(port)

app.get('/', function(req, res){
    res.json({
            message: 'Horray! Welcome to Leal\'s API!'    
        })
        console.log ( 'chegou requisição aqui')
})

router.post('/palindrome', function (req, res, next){
    let phrase = req.body.in 
    let isItPalindrome = palindrome(phrase)
    res.json({
        palindrome: isItPalindrome,
        result: 200 
    })
    console.log ( phrase)
})

console.log( `Server started on port ${port} at ${new Date()}`)
