// mongodb+srv://app:1234@app.zqa4sgg.mongodb.net/?retryWrites=true&w=majority&appName=app

import mongoose from "mongoose";

const connection_url = 'mongodb+srv://app:1234@app.zqa4sgg.mongodb.net/'

const connect = () => {
    if(process.env.NODE_ENV !== "production"){
        mongoose.set("debug", true);
    }

    mongoose.connect(connection_url, {
        dbName : "deploy",
    })
    .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((err) => {
        console.error(err);
        console.log("Connected fail to MongDB")
    })
}

export default connect;