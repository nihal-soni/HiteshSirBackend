import dotenv from "dotenv";

dotenv.config(); 

import connectDB from "./db/index.js";


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000), () => {
        console.log(`Server is running on port: ${process.env.PORT}`);
    }
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err)
})

/*
import express from "express";
const app = express()

    // function connectDB(){}     //one way of connecting database 
    // connectDB()

    // the second way of connecting database using async await 

    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERROR:", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port ${process.env.PORT}`)
            })

        } catch {
            console.error("ERROR:", error)
            throw error
        }
    })

    */