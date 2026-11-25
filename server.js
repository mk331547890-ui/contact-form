const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:5500',
}));
 app.use(express.json());

 //contact form API 
 app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    const { CONTACT_FORM_EMAIL, CONTACT_FORM }  = req.body;

    //server-side validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
             error: 'All fields are required!' 
            });}
        //Display received data in terminal 
        console.log('Received contact form submission:');
        console.log("req.body");

        res.status(201).json({
            success: true,
            message: 'Contact form submitted successfully!',
        });
    });

// Start the server
     const PORT = process.env.PORT || 5000;
           app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});