const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.port||5000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Backend is running');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
