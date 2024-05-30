import express from 'express';
import post from './post.js';
import { users } from './users.js';

const app = express();
const port = 8000;

app.use(express.json());

//--------ALL POST ROUTES------------
//--Post add--
app.post('/posts', (req, res) => {
    post.push(req.body);
    console.log(post);
    res.status(200).json({ message: "Successfully added Post" });
});

//--------ALL GET ROUTES------------
//--Get all posts--
app.get('/posts', (req, res) => {
    res.status(200).json(post);
});

//--Get user post--
app.get('/users/:id/posts', (req, res) => {
    try {
        const userId = req.params.id;
        const postsOfUser = post.filter((item) => item.userId == userId); 
        if (postsOfUser.length === 0) {
            return res.status(400).json({ message: "No posts for this user" });
        }
        res.status(200).json(postsOfUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//--Get specific post--
app.get('/posts/:id', (req, res) => {
    try {
        const postId = req.params.id;
        const singlePost = post.find((item) => item.id == postId);
        if (!singlePost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(singlePost);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//--------ALL PUT/PATCH ROUTES------------
//--Update post--
app.put('/posts/:id', (req, res) => {
    try {
        const postId = req.params.id;
        const index = post.findIndex((item) => item.id == postId);
        if (index === -1) {
            return res.status(404).json({ message: "Post not found" });
        }
        post[index] = { ...post[index], ...req.body };
        res.status(200).json({ message: "Post updated successfully", post: post[index] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.patch('/posts/:id', (req, res) => {
    try {
        const postId = req.params.id;
        const index = post.findIndex((item) => item.id == postId);
        if (index === -1) {
            return res.status(404).json({ message: "Post not found" });
        }
        post[index] = { ...post[index], ...req.body };
        res.status(200).json({ message: "Post updated successfully", post: post[index] });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//--------ALL DELETE ROUTES------------
//--Delete post--
app.delete('/posts/:id', (req, res) => {
    try {
        const postId = req.params.id;
        const index = post.findIndex((item) => item.id == postId);
        if (index === -1) {
            return res.status(404).json({ message: "Post not found" });
        }
        post.splice(index, 1);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.listen(port, () => {
    console.log(`App is running on port ${port}`);
});
