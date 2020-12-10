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
  },
  message: {
    type: String,
    required: true,
  },

}, { timestamps: true });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
