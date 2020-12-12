import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema({

  blogImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'comment',
    },
  ],

}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
