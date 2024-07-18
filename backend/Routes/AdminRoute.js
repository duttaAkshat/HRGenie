import express from 'express';
import User from '../models/User.js'; 
import bcrypt from 'bcrypt'; 

const router = express.Router();

router.post('/adminlogin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
      console.log('User not found')
    }

    // Compare the password with the hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
      console.log('Incorrect password')
    }

    // If the email and password match, send a success response
    res.status(200).json({ message: 'Login successful' });
    console.log('successfully logged in')
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export { router as adminRouter };
