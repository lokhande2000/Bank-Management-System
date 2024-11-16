import express from 'express';
import cors from 'cors';

const app = express();
const port = 8080;

// use middlewares 
app.use(express.json());
app.use(cors());

// home route 
app.get('/', (req, res)=>{
    console.log("welcome to home route")
    res.send("home Page");
})

app.listen(port, ()=>{
    console.log(`server listening on port ${port}`);
});