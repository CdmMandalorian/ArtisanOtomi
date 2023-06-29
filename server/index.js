import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

//our globals//
import Routes from './routes/users.js';

// initialize the app //
const app = express();
dotenv.config();

// all routes within the Routes will start with posts example not localhost 5000 but localhost:5000/posts //

// sets up body parser to properly send requests //
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/post', Routes);
// connect server to real database (mongo) to host our database on their cloud not local //

// const CONNECTION_URL = 'mongodb+srv://Rediscover:Rediscover123@rediscover.zqz0o.mongodb.net/uploads?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, { useNewUrlParser: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is Alive on port: ${PORT}`))
  )
  // if fails catch the error //
  .catch((error) => console.log(`${error} did not connect`));

// avoid warnings in the console //

mongoose.set('useFindAndModify', false);
