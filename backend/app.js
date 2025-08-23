require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const cors = require('cors');
const User=require('./models/usermodel'); // Import the User model

const app = express();
app.use(cors({origin:'http://localhost:3000',credentials:true})); // allow requests from frontend
app.use(express.json()); // so we can parse JSON requests
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded data
app.use(cookieParser()); // to parse cookies
    
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error(err));







//-----------------------------------------------------------------------------------------
app.post('/signup', async(req, res) => {
    
    console.log("the recived signup data is:", req.body)
    const {first_name, last_name, email, password, password_confirmation} = req.body;

    const existingUser=await User.findOne({email});
    if(existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }

    if (password !== password_confirmation) {
    return res.status(400).json({ error: 'Passwords do not match' });

  }
    try{
        
        const salt=await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password before saving
        const newUser = new User({first_name, last_name, email, password:hashedPassword});
        await newUser.save()
        res.status(201).json({ success: true, message: "User created successfully" });
    }
    catch(error){
        console.error("Error saving user:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
     

});
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
app.post('/Login',async function (req, res) {
  let {email , password}=req.body;
   try{
  const verify= await User.findOne({email:email})
  if (!verify) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    // console.log(verify.password,password)

    const isMatch = await bcrypt.compare(password, verify.password);
    
    if (!isMatch) {
      return res.status(400).json({ error: 'Invalid email or password' });
    }

    console.log("matched")
    const token = jwt.sign({ userId: verify._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      
    });
    res.status(200).json({ success: true,token, message: 'Login successful' });

    } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
app.get('/logout', (req, res) => {
    res.clearCookie('token'); // Clear the cookie
    res.status(200).json({ success: true, message: 'Logout successful' });
    res.redirect('http://localhost:3000/Login'); // Redirect to the frontend
});
//-----------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------
const roomsRoute = require('./roomsRoute');
app.use('/api/rooms', roomsRoute); 
//-----------------------------------------------------------------------------------------



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
