const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/TaskerRoutes');
require('dotenv').config();
const cors = require('cors');

const app = express();
const PORT = process.env.port || 8080;

app.use(express.json());
app.use(cors());

mongoose
.connect(process.env.MONGODB_URL) 
.then(()=> console.log(`connected to MongoDB`))
.catch((err)=> console.log(err))

app.use(routes)

app.listen(PORT, ()=>{ console.log(`app listening on: ${PORT}`);})
