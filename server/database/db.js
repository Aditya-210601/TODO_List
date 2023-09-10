import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () =>{

    const MONGOOSE_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-7goenfk-shard-00-00.kngs3ou.mongodb.net:27017,ac-7goenfk-shard-00-01.kngs3ou.mongodb.net:27017,ac-7goenfk-shard-00-02.kngs3ou.mongodb.net:27017/?ssl=true&replicaSet=atlas-cn6f8l-shard-0&authSource=admin&retryWrites=true&w=majority`;

    mongoose.connect(MONGOOSE_URI,{useNewUrlParser:true});

    mongoose.connection.on('connected', () => console.log("Database connected successfully"));

    mongoose.connection.on('disconnected', () => console.log("Database disconnected"));

    mongoose.connection.on('error', () => console.log('Error occurred while connecting ',error.message));
}

export default Connection;