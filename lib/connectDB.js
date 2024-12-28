import 'dotenv/config';
import mongoose from "mongoose";


const connectDB = async () => {
    try{
         // await mongoose.connect("mongodb+srv://blogPost:asif@clusterblogpostsite.lpbmk.mongodb.net/?retryWrites=true&w=majority&appName=ClusterBlogPostSite")
          await mongoose.connect(process.env.MONGO)
          console.log("mongobd is connected")
        
    }catch(err){
        console.log(err)
    }
}

export default connectDB;