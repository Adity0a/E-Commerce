import mongoose from "mongoose";
import dns from "node:dns";

// Force Node.js to use Google DNS to resolve SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    
        mongoose.connection.on('connected', () => {
            console.log("MongoDB connected");
        });
        await mongoose.connect(process.env.MONGODB_URI as string);
}

export default connectDB;
