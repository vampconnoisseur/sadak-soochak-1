import mongoose from 'mongoose';

export const connectDB = async (req, res) => {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URL).then(() => {
        console.log("I am connected")
    }).catch((err) => { console.log(err) });
};

export default connectDB;