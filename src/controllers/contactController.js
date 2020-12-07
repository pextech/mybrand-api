import Contact from '../models/contactModel';

const contactPost = (req, res) => {
  const contact = new Contact({

    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,

  });
  contact.save().then((result) => {
    res.status(201).json({
      message: 'sent successfuly',
    });
    // eslint-disable-next-line no-console
    console.log(result);
  }).catch((err) => { res.status(500).json({ error: err }); });
};

export default contactPost;
