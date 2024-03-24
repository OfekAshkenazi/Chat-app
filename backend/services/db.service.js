import mongoose from "mongoose"

export default async function connect() {
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected to MongoDB")

    }catch (error) {
        console.log("Error connecting to MongoDB", error.message)
    }
}