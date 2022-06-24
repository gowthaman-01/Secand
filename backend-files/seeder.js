import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors"
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModels.js";
import Order from "./models/userOrders.js";
import Product from "./models/userProducts.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) => ({
            ...product, 
            user: adminUser, 
        }));
        await Product.insertMany(sampleProducts);
        console.log("Data imported".green.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await User.deleteMany();
        await Product.deleteMany();
        console.log("Data destroyed".red.inverse);
        process.exit();
    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

process.argv[2] === "-d" ? destroyData() : importData(); 