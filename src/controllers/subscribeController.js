/* eslint-disable no-underscore-dangle */
import Subscribe from '../models/subscribeModel';

export const subscribePost = (req, res) => {
  const subscribe = new Subscribe({

    email: req.body.email,

  });
  subscribe.save().then(() => {
    res.status(201).json({
      status: 201,
      message: 'successfuly subscribed',
      data: subscribe,
    });
  }).catch((err) => { res.status(500).json({ error: err }); });
};

export const subscribeGet = (req, res) => {
  Subscribe.find().sort({ createdAt: -1 }).then((result) => {
    if (result.length > 0) {
      const subscribers = {

        count: result.length,
        subscribers: result.map((doc) => ({
          id: doc._id,
          email: doc.email,
          createdAt: doc.createdAt,
        })),

      };

      res.status(200).json(
        {
          status: 200,
          data: subscribers,
        },
      );
    } else {
      res.status(404).json({ message: 'oops, no one has subscribed yet' });
    }
  }).catch((err) => { res.status(500).json({ error: err }); });
};

export const SubscribeDelete = (req, res) => {
  const { id } = req.params;
  Subscribe.findByIdAndDelete(id).then(() => {
    res.status(200).json({
      message: 'deleted Subscriber',
    });
  }).catch((err) => { res.status(500).json({ error: err }); });
};
