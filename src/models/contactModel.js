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
  },
  phone: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
