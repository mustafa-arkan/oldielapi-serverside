


const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { query } = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;

const app = express();

//Middlewares
app.use(cors());
app.use(express.json());




// console.log(process.env.DB_USER)
// console.log(process.env.DB_PASS)




const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.g3rb4ny.mongodb.net/?retryWrites=true&w=majority`;

//console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });




async function run(){

try{

   


    

    const brandsCollection = client.db('oldlaptop').collection('brands');
    
    const laptopCollection = client.db('oldlaptop').collection('products');

    //const allsellersCollection = client.db('oldlaptop').collection('allsellers');

    const usersCollection = client.db('oldlaptop').collection('users');








    app.get('/brands', async (req, res) => {
      const query = {};
      const brands = await brandsCollection.find(query).toArray();
      res.send(brands);
    });

    app.get('/brands/:brand', async (req, res) => {
      const query = req.params.brand;

      const filter = {
        brand: query,
      };
      const result = await laptopCollection.find(filter).toArray();
      res.send(result);
    });
        
///////////category end///////

////////users api start////////

app.get('/users', async (req, res) => {
  const query = {};
  const users = await usersCollection.find(query).toArray();
  res.send(users);
});






app.post('/users', async (req, res) => {
  const user = req.body;
  console.log(user);
  const result = await usersCollection.insertOne(user);
  res.send(result);
});







////////end of users api//////


//////make admin api start/////
    




app.put('/users/admin/:id', async (req, res) => {

  const id=req.params.id


  // var ObjectId = require('mongodb').ObjectID;

  
  const filter = { _id: require('mongodb').ObjectId(id) }

  // const id=parseInt(req.params.id) 
  // const filter = { _id: ObjectId(id) }
  const options = { upsert: true };
  const updatedDoc = {
      $set: {
          role: 'admin'
      }
  }
  const result = await usersCollection.updateOne(filter, updatedDoc, options);
  res.send(result);
})








//////end of admin api/////












}

finally{






}





}

run().catch(err=>console.error(err))










// /////////////////
app.get('/',(req,res)=>{

res.send('social app  node server !!!')

})

app.listen(port,()=>{


console.log(`server running on port: ${port}`)

})


