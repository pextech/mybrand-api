import {} from 'dotenv/config';
import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => res.status(200).send({ message: 'YAY! Congratulations! Your first endpoint is working' }));

app.listen(process.env.PORT || 5000, () => {
  console.log(`app running on port ${process.env.PORT}`);
});

export default app;
