const express = require('express')
const app = express()

const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const cors = require("cors")

app.use(express.json())
app.use(cors())

const url =  "mongodb+srv://davismuchiri21:G4sfhlN4NsUbGQYm@cluster0.mddsf.mongodb.net/NiceBoutique?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url,{
  serverSelectionTimeoutMS: 30000,
  socketTimeoutMS: 60000,
  family: 4
}).then(() => console.log('connected to db'))
  .catch(err => console.log('error connecting to db',err.message))

const PORT = 8000;

app.get('/',(req,res) => {
  res.send('Express app is running')
})

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/images')// relative path within project
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
});

const upload = multer({ storage: storage });

// Serve images statically from the 'upload/images' directory
app.use('/images', express.static('upload/images'));

app.post('/upload', upload.single('product'), (req, res) => {
  res.json({
    success: true,
    image_url: `http://localhost:${PORT}/images/${req.file.filename}`
  })
})

const Product = mongoose.model("Product", {
  id:{
    type:Number,
    required:true,
  },
  name:{
    type:String,
    required:true,
  },
  image:{
    type:String,
    required:true,
  },
  category:{
    type:String,
    required:true,
  },
  current_price:{
    type:Number,
    required:true,
  },
  initial_price:{
    type:Number,
    required:true,
  },
  date:{
    type:Date,
    default:Date.now,
  },
})

app.post('/add-product',async (req,res) => {
  let products = await Product.find({})
  let id
  if (products.length > 0){
    let last_product_array = products.slice(-1)
    let last_product = last_product_array[0]
    id = last_product.id + 1
  }

  const product = new Product({
    id: id,
    name:req.body.name,
    image:req.body.image,
    category:req.body.category,
    current_price:req.body.current_price,
    initial_price:req.body.initial_price,
  })
  console.log(product)
  await product.save()
  console.log("Product saved")

  res.json({
    success:true,
    message:"Product saved"
  })
})

app.post('/delete-product',async (req,res) => {
  await Product.findOneAndDelete({id:req.body.id})
  res.json({
    success:true,
    message:"Product deleted"
  })
})

app.get('/products', async (req, res) => {
  let products = await Product.find({})
  console.log(products)
  res.send(products)

});

app.listen(PORT,(error) => {
  if (!error){
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log(`Error : ${error}`);
    
  }
})
