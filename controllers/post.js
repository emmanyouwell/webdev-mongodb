const Post = require('../models/post');
const slugify = require('slugify');

exports.create = (req,res) => {
    const { title, content, user} = req.body;
    const slug = slugify(title);
    
    Post.create({title,content,user,slug});
    return res.status(200).json({message: "Post added"});
}