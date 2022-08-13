const express = require('express')
const app = express()
const port = 4000
const connectDB = require('./db')
const List = require('./schema')
const bodyParser = require('body-parser')


const urlencodedParser = bodyParser.urlencoded({ extended: false })


app.use(express.static('wait'))
app.use('/wait/assets/css', express.static(__dirname + 'wait/assets/css'))
app.use('/wait/assets/js', express.static(__dirname + 'wait/assets/js') )


app.use('/wait/assets/image', express.static(__dirname + 'wait/assets/image'))
app.use('/wait/assets/fonts', express.static(__dirname + 'wait/assets/fonts') )





app.set('views', './wait' )
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: false}))


app.get('/', (req, res) => res.render('/index'))


app.post('/', urlencodedParser, async (req, res) => {
    try{
        const email = req.body.email
        const create = await List.create({email})
        
       
    }

    catch (e) {
        console.log(e)
    }

  
})

if(connectDB){
    console.log('connected to the db')
}



const start = async() => {
    try {
       await connectDB()
       app.listen(process.env.PORT || 4000, () => console.log(`LearnDev app listening on port ${port}!`))
 
    } catch (error) {
       console.log(error)
       
    }
 }
 
 start()
// const start = async() => {
//     try {
        
//     } catch (error) {
        
//     }
// }