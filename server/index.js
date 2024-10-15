const express = require('express')
const app = express()

const mongoose = require("mongoose")
const multer = require("multer")
const path = require("path")
const cors = require("cors")


app.use(express.json())
app.use(cors())

const jwt = require('jsonwebtoken');


require('dotenv').config();

const url = process.env.MONGODB_URI

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
    cb(null, 'upload/images');
  },
  filename: function (req, file, cb) {
    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
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
  
  if (products.length === 0)
    id = 1

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
  // console.log(product)
  await product.save()
  // console.log("Product saved")

  res.json({
    success:true,
    message:"Product saved"
  })
})


//update product
app.put('/update-product/:id', upload.single('image'), async (req, res) => {
  try {
    const productId = parseInt(req.params.id);
    const updatedData = {
      name: req.body.name,
      category: req.body.category,
      current_price: req.body.current_price,
      initial_price: req.body.initial_price
    };

    if (req.file) {
      updatedData.image = `http://localhost:${PORT}/images/${req.file.filename}`;
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { id: productId },
      updatedData,
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: "Error updating product", error: error.message });
  }
});



app.post('/delete-product',async (req,res) => {
  await Product.findOneAndDelete({id:req.body.id})
  res.json({
    success:true,
    message:"Product deleted"
  })
})

app.get('/products', async (req, res) => {
  let products = await Product.find({})
  // console.log(products)
  res.send(products)

});

app.get('/recent-products', async (req, res) => {
  try {
    const products = await Product.find({})
      .sort({ date: -1 })  
      .limit(17);  

    res.send(products);
  } catch (error) {
    console.error('Error fetching recent products:', error)
    res.status(500).send('Error fetching recent products')
  }
})

//user schema
const User = mongoose.model('User', {
  email:{
    type:String,
    unique:true,
  },
  password:{
    type:String,
  },
  date:{
    type:Date,
    default:Date.now
  }
})

// app.post('/admin/register', async ( req,res ) => {
//   let existingUser = await User.findOne({ email: req.body.email })
//   if (existingUser){
//     return res.status(400).json({
//       success:false,
//       errors:"Email already registered"
//     })
//   }

//   const user =  new User({
//     email:req.body.email,
//     password:req.body.password,
//   })

//   await user.save()
//   const data = {
//     user: {
//       id:user.id,
//     }
//   }
//   const token = jwt.sign(data,"secret")
//   res.json({
//     success:true,
//     token
//   })
// })

app.post('/admin',async(req,res) => {
  let user = await User.findOne({
    email:req.body.email
  })
  if (user) {
    const passwordValid = req.body.password === user.password

    if (passwordValid){
      const data = {
        user:{
          id:user.id
        },
      }
      const token = jwt.sign(data,"secret")
      res.json({
        success:true,
        token
      })
    } else {
      res.json({
        success:false,
        errors:"Wrong password"
      })
    }
  } else {
    res.json({
      success:false,
      errors:"Wrong Email address"
    })
  }
})

app.listen(PORT,(error) => {
  if (!error){
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log(`Error : ${error}`);
    
  }
})
