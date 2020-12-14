/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
import User from '../models/registerModel';

const registerPost = (req, res) => {
  User.find({ email: req.body.email }).exec().then((user) => {
    if (user.length >= 1) {
      res.status(409).json({
        message: 'user exits',
      });
    } else {
      bcrypt.hash(req.body.password, 10, ((err, hash) => {
        if (err) {
          return res.status(500).json({
            error: err,
          });
        }
        const newUser = new User({

          email: req.body.email,
          password: hash,

        });

        newUser.save().then((result) => {
          res.status(201).json({
            status: 201,
            message: 'user created',
            user: newUser,

          });
          console.log(result);
        }).catch((error) => { res.status(500).json({ error }); });
      }));
    }
  });
};

export default registerPost;
