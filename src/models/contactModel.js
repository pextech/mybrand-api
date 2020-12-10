import mongoose from 'mongoose';

const { Schema } = mongoose;

const contactSchema = new Schema({

  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/,
  },
  phone: {
    type: Number,
  },
  message: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
