// get all posts
exports.getPosts = (req, res) => {
  res.json({
    posts: [
      {title: 'First post title', description: 'First post description.'}
    ]
  });
}