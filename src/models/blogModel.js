import mongoose from 'mongoose';

const { Schema } = mongoose;

const blogSchema = new Schema({

  imageUrl: { type: String },
  imageId: { type: String },
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
      ref: 'Comment',
    },
  ],

}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
