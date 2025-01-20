import express from "express";
import connectDB from "./lib/connectDB.js"
import userRouter from './routes/user.route.js'
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import webHookRouter from "./routes/webhook.route.js";
import { clerkMiddleware, requireAuth } from '@clerk/express'
import cors from 'cors'



const app = express();
//"http://localhost:5173"
app.use(cors(process.env.CLIENT_URL))

// app.use("*", cors({
//     origin : true,
//     credentials : true
// }))

app.use(clerkMiddleware())

app.use("/webhooks", webHookRouter)

app.use(express.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });






// app.get('/auth-state', (req,res) => {
//     const authState = req.auth;
//     const userId = req.auth.userId;
//    // console.log("the user id is "+userId)

//    if(!userId){
//     console.log("you are not authoraized")
//    }
//    console.log("the user id is "+userId)

//     res.json(authState)
// })

// app.post("/protect", (req,res) => {
//     const {userId} = req.auth;
    
//     if(!userId){
//         return res.status(401).json("Not authenticated")
//     }

//     res.status(200).json("content")
// })

// app.get("/protect",requireAuth(), (req,res) => {
    
//     res.status(200).json("content")
// })



app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)


app.get("/test", (req, res) => {
    res.status(200).send("it worked!")
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);

    res.json({
        message : error.message || "Something went wrong",
        status : error.status,
        stack : error.stack,
    });
});



app.listen(3000, () => {

    connectDB()
    console.log("Server is running!")
})