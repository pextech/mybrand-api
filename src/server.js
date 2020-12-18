import express from 'express';
import {} from 'dotenv/config';
import fileupload from 'express-fileupload';
import mongoose from 'mongoose';
import blogRoute from './routes/blogRoute';
import contactRoute from './routes/contactRoute';
import userRoute from './routes/userRoute';

const app = express();

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fyxsl.mongodb.net/mybrand?retryWrites=true&w=majority`;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(process.env.PORT || 5000);
});
app.use(express.json());
app.use(express.json({ extended: false }));
app.use(fileupload({ useTempFiles: true }));

// eslint-disable-next-line consistent-return
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept,Authorization');

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE');
    return res.status(200).json({});
  }
  next();
});
app.get('/',(req,res) => {
  res.status(200).json({message: 'Hey, you made it to my API, have fun'});
});
app.use('/', blogRoute);
app.use('/', contactRoute);
app.use('/', userRoute);

app.use((req, res) => {
  const error = new Error('Page Not found');
  res.status(404).json({

    error: {
      message: error.message,
    },
  });
});

export default app;
