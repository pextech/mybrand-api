/* eslint-disable consistent-return */
/* eslint-disable no-shadow */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import Blog from '../models/blogModel';
import Comment from '../models/commentModel';
import uploader from '../util/cloudinary';
import {} from 'path';
import {} from 'fs';

export const blogPost = async (req, res) => {
  const blog = await Blog.create({
    ...req.body,
    imageUrl: '',
    imageId: '',
  });

  if (req.files) {
    const tmp = req.files.image.tempFilePath;
    const result = await uploader.upload(tmp, (_, result) => result);
    blog.imageUrl = result.url;
    blog.imageId = result.public_id;
    blog.save();

    return res.status(201).json({ success: true, data: blog });
  }
};

export const blogGet = (req, res) => {
  Blog.find().sort({ createdAt: -1 })

    .then((result) => {
      if (result.length > 0) {
        const response = {
          count: result.length,
          Blogs: result.map((doc) => ({
            _id: doc._id,
            blogImage: doc.blogImage,
            title: doc.title,
            description: doc.description,
            createdAt: doc.createdAt,
            comments: doc.comments,

            request: {
              type: 'GET',
              url: `http://localhost:${process.env.PORT}/blog/get/${doc._id}`,
            },

          })),
        };

        res.status(200).json(response);
      } else {
        res.status(404).json({

          message: 'no blogs found',
        });
      }
    }).catch((err) => { res.status(500).json({ error: err }); });
};

export const blogDetail = (req, res) => {
  const { id } = req.params;
  if (id) {
    Blog.findById({ _id: id }).then((response) => {
      console.log(response);
      res.status(200).json(response);
    }).catch((err) => { res.status(500).json({ error: err }); });
  } else {
    res.status(404).json({
      message: 'there is no blog with this id',
    });
  }
};

export const BlogPatch = (req, res) => {
  const { id } = req.params;

  const newBlog = {

    blogImage: req.file.filename,
    title: req.body.title,
    description: req.body.description,

  };

  Blog.updateOne({ _id: id }, { $set: newBlog }).then(() => {
    res.status(201).json({
      status: 201,
      message: 'blog post updated',
      blog: newBlog,

    });
  })

    .catch((err) => { res.status(500).json({ error: err }); });
};

export const blogDelete = (req, res) => {
  const { id } = req.params;
  Blog.findByIdAndDelete({ _id: id }).then(() => {
    res.status(200).json({
      message: 'blog is deleted',

    });
  })

    .catch((err) => { res.status(500).json({ error: err }); });
};

export const blogComment = (req, res) => {
  const comments = new Comment({
    name: req.body.name,
    message: req.body.message,
  });
  comments.save();
  const { id } = req.params;
  Blog.find({ _id: id }, { comments }).then((result) => {
    res.status(201).json({
      status: 201,
      message: 'comment is created',
      comments,
    });
    console.log(result);
  }).catch((err) => { res.status(500).json({ error: err }); });
};
