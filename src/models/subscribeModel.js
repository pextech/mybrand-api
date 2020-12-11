import mongoose from 'mongoose';

const { Schema } = mongoose;

const subscribeSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },

}, { timestamps: true });

const Subscribe = mongoose.model('Subscribe', subscribeSchema);

export default Subscribe;
