import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://SahilRamani128:Sahil128@cluster0.iuf1s.mongodb.net/food-order').then(()=>console.log("Database Connected"));
}