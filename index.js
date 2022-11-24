const express=require('express')
const app=express()
const cors=require('cors')
 require('dotenv').config()
const port=process.env.PORT||5000
const { MongoClient, ServerApiVersion } = require('mongodb');


app.use(cors())
app.use(express.json())

/////////////////







// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g3rb4ny.mongodb.net/?retryWrites=true&w=majority`;

//console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


//////////

async function run(){

try{





}

finally{





    
}





}

run().catch(err=>console.error(err))










/////////////////
app.get('/',(req,res)=>{

res.send('social app  node server !!!')

})

app.listen(port,()=>{


console.log(`server running on port: ${port}`)

})