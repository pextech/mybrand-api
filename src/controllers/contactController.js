/* eslint-disable no-underscore-dangle */
import Contact from '../models/contactModel';

export const contactPost = (req, res) => {
  const contact = new Contact({

    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,

  });
  contact.save().then((result) => {
    res.status(201).json({
      status: 201,
      message: 'message is created',
      data: contact,
    });
    // eslint-disable-next-line no-console
    console.log(result);
  }).catch((err) => { res.status(500).json({ error: err }); });
};

export const contactGet = (req, res) => {
  Contact.find().sort({ createdAt: -1 }).then((result) => {
    const messages = {

      count: result.length,
      messages: result.map((doc) => ({
        id: doc._id,
        name: doc.name,
        email: doc.email,
        phone: doc.phone,
        message: doc.message,
      })),

    };

    res.status(200).json(
      {
        status: 200,
        data: messages,
      },
    );
  }).catch((err) => { res.status(500).json({ error: err }); });
};

export const contactDelete = (req, res) => {
  const { id } = req.params;
  Contact.findByIdAndDelete(id).then(() => {
    res.status(200).json({
      message: 'deleted message',
    });
  }).catch((err) => { res.status(500).json({ error: err }); });
};
