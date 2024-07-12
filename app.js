const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();

// Handlebars middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'partials'),
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Example routes (you can expand these with actual logic)
app.get('/', (req, res) => {
  // Example data (replace with your actual data fetching)
  const posts = [
    { title: 'First Post', content: 'This is the content of the first post.', author: { username: 'john_doe' }, createdAt: '2024-07-12' },
    { title: 'Second Post', content: 'This is the content of the second post.', author: { username: 'jane_smith' }, createdAt: '2024-07-11' },
  ];

  // Render home page with posts data
  res.render('home', { 
    layout: 'main', // Optional: Specify layout explicitly if needed
    loggedIn: req.session.loggedIn, // Example: Pass logged-in status to the template
    posts: posts 
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});


