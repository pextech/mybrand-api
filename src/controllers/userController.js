/* eslint-disable consistent-return */
/* eslint-disable no-underscore-dangle */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';

export const registerPost = (req, res) => {
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

        newUser.save().then(() => {
          res.status(201).json({
            status: 201,
            message: 'user created',
            user: newUser,

          });
        }).catch((error) => { res.status(500).json({ error }); });
      }));
    }
  });
};
export const userLogin = (req, res) => {
  User.find({ email: req.body.email }).exec().then((user) => {
    if (user < 1) {
      return res.status(500).json({
        message: 'Auth failed',
      });
    }

    bcrypt.compare(req.body.password, user[0].password, (err) => {
      if (err) {
        res.status(500).json({
          message: 'Auth failed',
        });
      } else {
        const token = jwt.sign({

          email: req.body.email,
          userId: user[0]._id,

        },
        process.env.TOKEN,
        { expiresIn: '1hr' });

        return res.status(200).json({
          status: 200,
          message: 'user successfuly logged in',
          token,
        });
      }
    });
  })
    .catch((err) => { res.status(500).json({ error: err }); });
};
