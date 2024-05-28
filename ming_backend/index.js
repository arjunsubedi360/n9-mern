import express from 'express'
import post from './post.js'
const app = express()
const port = 8000
app.use(express.json())
app.get('/',(req,res)=>{
    res.send("This is main hai")
})
app.post('/posts',(req,res)=>{
    post.push(req.body)
    console.log(post)
    res.send("This is main hai")
})
app.get('/posts',(req,res)=>{
    res.status(200).json(post)
})
app.listen(port,()=>{
    console.log(`App is runing on port ${port}`);
})