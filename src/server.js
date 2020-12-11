import express from 'express';
import {} from 'dotenv/config';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import contactRoute from './routes/subscribeRoute';

const app = express();

const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.fyxsl.mongodb.net/mybrand?retryWrites=true&w=majority`;
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`the server started running on port ${process.env.PORT} `);
  });
});

// app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.use('/', contactRoute);

app.use((req, res) => {
  const error = new Error('Page Not found');
  res.status(404).json({

    error: {
      message: error.message,
    },
  });
});

export default app;
