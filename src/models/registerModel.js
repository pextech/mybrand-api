import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({

  email: {
    type: String,
    required: [true, 'please input an email'],
    unique: true,
    match: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  },
  password: {
    type: String,
    required: [true, 'please add a password'],
    minlength: 6,
  },

});

const User = mongoose.model('users', userSchema);

export default User;
